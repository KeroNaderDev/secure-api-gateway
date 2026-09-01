const request = require('supertest');
const express = require('express');
const gateway = require('./routes/gateway');
const app = express();
app.use(express.json());
app.use('/api', gateway);
describe('Gateway', ()=>{
  it('health ok', async ()=>{
    const res = await request(app).get('/api/health');
    if(res.status!==200) throw new Error('health failed');
  });
});
