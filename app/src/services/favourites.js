export default (Vue) => new Vue({
  data() {
    return {
      list: [],
    }
  },
  methods: {
    toggle(href) {
      if (!this.list.includes(href)) {
        this.list.push(href);
        this.$notification.$emit('success', 'Favourite item was successfuly added!');
        return
      }
      this.list = this.list.filter(item => item !== href);
      this.$notification.$emit('success', 'Favourite item was successfuly removed!');
    },
  }
});