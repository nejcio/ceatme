  export default {
    name: 'formMixin',
    props: {
      form :{
        type: Object,
        default: () => { return {}},
      }
    },
  }
