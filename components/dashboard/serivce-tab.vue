<template>
  <div>
    <v-row v-if="loading">
      <v-col v-for="i in 4" :key="i" cols="6">
        <v-skeleton-loader class="mx-auto pa-2 elevation-2" max-width="450" type="card-avatar, article, actions" />
      </v-col>
    </v-row>
    <v-row v-else class="" align="center" justify="center">
      <v-col v-for="s,i in services" :key="i" cols="8" lg="6">
        <Service
          :title="s.title"
          orders="20"
          stars="43"
          link="youtube.com"
          :price="s.price"
          :description="s.description"
          :tags="s.tags"
          :image="s.img"
        />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import Service from '../profile/service.vue'

export default {
    components: {
        Service
    },
    data () {
        return {
            services: {

            },
            loading: true
        }
    },
    mounted () {
        this.getData()
    },
    methods: {
        ...mapMutations(['addNotification']),

        async getData () {
            try {
                const resp = await this.$axios.get('/auth/services/search/user', { owner: this.$auth.user._id })
                if (resp.status === 200) {
                    this.loading = false
                    this.services = resp.data
                }
            } catch (e) {
                this.addNotification({ msg: e.response.data.error, type: 'error' })
                // this.loading = false
            }
        }
    }

}
</script>
<style scoped>
* {
    transition: all 0.2s ease-in-out;
}
.profile-container {
    width: 100%;
}
</style>
