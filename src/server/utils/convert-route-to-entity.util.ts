const mapping: Record<string, string> = {
  bakeries: 'bakery',
  carts: 'cart',
  'cart-items': 'cart_item',
  inventories: 'inventory',
  orders: 'order',
  products: 'product',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
