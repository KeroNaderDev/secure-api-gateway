const express = require('express');
const router = express.Router();
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({ windowMs: 15*60*1000, max: 100, message: {error: 'Too many requests'} });
router.use(limiter);
router.get('/health', (req,res)=> res.json({status:'ok', timestamp: new Date().toISOString()}));
router.get('/protected', (req,res)=>{
  const key = req.headers['x-api-key'];
  if(!key) return res.status(401).json({error:'Missing API key'});
  res.json({data:'secure data', key: key.substring(0,8)+'...'});
});
router.post('/mask', (req,res)=>{
  const {data} = req.body;
  if(!data) return res.status(400).json({error:'Missing data'});
  const masked = data.replace(/[a-zA-Z0-9]/g, '*');
  res.json({original: data, masked});
});
module.exports = router;
