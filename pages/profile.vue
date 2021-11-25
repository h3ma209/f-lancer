<template>
  <div class="page fill-height">
    <div class="profile-container">
      <div class="profile d-flex flex-column align-center justify-center" align="center" justify="center">
        <User />
      </div>
    </div>
    <div class="whitespace" />
    <div class="stats-container d-lg-none" style="display:none">
      <Cont>
        <v-row no-gutters class="">
          <v-col cols="2" class="">
            <v-card color=" ma-0">
              <div class="d-flex flex-no-wrap justify-center align-center">
                <v-avatar class="ml-4" size="50">
                  <v-icon color="primary" size="50">
                    mdi-eye
                  </v-icon>
                </v-avatar>

                <div class="d-flex flex-column justify-center align-left mr-1">
                  <v-card-title class="text-h5 font-weight-bold">
                    500
                  </v-card-title>
                  <v-card-subtitle class="font-weight-light">
                    Monthly Visiters
                  </v-card-subtitle>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </Cont>
    </div>
    <div class="services-container">
      <Cont>
        <div class="text-h1 mt-14 mb-14">
          Services
        </div>
        <v-row class="">
          <v-col v-for="i in 4" :key="i" lg="4" sm="5">
            <Service
              title="Cafe Badilico"
              orders="20"
              stars="43"
              link="youtube.com"
              price="43"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam nisi maxime velit a labore optio omnis. Officiis atque ut expedita dolorem facere tempora placeat repellendus non libero incidunt. Sapiente, accusantium."
              :tags="['nodejs', 'front-end','vuetify']"
              image="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
          </v-col>
        </v-row>
      </Cont>
    </div>
    <div class="whitespace" />
    <div class="reviews-container">
      <Cont>
        <div class="text-h1 mb-14">
          Reviews
        </div>
        <v-row align="center" class="my-8">
          <v-col v-for="i in 5" :key="i" lg="4" sm="5">
            <Review />
          </v-col>
        </v-row>
      </Cont>
    </div>
    <div class="whitespace" />
  </div>
</template>

<script>
import Cont from '../components/Container.vue'
import User from '../components/profile/user'
import Service from '../components/profile/service.vue'
import Review from '../components/profile/review.vue'
export default {
    name: 'Profile',
    components: {
        Cont,
        User,
        Service,
        Review

    },
    middleware: 'isAuth',

    setup () {

    }
}
</script>

<style scoped>
.whitespace {
    height: 20vh;
}
.page {
    width: 100%;
    color: #212a4d !important;
}

.profile-container {
    background-image: url("https://www.teahub.io/photos/full/230-2307145_new-york-city-wallpapers-hd-pictures-new-york.jpg");
    background-position: center;
    background-size: cover;
    height: 80vh;
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

.services-container {
    /* background-color: rgba(1, 135, 134, 0.2); */
    color: #212a4d ;
}
</style>
