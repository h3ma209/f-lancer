<template>
  <div class="page fill-height d-flex align-center justify-center">
    <v-row no-gutters class="fill-height">
      <v-col class="left" lg="3">
        <v-card tile class="pa-6 fill-height">
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <v-img src="https://cdn.vuetifyjs.com/images/john.png" />
              </v-list-item-avatar>
            </v-list-item>

            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title class="text-h6">
                  {{ $auth.user.name }}
                </v-list-item-title>
                <v-list-item-subtitle>{{ $auth.user.email }}</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-icon>mdi-menu-down</v-icon>
              </v-list-item-action>
            </v-list-item>
          </v-list>
          <div class="my-7" />
          <v-divider />
          <div class="my-7" />
          <v-list nav dense>
            <v-list-item-group v-model="selectedItem" color="primary">
              <v-list-item v-for="(item, i) in items" :key="i" @click="component = item.compName">
                <v-list-item-icon>
                  <v-icon v-text="item.icon" />
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title v-text="item.text" />
                </v-list-item-content>
              </v-list-item>

              <v-list-group prepend-icon="mdi-star" @click="component = 'service-tab'">
                <template #activator>
                  <v-list-item-content>
                    <v-list-item-title>Services</v-list-item-title>
                  </v-list-item-content>
                </template>

                <v-list-item class="ml-6" @click="component = 'create-service-tab'">
                  <v-list-item-icon>
                    <v-icon small>
                      mdi-plus
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Create</v-list-item-title>
                </v-list-item>
                <!--
                <v-list-item class="ml-6">
                  <v-list-item-icon>
                    <v-icon small>
                      mdi-pen
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Edit</v-list-item-title>
                </v-list-item> -->

                <v-list-item class="ml-6" @click="component = 'delete-service-tab'">
                  <v-list-item-icon>
                    <v-icon small>
                      mdi-close
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Delete</v-list-item-title>
                </v-list-item>
              </v-list-group>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>

      <v-col class="right d-flex flex-column align-center justify-center">
        <Cont>
          <component :is="component" v-bind="{name:$auth.user.name, email:$auth.user.email, password:$auth.user.password}" />
        </Cont>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ProfileTab from '../components/dashboard/profile-tab.vue'
import ServiceTab from '../components/dashboard/serivce-tab.vue'
import Cont from '../components/Container.vue'
import CreateService from '../components/dashboard/create-service-tab.vue'
import DeleteService from '../components/dashboard/delete-service-tab.vue'
export default {
    components: {
        'profile-tab': ProfileTab,
        'service-tab': ServiceTab,
        Cont,
        'create-service-tab': CreateService,
        'delete-service-tab': DeleteService
    },
    data: () => ({
        selectedItem: 0,
        items: [
            { text: 'My profile', icon: 'mdi-account', compName: 'profile-tab' },
            // { text: 'Services', icon: 'mdi-star', compName: 'service-tab' },/
            { text: 'Stats', icon: 'mdi-file-percent', compName: 'stat-tab' }
            // { text: 'Setting', icon: 'mdi-cog', compName: 'setting-tab' }
        ],
        component: 'profile-tab'

    })
}
</script>

<style scoped>
.page {
    height: 100%;
    width: 100%;
    color: #212a4d;
}
.left {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
}
.right {
    overflow-y: visible;
}
</style>
