import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';
// import Layout from '../components/Layout.vue';
import MainLayout from '../components/MainLayout';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    exact: true,
    name: 'Home',
    component: MainLayout,
    children: [
      {
        path: '/todos',
        redirect: '/todos/0',
      },
      {
        path: '/todos/:type',
        name: 'Todos',
        component: () => import('../views/todos/index.vue'),
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/index.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
