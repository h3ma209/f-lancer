<template>
  <v-card class="mx-auto" style="background:#212a4d" dark max-width="400">
    <v-card-text class="text-h5 font-weight-light white--text">
      Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="white" class="text--text">
          <span>EV</span>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Evan You</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    setup () {

    }
}
</script>

<style scoped>
</style>
