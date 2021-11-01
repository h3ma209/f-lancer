<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear color="deep-purple" height="10" indeterminate />
    </template>

    <v-img height="250" :src="image" />

    <v-card-title>{{ title }}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        />
        <div class="grey--text ms-4">
          4.5 (413)
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

    <v-card-actions>
      <v-btn color="teal lighten-2" @click="reserve">
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
