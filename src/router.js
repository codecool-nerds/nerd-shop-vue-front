import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import Shop from "./views/Shop";
import ProductDetails from "@/views/ProductDetails";
import BasketDetails from "@/views/BasketDetails";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/shop",
      name: "shop",
      component: Shop
    },
    {
      path: "/product/:id",
      name: "productDetails",
      component: ProductDetails
    },
    {
      path: "/basket",
      name: "basketDetails",
      component: BasketDetails
    }
  ]
});
