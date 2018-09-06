
export default {
  directives() {
    return  [
      // {
      //   handle: 'click-outside',
      //   directive: clickOutside
      // },
    ]
  },
  init(Vue) {
    this.directives().forEach((directive) => {
        Vue.directive(directive.handle, directive.directive);
    });
  }
}