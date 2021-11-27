<template>
  <v-row align="center" justify="center">
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="text-h5">
          Do you want to delete {{ selectedService.title }}
        </v-card-title>
        <v-card-text>deleting it will only take the service away not the reviews, revenue etc..</v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="green darken-1" text @click="dialog = false">
            Cancel
          </v-btn>
          <v-btn color="error darken-1" @click="deleteDialog()">
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-col v-for="serv,i in services" :key="i" lg="6" cols="8">
      <v-card :loading="loading" class="rounded-lg my-6" max-width="450">
        <template slot="progress">
          <v-progress-linear color="secondary" height="10" indeterminate />
        </template>

        <v-img height="200" :src="serv.img" />

        <v-card-title class="">
          {{ serv.title }}
        </v-card-title>
        <v-card-actions class="pb-6 px-4">
          <v-btn color="error" @click="selectedService = serv, dialog = !dialog,id = i">
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    data () {
        return {
            dialog: false,
            id: '',
            selectedService: {

                title: 'Test',
                id: '219010221010'
            },
            services: []
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
        },
        async deleteService () {
            try {
                const resp = await this.$axios.delete('/auth/services/delete/' + this.selectedService._id)
                if (resp.status === 200) {
                    this.addNotification({ msg: 'Successfuly deleted service', type: 'success' })
                }
            } catch (e) {
                this.addNotification({ msg: e.response.data.error, type: 'error' })
            }
        },
        deleteDialog () {
            this.dialog = false
            this.deleteService()
            this.services.splice(this.id, 1)
        }

    }
}
</script>

<style lang="scss" scoped>
</style>
