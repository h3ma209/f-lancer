<template>
  <div class="alert">
    <v-alert type="success" dismissible>
      this is test
    </v-alert>
    <v-alert type="info" dismissible>
      this is test
    </v-alert>
  </div>
</template>

<script>
export default {
    setup () {

    }
}
</script>

<style scoped>

.alert {
    position: fixed;
    bottom: 5vh;
    right: 5vh;
    z-index: 99999;
}
</style>
