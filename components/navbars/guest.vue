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
          color="text"
          text
          :href="item.to"
          target="_blank"
          :title="item.title"
        >
          {{ item.title }}
        </v-btn>
        <v-spacer />
      </v-toolbar-items>
      <v-btn large class="elevation-0 rounded-lg" color="primary">
        Create account
      </v-btn>
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
                    title: 'About',
                    to: '/#about'
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
.v-toolbar__title {
    font-size: 1.5rem !important;
}
</style>
