/* eslint-disable no-undef */
import { User } from '../../src/api/models/User';
import {
  UserReturnType,
  UserCreatedReturnType
} from '../../src/api/interfaces/User';

const user: User = new User();

describe('User Model', () => {
  it('should have a getUsers  method', () => {
    expect(user.getUsers).toBeDefined();
  });

  it('should have a getUserById method', () => {
    expect(user.getUserById).toBeDefined();
  });

  it('should have a createUser method', () => {
    expect(user.createUser).toBeDefined();
  });
  it('should have a deleteUser method', () => {
    expect(user.deleteUser).toBeDefined();
  });

  it('should create a user with auth to true using createUser method', async () => {
    const result: UserCreatedReturnType = await user.createUser({
      firstname: 'kevin',
      lastname: 'eyong',
      password: 'thisismeenow2020#'
    });
    expect(result.auth).toEqual(true);
    expect(result.token).toBeDefined();
  });
  it('should return all users using getUsers method', async () => {
    const result: UserReturnType[] = await user.getUsers();
    expect(result).toHaveSize(1);
    expect(result[0].id).toEqual(2);
    expect(result[0].firstname).toEqual('kevin');
    expect(result[0].lastname).toEqual('eyong');
    expect(result[0].password.length).toBeGreaterThanOrEqual(60);
    expect(result[0].password).not.toEqual('thisismeenow2020#');
  });

  it('should return the correct user using getUserById method', async () => {
    const id: number = 2;
    const result: UserReturnType = await user.getUserById(id);
    expect(result.id).toEqual(id);
    expect(result.firstname).toEqual('kevin');
    expect(result.lastname).toEqual('eyong');
    expect(result.password.length).toBeGreaterThanOrEqual(60);
  });
  it('should delete the correct product using deleteProduct method', async () => {
    const result: UserReturnType = await user.deleteUser(2);
    expect(result.firstname).toEqual('kevin');
    expect(result.lastname).toEqual('eyong');
    expect(result.password.length).toBeGreaterThanOrEqual(60);
  });
});
