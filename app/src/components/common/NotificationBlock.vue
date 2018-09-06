<template>
  <v-snackbar
    v-model="snackbar"
    :color="color"
    :multi-line="mode === 'multi-line'"
    :timeout="timeout"
  >
    {{ text }}
    <v-btn
      dark
      flat
      @click="snackbar = false"
    >
      Close
    </v-btn>
  </v-snackbar>
</template>

<script>
  export default {
    name: 'NotificationBlock',
    created() {
      this.$notification.$on('error', (text= '', color = 'error') => {
        this.text = text;
        this.color = color;
        this.show();
      });
      this.$notification.$on('success', (text= '', color = 'success') => {
        this.text = text;
        this.color = color;
        this.show();
      });
    },
    data () {
      return {
        snackbar: false,
        color: '',
        mode: '',
        timeout: 6000,
        text: ''
      }
    },
    methods: {
      show() {
        this.snackbar = true
      }
    }
  }
</script>

<style scoped>
</style>
