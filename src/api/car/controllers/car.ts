/**
 * car controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::car.car', ({ strapi }) => ({
 async getBrands() {
  const list = await strapi.service('api::car.car').getBrands();
  return list;
 },
 async getColors() {
  const list = await strapi.service('api::car.car').getColors();
  return list;
 },
}));
