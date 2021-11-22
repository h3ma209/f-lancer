<template>
  <v-card class="elevation-2 d-flex flex-column align-center justify-center pa-10">
    <div class="create-service-container">
      <div class="text-h4 mb-10">
        Create Service
      </div>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-row>
          <v-col cols="5">
            <v-text-field v-model="form.title" :loading="loading" :rules="rules.title" label="Title" />
            <div class="text-caption">
              Title for your service
            </div>
          </v-col>
          <v-col cols="5">
            <v-text-field v-model="form.imgLink" :loading="loading" :rules="rules.imgLink" label="Link" />
            <div class="text-caption">
              Image link for your service
            </div>
          </v-col>
          <v-col cols="5">
            <v-text-field
              v-model="form.price"
              :loading="loading"
              type="number"
              label="Price"
              value="0.00"
              prefix="$"
            />
            <div class="text-caption">
              Price of your service
            </div>
          </v-col>
          <v-col cols="5">
            <v-autocomplete
              v-model="form.tags"
              :loading="loading"
              :rules="rules.tags"
              :items="professions"
              label="Tags"
              multiple
              small-chips
              deletable-chips
            />
            <div class="text-caption">
              Tags related to your service
            </div>
          </v-col>
          <v-col cols="8">
            <v-textarea v-model="form.description" :loading="loading" :rules="rules.description" label="Description" rows="2" />
            <div class="text-caption">
              More info about your service
            </div>
          </v-col>
        </v-row>
        <div class="ma-10" />
        <v-btn :disabled="valid==false" color="primary" class="mr-4" @click="createService()">
          Create
        </v-btn>
        <v-btn color="error" class="mr-4" @click="resetValidation()">
          Cancel
        </v-btn>
      </v-form>
    </div>
  </v-card>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    data () {
        return {
            valid: false,
            loading: false,
            form: {
                title: 'lorem ipsum',
                imgLink: 'https://images.pexels.com/photos/2058128/pexels-photo-2058128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                price: 10,
                tags: ['web developer'],
                description: 'lorem ipsum dolor amet'
            },
            professions: ['web developer', 'ui/ux designer', 'backend developer'],

            rules: {
                title: [
                    v => !!v || 'Title is required',
                    v => (v && v.length <= 40) || 'name must be less than 30 characters'
                ],

                price: [
                    v => !!v || 'Add price to your service',
                    v => (typeof v === 'number') || 'Only number is allowed'
                ],
                imgLink: [
                    v => !!v || 'add image link to your service'
                ],

                tags: [
                    v => !!v.length || 'Add some tags to your service'
                ],
                description: [
                    v => !!v || 'Description is required',
                    v => (v && v.length <= 240) || 'name must be less than 240 characters',
                    v => (v && v.length >= 40) || 'name must be more than 40 characters'
                ]

            }
        }
    },
    methods: {
        ...mapMutations(['addNotification']),
        resetValidation () {
            this.$refs.form.resetValidation()
            this.form = {
                title: 'lorem ipsum',
                imgLink: 'https://images.pexels.com/photos/2058128/pexels-photo-2058128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                price: 10,
                tags: ['web developer'],
                description: 'lorem ipsum dolor amet'
            }
        },
        async createService () {
            this.loading = true
            try {
                const resp = await this.$axios.post('/auth/services/create', { form: this.form, user: this.$auth.user })

                if (resp.status === 200) {
                    this.loading = false
                    this.addNotification({ msg: 'Service successfully created', type: 'success' })
                    this.resetValidation()
                }
            } catch (e) {
                this.addNotification({ msg: e.response.data.error, type: 'error' })
                this.loading = false
            }
        }
    }
}
</script>

<style lang="scss">
.page {
    height: 100%;
    width: 100%;
    color: #212a4d;
}
</style>
