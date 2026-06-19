const express = require('express');
const cors = require('cors');
const omegaRoutes = require('./routes/omegaRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/v1', omegaRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'EaseMotion Omega Platform Server is running.' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`[Server] EaseMotion Omega Platform listening on port ${PORT}`);
});
