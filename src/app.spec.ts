import request from 'supertest'
import * as http from 'http'
import { startServer } from './server'
import { app } from './app'

describe('GET /*', () => {
  let server: http.Server;

  beforeAll(() => {
    server = startServer()
  });

  afterAll((done) => {
    server.close(done);
  });

  it('should return 200 and anagrams if they exist', async () => {
    const response = await request(app).get('/crepitus')

    expect(response.status).toBe(200)
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body).toMatchSnapshot()
  })

  it('should return 200 and no anagrams if they do not exist', async () => {
    const response = await request(app).get('/trr')

    expect(response.status).toBe(200)
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body).toEqual([])
  })
})