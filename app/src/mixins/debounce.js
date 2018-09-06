import debounce from 'lodash.debounce';

export default {
    name: 'debounceMixin',
    methods: {
      debounce: debounce(cb => {
          cb();
        }, 500),
      },
  }
