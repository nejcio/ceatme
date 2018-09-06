<template>
  <v-btn icon @click="$favourites.toggle(item)">
    <v-icon :color="isFavourite ? 'red' : 'grey lighten-1'">favorite</v-icon>
  </v-btn>
</template>

<script>
  export default {
    name: 'Favourite',
    props: {
      item: {
        type: String,
        default: '',
      }
    },
    computed: {
      isFavourite() {
        return this.$favourites.list.find(item => item === this.item);
      },
    },
  }
</script>
<style lang="scss">
  .list__img {
    margin-top: 20px;
  }
</style>
