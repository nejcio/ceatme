<template>
  <v-container>
    <v-layout column>
      <div class="grey lighten-3">
        <v-toolbar>
          <v-toolbar-title>Search</v-toolbar-title>
        </v-toolbar>
        <v-card>
          <v-container fluid grid-list-md>
            <v-layout row wrap>
              <v-flex xs12 sm5 md6>
                <query-search :form="form" @search="$emit('search')"></query-search>
              </v-flex>
              <v-flex xs12 sm5 md6>
                <ingredients-search :form="form" @search="$emit('search')"></ingredients-search>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
  import QuerySearch from './QuerySearch';
  import IngredientsSearch from './IngredientsSearch';
  import formMixin from './mixins/form';

  export default {
    name: 'Search',
    components: {
      QuerySearch,
      IngredientsSearch
    },
    mixins: [ formMixin ],
  }
</script>
