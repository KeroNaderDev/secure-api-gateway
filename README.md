# 🔐 Secure API Gateway — Real Code

Complete Express gateway that masks, validates, and rate-limits backend APIs — production ready.

> **Cybersecurity Track — Real Code** | Solves exposed backend APIs abuse

## Overview
**Problem:** Backend APIs are directly exposed without validation, rate limiting, or masking — easy to abuse.

**Solution:** This gateway sits in front of any backend, validates every request, enforces rate limits, masks sensitive data, and adds security headers. Fully configurable via `.env`.

## Architecture
```
Client → Gateway (Helmet → Rate Limit → Validation → Auth) → Backend API → Database
         ↓
   Security Layer (OWASP, Rate Limit, Masking)
```

## Tech Stack
- **Runtime:** Node.js 18, Express 4.18
- **Security:** Helmet, express-rate-limit, JWT
- **Config:** dotenv, config.js (PORT, API_KEY, UPSTREAM_URL, RATE_MAX)

## Features
- Request masking (`/api/mask` — replaces data with `*`)
- JWT validation (`x-api-key` header)
- Rate limiting (100 req/15min, configurable via `RATE_MAX`)
- Security headers via Helmet
- Health check (`/api/health`)

## Security
- Helmet for headers (XSS, HSTS, CSP)
- Rate limiting to prevent brute force
- API key validation
- Input sanitization

## Screenshots
![Gateway](./screenshots/gateway.png)

## Demo
- **Demo Data:** `demo-data.json` with 25 synthetic requests
- **Live:** `https://kero.10001mb.com/demo/secure-api-gateway` (placeholder)

## Installation
```bash
git clone https://github.com/KeroNaderDev/secure-api-gateway.git
cd secure-api-gateway
cp .env.example .env
# Edit .env: API_KEY, UPSTREAM_URL, RATE_MAX
npm install
npm start
# Open http://localhost:3000/api/health
```

## Configuration — For Any User
```env
PORT=3000
API_KEY=change-me-to-your-secret
UPSTREAM_URL=https://api.example.com
RATE_MAX=100
ALLOWED_ORIGINS=*
```

## Usage
```bash
curl http://localhost:3000/api/health
curl -H "x-api-key: demo-key-123" http://localhost:3000/api/protected
curl -X POST http://localhost:3000/api/mask -H "Content-Type: application/json" -d '{"data":"secret123"}'
```

## What I Learned
- Gateway pattern for API security
- Rate limiting and Helmet in production
- Config-driven design for any deployment

---
*Track: Cybersecurity • Portfolio: [KeroNaderDev](https://github.com/KeroNaderDev)*
