<template>
  <div>
    <v-app-bar :clipped-left="clipped" fixed flat app style="background:#ffffff">
      <v-spacer />
      <v-toolbar-title class="primary--text toolbar-title" v-text="title" />
      <v-spacer />
      <v-toolbar-items class="ma-14">
        <v-btn
          v-for="item in items"
          :key="item.icon"
          :class="{ 'font-weight-bold': item.active }"
          color="primary"
          text
          :href="item.to"
          target="_blank"
          :title="item.title"
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <v-spacer />
    </v-app-bar>
  </div>
</template>
<script>
export default {
    data () {
        return {
            clipped: false,
            drawer: false,
            fixed: false,
            items: [
                {
                    icon: 'mdi-apps',
                    title: 'Welcome',
                    to: '/'
                },
                {
                    icon: 'mdi-chart-bubble',
                    title: 'Login',
                    to: '/login'
                },
                {
                    title: 'Register',
                    to: '/register'
                }
            ],
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: 'F Lancer',
            username: 'hema'
        }
    }
}
</script>

<style scoped>
.v-toolbar__title{
    font-size: 1.5rem !important;
}
</style>
