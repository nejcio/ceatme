
import ingredients from './../assets/datasets/ingredients.json';
import Lazy from 'lazy.js';

export default (Vue) => new Vue({
  computed: {
    list() {

      return Lazy(ingredients).sortBy((item) => (item.term || '').toLowerCase()).toArray();
    }
  },
});