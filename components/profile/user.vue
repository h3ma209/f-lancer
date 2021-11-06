<template>
  <v-row no-gutters align="center" justify="center">
    <v-col class="contents pa-4 rounded-lg elevation-4" cols="">
      <div class="user-pic ma-3">
        <v-row>
          <v-col class="d-flex flex-column align-center justify-center">
            <v-btn fab color="white">
              <v-icon color="primary">
                mdi-pencil
              </v-icon>
            </v-btn>
          </v-col>
          <v-col class="pa-3">
            <div class="pro-pic rounded-circle pa-3">
              <v-img
                class="rounded-circle "
                max-height="150"
                outlined
                max-width="150"
                contain
                src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgxMTA3NjcxMzM0NjU5MTYw/gettyimages-1146354927.jpg"
              />
            </div>
          </v-col>
          <v-col class="d-flex flex-column align-center justify-center">
            <v-btn fab color="white">
              <v-icon color="primary">
                mdi-cog
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </div>
      <div class="user-info">
        <div class="text-h5 my-3">
          {{ $auth.user.name }}
        </div>
        <div class="my-3">
          <div class="text--primary text-caption">
            <v-icon size="20" color="primary">
              mdi-map-marker
            </v-icon>
            Cali, San francisco
          </div>
          <div class="text-caption">
            UI/UX designer
          </div>
        </div>
        <div class="d-flex flex-row align-center justify-center">
          <v-rating readonly length="5" size="20" value="3" />
          <div class="text-caption text-center">
            (300)
          </div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
    setup () {

    }
}
</script>

<style scoped>
.contents {
    background: white;
}
.pro-pic {
    border: 0.5rem solid white;
}
.user-pic {
}
.user-info {
}
</style>
