import '@babel/polyfill';
import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './routes';
import services from './services';
import Directives from './directives'

Vue.config.productionTip = false;
Vue.use(VueRouter);

// Directives
Directives.init(Vue);

Vue.use({
  install: (Vue) => {
    Vue.prototype.$api = services.api(Vue),
    Vue.prototype.$notification = services.notification(Vue),
    Vue.prototype.$favourites = services.favourites(Vue),
    Vue.prototype.$ingredients = services.ingredients(Vue),
    Vue.prototype.$url = services.url(Vue),
    Vue.prototype.$recipes = services.recipes(Vue)
  }
});

new Vue({
  router: routes,
  render: h => h(App)
}).$mount('#app');
