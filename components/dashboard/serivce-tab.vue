<template>
  <v-row class="">
    <v-col v-for="i in 4" :key="i" cols="6">
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
</template>
<script>
import Service from '../profile/service.vue'
export default {
    components: {
        Service
    },
    data () {
        return {
            services: {

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
