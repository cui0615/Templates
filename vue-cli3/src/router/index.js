import Vue from 'vue';
import Router from 'vue-router';
import DemoRouter from './demo.router';

import Home from '../pages/Home.vue';
// import Demo from '../pages/demo.vue';

import HoC from '../hoc/index';

Vue.use(Router);

const RouterBase = {
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HoC(Home, true),
    },
  ],
};

RouterBase.routes = RouterBase.routes.concat(DemoRouter);

export default new Router(RouterBase);
