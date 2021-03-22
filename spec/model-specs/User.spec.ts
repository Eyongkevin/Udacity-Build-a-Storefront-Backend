import { User } from '../../src/api/models/User';
import {
  UserReturnType,
  UserCreatedReturnType
} from '../../src/api/interfaces/User';

const user = new User();

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

  it('createUser method should create a user with auth to true', async () => {
    const result: UserCreatedReturnType = await user.createUser({
      firstname: 'kevin',
      lastname: 'eyong',
      password: 'thisismeenow2020#'
    });
    expect(result.auth).toEqual(true);
    expect(result.token).toString();
  });
  it('getUsers method should return all users', async () => {
    const result: UserReturnType[] = await user.getUsers();
    expect(result).toHaveSize(1);
    expect(result[0].id).toEqual(1);
    expect(result[0].firstname).toEqual('kevin');
    expect(result[0].lastname).toEqual('eyong');
    expect(result[0].password).toString();
  });

  it('getUserById method should return the correct user', async () => {
    const id: number = 1;
    const result: UserReturnType = await user.getUserById(id);
    expect(result.id).toEqual(id);
    expect(result.firstname).toEqual('kevin');
    expect(result.lastname).toEqual('eyong');
    expect(result.password).toString();
  });
  it('deleteProduct method should delete the correct product', async () => {
    const result: UserReturnType = await user.deleteUser(1);
    expect(result.firstname).toEqual('kevin');
    expect(result.lastname).toEqual('eyong');
    expect(result.password).toString();
  });
});
