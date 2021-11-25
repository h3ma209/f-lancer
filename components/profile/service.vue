<template>
  <v-card :loading="loading" class="rounded-lg my-6" max-width="450">
    <template slot="progress">
      <v-progress-linear color="secondary" height="10" indeterminate />
    </template>

    <v-img height="200" :src="image" />

    <v-card-title class="">
      {{ title }}
    </v-card-title>

    <v-card-text class="">
      <v-row align="center" class="mx-0">
        <v-rating
          :value="stars/orders"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        />
        <div class="grey--text ">
          {{ stars/orders }} ({{ orders }})
        </div>
      </v-row>
      <div class="my-4 text-subtitle-1">
        $ • {{ price }}
      </div>
      <div>{{ description }}</div>
    </v-card-text>
    <v-divider class="mx-4" />
    <v-card-text>
      <v-chip-group active-class="teal accent-4 white--text" column>
        <v-chip v-for="tags,i in tags " :key="i">
          {{ tags }}
        </v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions class="pb-6 px-4">
      <v-btn text color="teal lighten-2 white--text" @click="reserve">
        Check out
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    props: {
        title: { type: String },
        orders: Number,
        stars: Number,
        price: Number,
        description: String,
        tags: Array,
        image: String,
        link: String
    },
    data: () => ({
        loading: false,
        selection: 1
    }),

    methods: {
        reserve () {
            this.loading = true
            setTimeout(() => (this.loading = false), 2000)
        }
    }
}
</script>

<style scoped>
</style>
