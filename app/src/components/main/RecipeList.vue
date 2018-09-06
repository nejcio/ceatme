<template>
  <div class="recipe-list">

    <!--Loading indicator-->
    <v-progress-circular
      indeterminate
      color="primary"
      class="loader"
      v-if="isLoading"
    ></v-progress-circular>

    <!--Search-->
    <recipe-search :form="form" @search="getRecipes"></recipe-search>

    <!--List-->
    <list :can-load-more="canLoadMore && !isLoading" @loadMore="loadMore" :items="$recipes.list"></list>
  </div>
</template>

<script>
  import debounceMixin from '../../mixins/debounce'
  import deepClone from 'lodash.clonedeep';
  import List from './list/List';
  import RecipeSearch from './search/SearchBlock';

  export default {
    name: 'RecipeList',
    mixins: [ debounceMixin ],
    created() {
      this.getRecipes();
    },
    data() {
      return {
        isLoading: false,
        canLoadMore: false,
        form: {
          query: '',
          ingredients: [],
          page: 1,
        }
      }
    },
    components: {
      RecipeSearch,
      List
    },
    methods: {
      getRecipes(append = false) {
        if(!append) this.resetPage();
        this.$nextTick(() => {
          this.debounce(() => {
            this.setIsLoading(true);
            this.$recipes.get(deepClone(this.form), append).then(data => {
              data.length > 0 ?
                this.$set(this, 'canLoadMore', true) :
                this.$set(this, 'canLoadMore', false);
              this.setIsLoading(false);
            });
          })
        })
      },
      loadMore() {
        this.$set(this.form, 'page', (this.form.page + 1));
        this.$nextTick(() => {
          this.getRecipes(true);
        });
      },
      resetPage() {
        this.$set(this.form, 'page', 1);
      },
      setIsLoading(isLoading = false) {
        this.$set(this, 'isLoading', isLoading);
      }
    }
  }
</script>

<style lang="scss">
  .recipe-list {
    position: relative;
  }
  .loader {
    position: fixed;
    top: 6rem;
    left: 1em;
  }
</style>
