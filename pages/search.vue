<template>
  <div class="page">
    <div class="search-cont rounded-lg mx-7 d-flex flex-column align-center justify-center">
      <div class="text-h2 white--text mb-3">
        Search
      </div>
      <div class="text-subtitle-1">
        this is a test
      </div>
      <div class="search elevation-2 pa-7 rounded-xl mt-14  ">
        <v-row>
          <v-col>
            <v-text-field prepend-icon="mdi-magnify" label="Search" />
          </v-col>
          <v-col class="d-none d-sm-flex">
            <v-select
              v-model="city"
              :items="['slemani', 'kirkuk','erbil','duhok']"
              menu-props="auto"
              label="Select"
              hide-details
              prepend-icon="mdi-map-marker"
              single-line
            />
          </v-col>
          <v-col cols="3" class="d-flex flex-column align-center justify-center ">
            <v-btn x-large color="primary" class="rounded-lg elevation-0">
              Search
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="services-cont">
      <Cont />
    </div>
  </div>
</template>

<script>
import Cont from '../components/Container.vue'
export default {
    components: {
        Cont
    }
}
</script>

<style scoped>
.page {
    width: 100%;
    color: #212a4d;
}
.search-cont{
    background-image: linear-gradient(120deg, #03dac6 0%, #03dac6 100%);
    background-repeat: no-repeat;
    background-size: 100% 70%;
    background-position: 0 0%;
    height: 60vh;

}
.search{
    background: white;
    width: 65%;
}
</style>
