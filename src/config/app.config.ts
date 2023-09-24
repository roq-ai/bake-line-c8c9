interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Admin', 'Customer'],
  tenantName: 'Bakery',
  applicationName: 'Bake Line',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage inventory', 'Manage users', 'Manage bakeries', 'Manage products'],
  getQuoteUrl: 'https://app.roq.ai/proposal/d8efb032-2e1d-43c5-bdd4-bb46295bc891',
};
