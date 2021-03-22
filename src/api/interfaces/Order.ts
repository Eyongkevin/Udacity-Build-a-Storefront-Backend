/* eslint-disable camelcase */
export interface OrderType {
  product_id: number;
  quantity: number;
  user_id: number;
  status: string;
}
export interface OrderReturnType {
  id: number;
  product_id: number;
  quantity: number;
  user_id: number;
  status: string;
}
