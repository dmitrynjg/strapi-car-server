export default {
  routes: [
    {
      method: "GET",
      path: "/car/brands",
      handler: "car.getBrands"
    },
    {
      method: "GET",
      path: "/car/colors",
      handler: "car.getColors"
    },
  ],
};
