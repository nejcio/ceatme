<template>
  <v-app>
    <v-toolbar class="header" dark color="primary" app>
      <v-toolbar-title class="white--text" v-text="title"></v-toolbar-title>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <notification-block></notification-block>
    <v-footer :fixed="fixed" app>
      <div class=" footer__title text-xs-center">&copy; 2018, recipes provided by <a href="http://www.recipepuppy.com/">Recipe Puppy</a></div>
    </v-footer>
  </v-app>
</template>

<script>
  import NotificationBlock from './components/common/NotificationBlock'

  export default {
    name: 'App',
    components: {
      NotificationBlock
    },
    data () {
      return {
        fixed: false,
        title: 'EatMe Recipes'
      }
    }
  }
</script>
<style lang="scss">
  .header,
  .v-footer {
    z-index: 999;
  }
  .footer__title {
    width: 100%;
  }
</style>
