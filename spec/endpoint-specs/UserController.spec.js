/* eslint-disable no-undef */
import Request from 'request';
import { server } from '../../src/server';

const urlAddress = 'http://localhost:3000';

describe('Server', () => {
  afterAll(() => {
    server.close();
  });
  describe('GET all users /', () => {
    const data = {};
    beforeAll((done) => {
      Request.get(`${urlAddress}/users`, (_error, response, body) => {
        data.status = response.statusCode;
        data.body = body;
        done();
      });
    });
    it('Status 200', () => {
      expect(data.status).toBe(200);
    });
  });
});
