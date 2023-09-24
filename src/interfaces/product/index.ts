import { CartItemInterface } from 'interfaces/cart-item';
import { BakeryInterface } from 'interfaces/bakery';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  type: string;
  price: number;
  bakery_id: string;
  created_at?: any;
  updated_at?: any;
  cart_item?: CartItemInterface[];
  bakery?: BakeryInterface;
  _count?: {
    cart_item?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  type?: string;
  bakery_id?: string;
}
