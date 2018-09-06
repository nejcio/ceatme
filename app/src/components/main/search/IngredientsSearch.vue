<template>
  <div class="ingredients-search">
    <v-combobox
      v-model="form.ingredients"
      :items="$ingredients.list"
      @change="$emit('search')"
      label="Search by Ingredients"
      multiple
      clearable
      item-text="term"
      item-value="value">
    </v-combobox>
  </div>
</template>

<script>
  import formMixin from './mixins/form';

  export default {
    name: 'IngredientsSearch',
    mixins: [ formMixin ],
}
</script>
