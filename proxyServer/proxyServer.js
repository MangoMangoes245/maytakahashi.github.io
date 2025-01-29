const axios = require('axios');
const API_URL = 'https://maytakahashi-github-io-server-qr1v19b4y.vercel.app'; // Ensure this is the correct backend server URL

module.exports = async (req, res) => {
  try {
    // Extract query parameters from the incoming request
    const queryString = req.url.split('?')[1] || '';
    const response = await axios.get(`${API_URL}${req.path}?${queryString}`);

    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', 'https://maytakahashi-github-io-client.vercel.app'); // Replace with your client domain
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Send the response data
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ type: 'error', message: error.message });
  }
};
