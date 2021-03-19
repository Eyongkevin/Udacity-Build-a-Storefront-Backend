/* eslint-disable camelcase */
// export enum STATUS {
//   active = 'active',
//   completed = 'completed'
// }
export interface OrderType {
  id: number;
  product_id: number;
  quantity: number;
  user_id: number;
  status: string;
}
