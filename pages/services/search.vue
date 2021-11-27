<template>
  <div class="page">
    <div class="search-cont rounded-lg mt-10 mx-7 d-flex flex-column align-center justify-center">
      <div class="text-h2 white--text mb-3">
        Search
      </div>
      <!-- <div class="text-subtitle-1">
        this is a test
      </div> -->
      <div class="search elevation-2 pa-7 rounded-xl mt-14  ">
        <v-row>
          <v-col lg="" cols="12">
            <v-text-field v-model="form.search" prepend-icon="mdi-magnify" label="Search" />
          </v-col>
          <v-col class="d-none d-sm-flex">
            <v-select
              v-model="form.city"
              clearable
              :items="['slemani', 'kirkuk','erbil','duhok']"
              menu-props="auto"
              label="Select"
              hide-details
              prepend-icon="mdi-map-marker"
              single-line
            />
          </v-col>
          <v-col lg="3" cols="12" class="d-flex flex-column align-center justify-center ">
            <v-btn x-large color="primary" class="rounded-lg elevation-0" @click="search()">
              Search
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="services-cont">
      <Cont>
        <v-row class="">
          <v-col v-for="service,i in services" :key="i" lg="4">
            <Service
              :title="service.title"
              orders="20"
              stars="43"
              link="youtube.com"
              :price="service.price"
              :description="service.description"
              :tags="service.tags"
              :image="service.img"
            />
          </v-col>
        </v-row>
      </Cont>
    </div>
  </div>
</template>

<script>

import Cont from '../../components/Container.vue'
import Service from '../../components/profile/service.vue'
export default {
    components: {
        Cont,
        Service
    },
    // middleware: 'isAuth',
    data () {
        return {
            form: {
                search: '',
                city: ''
            },
            services: []
        }
    },
    created () {
        this.search()
    },
    methods: {
        async search () {
            try {
                let resp
                if (this.form.search === '') {
                    resp = await this.$axios.get('/search/all')
                } else {
                    resp = await this.$axios.get('/search')
                }
                this.services = resp.data
            } catch (e) {
                console.log(e)
            }
        }
    }
}
</script>

<style scoped>
.page {
    width: 100%;
    color: #212a4d;
}
.search-cont {
    background-image: linear-gradient(120deg, #03dac6 0%, #03dac6 100%);
    background-repeat: no-repeat;
    background-size: 100% 70%;
    background-position: 0 0%;
    height: 60vh;
}
.search {
    background: white;
    width: 65%;
}
</style>
