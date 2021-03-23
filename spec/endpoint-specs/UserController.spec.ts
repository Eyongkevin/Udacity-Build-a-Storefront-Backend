/* eslint-disable no-undef */
import supertest from 'supertest';
import { User } from '../../src/api/models/User';
import { server } from '../../src/server';

const request = supertest(server);
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.J8BgsyqA3Y6F71NXbfuYIfRVuvRa_qb08RStxrCVhlQ';

describe('Test endpoint responses', () => {
  beforeAll(() => {
    spyOn(User.prototype, 'getUsers').and.returnValue(
      Promise.resolve([
        {
          id: 1,
          firstname: 'eyong',
          lastname: 'kevin',
          password: 'thisisenow'
        }
      ])
    );
  });

  it('gets all users api endpoint', async (done) => {
    const res = await request
      .get('/users')
      .set('Authorization', 'Bearer ' + token);

    expect(res.status).toBe(200);
    expect(res.body).toEqual([
      {
        id: 1,
        firstname: 'eyong',
        lastname: 'kevin',
        password: 'thisisenow'
      }
    ]);
    done();
  });
});
