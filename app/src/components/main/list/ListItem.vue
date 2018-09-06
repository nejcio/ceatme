<template>
    <v-flex xs12 sm6>
      <v-card>
        <v-layout row>
          <v-flex xs7>
            <v-card-title>
              <div class="headline">{{item.title}}</div>
              <span v-if="ingredients" v-for="(ingredient, key) in ingredients" :key="key"> <v-chip small>{{ingredient}}</v-chip></span>
            </v-card-title>
          </v-flex>
          <v-flex xs5>
            <v-img
              class="list__img"
              :src="item.thumbnail"
              height="80"
              contain
              v-if="item.thumbnail"
            ></v-img>
          </v-flex>

        </v-layout>
        <div style="position: relative;">
          <v-btn
            tag="a"
            :href="item.href"
            target="_blank"
            absolute
            dark
            small
            fab
            bottom
            right
            color="indigo"
        >
          <v-icon>open_in_new</v-icon>
        </v-btn></div>
        <v-divider light></v-divider>
        <v-card-actions class="pa-3">
          <favourite :item="item.href" v-if="item.href"></favourite>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>
</template>

<script>
  import Favourite from './Favourite';

  export default {
    name: 'ListItem',
    props: {
      item: {
        type: Object,
        default: ()=>{ return {}},
      }
    },
    computed: {
      isFavourite() {
        return true
      },
      ingredients() {
        return this.item.ingredients
          ? this.item.ingredients
            .split(',')
            .map(ingredient => ingredient.trim())
          : null;
      }
    },
    components: {
      Favourite
    },
  }
</script>
<style lang="scss">
  .list__img {
    margin-top: 20px;
  }
</style>
