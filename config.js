// config.js — Customize for each user via .env
module.exports = {
  port: process.env.PORT || 3000,
  apiKey: process.env.API_KEY || 'demo-key-123',
  upstream: process.env.UPSTREAM_URL || 'https://api.example.com',
  rateLimit: { windowMs: parseInt(process.env.RATE_WINDOW_MS) || 15*60*1000, max: parseInt(process.env.RATE_MAX) || 100 },
  allowedOrigins: (process.env.ALLOWED_ORIGINS || '*').split(','),
};
