<template>
  <div>
    <v-app-bar elevate-on-scroll fixed color="white" class="px-2">
      <v-app-bar-nav-icon @click="drawer = true" />
      <v-toolbar-title class="primary--text">
        {{ title }}
      </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary class="pa-4">
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="primary--text text--accent-4">
          <v-list-item v-for="item,i in items" :key="i">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
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
                    icon: 'mdi-home',
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
</style>
