/* eslint-disable no-undef */
import supertest from 'supertest';
import { User } from '../../src/api/models/User';
import { server } from '../../src/server';

const request = supertest(server);
const token: string = process.env.TOKEN_TEST as string;

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
    spyOn(User.prototype, 'getUserById').and.returnValue(
      Promise.resolve({
        id: 1,
        firstname: 'eyong',
        lastname: 'kevin',
        password: 'thisisenow'
      })
    );
    spyOn(User.prototype, 'createUser').and.returnValue(
      Promise.resolve({
        auth: true,
        token:
          'eyJhbGciOiJIqzI1NiIsInRfcCI6IkpXVCJ9.330.J8BgsyqA3Y6F71NXbfuYyfRVuvRa_qb08RStxrCVhlQ'
      })
    );
    spyOn(User.prototype, 'deleteUser').and.returnValue(
      Promise.resolve({
        id: 1,
        firstname: 'eyong',
        lastname: 'kevin',
        password: 'thisisenow'
      })
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
  it('gets user by id api endpoint', async (done) => {
    const res = await request
      .get('/users/1')
      .set('Authorization', 'Bearer ' + token);

    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: 1,
      firstname: 'eyong',
      lastname: 'kevin',
      password: 'thisisenow'
    });
    done();
  });
  it('create user api endpoint', async (done) => {
    const res = await request
      .post('/users')
      .set('Authorization', 'Bearer ' + token);

    expect(res.status).toBe(200);
    expect(res.body.auth).toEqual(true);
    expect(res.body.token).toBeDefined();
    done();
  });
  it('delets a user api endpoint', async (done) => {
    const res = await request
      .delete('/users/1')
      .set('Authorization', 'Bearer ' + token);

    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: 1,
      firstname: 'eyong',
      lastname: 'kevin',
      password: 'thisisenow'
    });
    done();
  });
});
