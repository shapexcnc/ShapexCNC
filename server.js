const express = require('express');
const path = require('path');
const app = express();

// Use the port provided by Railway, or default to 3000
const PORT = process.env.PORT || 3000;

// Serve static assets (like the images folder and index.html) from the root directory
app.use(express.static(path.join(__dirname)));

// Fallback route: serve index.html for any other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
