<template>
  <div>
    <v-app-bar elevate-on-scroll fixed color="white" class="px-2">
      <v-app-bar-nav-icon @click="drawer = true" />
      <!-- <v-toolbar-title class="primary--text toolbar-title">
        <v-img src="F.svg" max-height="40" max-width="60" contain />
      </v-toolbar-title> -->
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary class="pa-4">
      <v-img src="F.svg" max-height="40" max-width="60" contain class="my-7" />
      <v-list nav dense>
        <v-list-item-group v-if="!$auth.loggedIn">
          <v-list-item v-for="item,i in links.notLoggedIn" :key="i">
            <v-list-item-content @click="isClicked = !isClicked">
              <div class="text-left">
                <nuxt-link text :to="item.link">
                  {{ i+1 }}. {{ item.title }}
                </nuxt-link>
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
        <v-list-item-group v-else>
          <v-list-item v-for="item,i in links.logged" :key="i">
            <v-list-item-content @click="isClicked = !isClicked">
              <div class="text-left">
                <nuxt-link text :to="item.link">
                  {{ i+1 }}. {{ item.title }}
                </nuxt-link>
              </div>
            </v-list-item-content>
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
            group: 0,
            drawer: false,
            fixed: false,
            links: {
                notLoggedIn: [
                    { title: 'Home', link: '/' },
                    { title: 'Login', link: '/login' },
                    { title: 'Register', link: '/register' }
                ],
                logged: [
                    { title: 'Profile', link: '/profile' },
                    { title: 'Dashboard', link: '/dashboard' },
                    { title: 'Search', link: '/services/search' },
                    { title: 'Logout', link: '/logout' }
                ]
            },
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
