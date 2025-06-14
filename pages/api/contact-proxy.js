// This file acts as a proxy for the Google Apps Script endpoint to avoid CORS issues and keep the endpoint private.
// Place this file in /pages/api/contact-proxy.js for Next.js (Vercel) API routes.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbzPiiq5luxfkg9d68pyqt_NVb_lrUEdhjlEmjCSV5ddG-nsYZ7qeg2zmM3BuF4aYKW_8A/exec',
      {
        method: 'POST',
        // Google Apps Script expects form data as application/x-www-form-urlencoded or FormData, not JSON
        headers: {
          //'Content-Type': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(req.body).toString(),
      }
    );
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to send data to Google Script' });
  }
}
