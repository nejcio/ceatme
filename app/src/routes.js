import VueRouter from 'vue-router';
import RecipeList from './components/main/RecipeList.vue';

let routes = [
  {
    path: '',
    component: RecipeList,
    name: 'home'
  },
];

export default new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 }
    }
  },
});