<template>
  <div class="page fill-height">
    <div class="profile-container">
      <div class="profile d-flex flex-column align-center justify-center" align="center" justify="center">
        <User />
      </div>
    </div>

    <div class="stats-container my-14">
      <v-row no-gutters>
        <v-col cols="2" class="ma-6">
          <v-card color="px-3 ma-0">
            <div class="d-flex flex-no-wrap justify-center align-center">
              <v-avatar class="mx-4" size="50">
                <v-icon color="primary" size="50">
                  mdi-eye
                </v-icon>
              </v-avatar>

              <div class="d-flex flex-column justify-center align-left">
                <v-card-title class="text-h5 font-weight-bold">
                  500
                </v-card-title>
                <v-card-subtitle class="font-weight-light">
                  Monthly Visiters
                </v-card-subtitle>
              </div>
              </v-divider>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <div class="services-container pa-6">
      <Service title="Cafe Badilico" image="https://cdn.vuetifyjs.com/images/cards/cooking.png" price="43" />
    </div>
  </div>
</template>

<script>
import User from '../components/profile/user'
import Service from '../components/profile/service.vue'
export default {
    components: {
        User,
        Service

    },
    setup () {

    }
}
</script>

<style scoped>
.whitespace {
    height: 30vh;
}
.page {
    width: 100%;
    color: #212a4d !important;
}

.profile-container {
    background-image: url("https://www.teahub.io/photos/full/230-2307145_new-york-city-wallpapers-hd-pictures-new-york.jpg");
    background-position: center;
    background-size: cover;
    height: 70vh;
}

.profile {
    height: 100%;
    background: rgb(255, 255, 255);
    background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(2, 159, 146, 0.7) 47%,
        rgb(3, 196, 177) 100%
    );
}

.services-container{
  background-color: rgba(1, 135, 134,0.2);
}

</style>
