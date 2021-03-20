/* eslint-disable camelcase */
// export enum STATUS {
//   active = 'active',
//   completed = 'completed'
// }
export interface OrderType {
  productId: number;
  quantity: number;
  userId: number;
  status: string;
}
export interface OrderReturnType {
  id: number;
  product_id: number;
  quantity: number;
  user_id: number;
  status: string;
}
