import Vue from 'vue';
import Router from 'vue-router';
import DemoRouter from './demo.router';

import Home from '../pages/Home.vue';

Vue.use(Router);

const RouterBase = {
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
  ],
};

RouterBase.routes = RouterBase.routes.concat(DemoRouter);

export default new Router(RouterBase);
