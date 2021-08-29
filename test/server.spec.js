const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server);

it('Test endpoint', async () => {
    const response = await request.get('/api')
  
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Hello');
    
});