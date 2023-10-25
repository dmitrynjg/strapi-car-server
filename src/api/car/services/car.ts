/**
 * car service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::car.car', ({ strapi }) => ({
 async getBrands() {
  try {
   return strapi.db.connection
    .select('brand')
    .from('cars')
    .groupBy('brand')
    .then((res) => res.map(({ brand }: { brand: string }) => brand));
  } catch (e) {
   return [];
  }
 },
 async getColors() {
  try {
   return strapi.db.connection
    .select('color')
    .from('cars')
    .groupBy('color')
    .then((res) => res.map(({ color }: { color: string }) => color));
  } catch (e) {
   return [];
  }
 },
}));
