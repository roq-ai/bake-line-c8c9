import { GetQueryInterface } from 'interfaces';

export interface InventoryInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface InventoryGetQueryInterface extends GetQueryInterface {
  id?: string;
}
