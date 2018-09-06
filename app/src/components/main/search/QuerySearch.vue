<template>
  <div class="query-search">
    <v-text-field
      v-model="form.query"
      @input="getSuggestions()"
      label="Search by recipe"
      type="text"
      clearable
      append-icon="search">
    </v-text-field>

    <div class="query-search-suggestions" v-if="form.query && form.query.length > 2 && suggestions">
      <ul>
        <li v-for="(result, key) in suggestions" :key="key">
          <v-btn
            outline
            round
            small
            @click="pick(suggestionResults[key])"
            color="secondary">
              <span v-html="result"></span>
          </v-btn>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import formMixin from './mixins/form';
  import debounceMixin from '../../../mixins/debounce'

  export default {
    name: 'Query',
    mixins: [ formMixin, debounceMixin ],
    computed: {
      suggestions() {
        if(!this.form.query || !this.form.query.length > 2) return null;
        return this.suggestionResults.map(result => {
          return result.replace(new RegExp(this.form.query, "gi"), match => {
            return '<span class="highlightText">' + match + '</span>';
          });
        })
      }
    },
    data() {
      return {
        suggestionResults: [],
      }
    },
    methods: {
      clearSuggestions() {
        this.$set(this, 'suggestionResults', [])
      },
      getSuggestions() {
        this.debounce(()=> {
          this.$emit('search');
          this.$api.google(this.form.query).then(data => {
            data.length > 0 ? this.suggestionResults = data : this.suggestionResults = [];
          });
        })
      },
      pick(term) {
        this.$set(this.form, 'query', term) &&
        this.$emit('search') &&
        this.clearSuggestions();
      }
    }
  }
</script>
<style lang="scss">
  ul {
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    li {
      list-style: none;
    }
    .highlightText {
      font-weight: 900;
    }
  }
</style>
