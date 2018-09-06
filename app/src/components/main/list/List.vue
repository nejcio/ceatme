<template>
  <v-container  grid-list-lg>
    <div class="list" v-if="items.length > 0">
      <v-layout row wrap>
        <list-item :item="item" v-for="(item, key) in items" :key="key"></list-item>
      </v-layout>
      <div class="text-xs-center" v-if="canLoadMore">
        <v-btn block color="indigo white--text" @click="$emit('loadMore')"> Load more </v-btn>
      </div>
    </div>
    <list-empty v-else></list-empty>
  </v-container>
</template>

<script>
  import ListItem from './ListItem';
  import ListEmpty from './ListEmpty';

  export default {
    name: 'List',
    props: {
      items: {
        type: Array,
        default: () => []
      },
      canLoadMore: {
        type: Boolean,
        default: false
      }
    },
    components: {
      ListItem,
      ListEmpty
    },
  }
</script>
