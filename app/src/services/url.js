export default (Vue) => new Vue({
  methods: {

    /**
     *
     * @param url => google.com/example/{name}/{id}
     * @param params => {id: 1, name: 'example'}
     * @param query => {'foo': 1, 'bar': 2}
     * @returns {*} => google.com/example/example/1?foo=1&bar=2
     */
    resolve(url, params = null, query = null) {

      return ((params && typeof params === 'object') ?
        // param example: {id: 1, name: 'example'} => url google.com/example/{name}/{id} result google.com/example/example/1
        this.resolveComplexUrl(url, params):
        // param example: 1 -> url google.com/example/{id} result google.com/example/1
        this.resolveUrl(url, params))
        + (query ? this.serializeQueryString(query) : '')
    },

    /**
     *
     * @param url => /api/{foo}
     * @param param  => 1
     * @returns {*} => /api/1
     */
    resolveUrl(url, param = null) {

      if (url.indexOf('{') > -1) {
        return url.replace(/{.*}/, param)
      }

      return url
    },

    /**
     * Resolve complex urls
     *
     * @param url => /api/{foo}/{bar}
     * @param params => {foo: 'test', bar: 1}
     * @returns {*} => /api/test/1
     */
    resolveComplexUrl(url, params) {

      const regex = new RegExp(Object.keys(params).join('|'), 'gi')
      url = url.replace(regex, function(matched) {
        return params[matched];
      }).replace(/{|}/gi, '')

      return url
    },

    /**
     * Query string serializer
     *
     * @param queryStringObject => {'foo': 1, 'bar': 2}
     * @returns {string} => ?foo=1&bar=2
     */
    serializeQueryString(queryStringObject) {
      const query = Object.keys(queryStringObject)
        .reduce((a, k) => {
            const b = encodeURIComponent(queryStringObject[k])
            a.push(`${k}=${b}`)
            return a
          },
          [],
        )
        .join('&')

      return query ? `?${query}` : ''
    },
  }
});