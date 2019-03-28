import Vue from "vue";
import Router from "vue-router";

import Shop from "./views/Shop";
import BasketDetails from "./views/BasketDetails";
import Login from "./components/Login";

Vue.use(Router);

export const router = new Router({
  routes: [
    {
      path: "/shop",
      name: "shop",
      component: Shop
    },
    {
      path: "/basket",
      name: "basketDetails",
      component: BasketDetails
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "*",
      redirect: "/shop"
    }
  ]
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/shop', '/login', '/basket'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next({
      path: '/login',
      query: { returnUrl: to.path }
    });
  }

  next();
})