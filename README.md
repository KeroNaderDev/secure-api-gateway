# 🔐 Secure API Gateway — Demo

Node.js/Express gateway that masks, validates, and rate-limits backend APIs

> **Cybersecurity Track — Demo Showcase** | **Real Problem, Synthetic Data**

## Overview
**Problem:** Exposed backend APIs are directly abused (no validation, no rate limit)

**Solution:** Node.js/Express gateway that masks, validates, and rate-limits backend APIs This demo proves the engineering approach with synthetic data.

## Architecture
```
Client → Gateway (Validation → Rate Limit → Auth) → Backend API → DB
```

## Tech Stack
- Node.js, Express, JWT, Helmet, Rate Limit

## Features
- Masking layer\n- JWT validation\n- Rate limiting (100 req/min)\n- Security headers

## Security
- Validation, JWT/RBAC, Rate limiting, No real secrets

## Screenshots
![Demo](./screenshots/demo.png)

## Demo
- **Demo Data:** `demo-data.json`
- **Live:** `https://kero.10001mb.com/demo/secure-api-gateway-demo` *(placeholder)*

## Installation
```bash
git clone https://github.com/KeroNaderDev/secure-api-gateway-demo.git
cd secure-api-gateway-demo
npm install
cp .env.example .env
npm run dev
```

## Usage
```bash
npm run dev
```

## What I Learned
- Cybersecurity end-to-end design
- Demo vs real data separation
- Professional portfolio structure

---
*Track: Cybersecurity • Portfolio: [KeroNaderDev](https://github.com/KeroNaderDev)*
