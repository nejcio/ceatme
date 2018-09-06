let jsonpAdapter = require('axios-jsonp');
import axios from 'axios';

export default (Vue) => new Vue({
  methods: {
    google(query = null) {
      axios.defaults.adapter = jsonpAdapter;
      return axios(`https://suggestqueries.google.com/complete/search?client=chrome&q=${query}`).then((response) => {
        if(response.data && response.data[1]) return response.data[1].splice(0, 5);
        return [];
      }).catch(() => {
        this.$notification.$emit('error', 'Ops! something fail');
      });
    },
    recipePuppy(params = {}) {
      axios.defaults.adapter = jsonpAdapter;
      return axios(`http://www.recipepuppy.com/api`, { params: params }).then((response) => {
        if (response.status === 200) {

          return (response.data  && response.data.results) ? response.data.results: [];
        }

        return [];
      }).catch(() => {
        this.$notification.$emit('error', 'Ops! something fail');
      });
    },
  }
});