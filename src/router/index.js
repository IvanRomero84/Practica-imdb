import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/movies',
    name: 'Movies',
    component: () => import(/* webpackChunkName: "movies" */ '../views/Movies.vue'),
  },
  {
    path: '/actors',
    name: 'Actors',
    component: () => import(/* webpackChunkName: "actors" */ '../views/Actors.vue'),
  },
  {
    path: '/companies',
    name: 'Companies',
    component: () => import(/* webpackChunkName: "companies" */ '../views/Companies.vue'),
  },
  {
    path: '/newMovie',
    name: 'NewMovie',
    props: true,
    component: () => import(/* webpackChunkName: "newMovie" */ '../views/NewMovie.vue'),
  },
  {
    path: '/detailMovie',
    name: 'DetailMovie',
    props: true,
    component: () => import(/* webpackChunkName: "detailMovie" */ '../views/DetailMovie.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
