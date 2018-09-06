export default (Vue) => new Vue({
  data() {
    return {
      list: [],
    }
  },
  methods: {
    get({query, ingredients, page}, append = false) {
      let q = query,
          i = ingredients.map(ingredient => ingredient.value).join(','),
          p = page;
      return this.$api.recipePuppy({q, i ,p}).then(data => {
        append ? this.$set(this, 'list', this.list.map(item => { return {...item} }).concat(data)) : this.$set(this, 'list', data);
        return data;
      });
    },
  }
});