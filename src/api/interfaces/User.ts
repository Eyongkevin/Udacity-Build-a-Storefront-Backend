export interface UserType {
  firstname: string;
  lastname: string;
  password: string;
}
export interface UserReturnType {
  id: number;
  firstname: string;
  lastname: string;
  password: string;
}
export interface UserCreatedReturnType {
  auth: boolean;
  token: string;
}
