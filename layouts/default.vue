<template>
  <v-app dark>
    <v-main>
      <guestBar v-if="!logged" />
      <!-- <loggedBar v-else-if="logged"> -->
      <v-container class="fill-height ma-0 pa-0" fluid>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer :absolute="!fixed" ap>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import guestBar from '../components/navbars/guest.vue'
// import loggedBar from '../components/navbars/logged.vue'

export default {
    components: {
        guestBar
        // loggedBar
    },
    data () {
        return {
            logged: false,
            fixed: false
        }
    }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap");

html,
body {
    font-family: "Montserrat", sans-serif !important;
}
</style>
