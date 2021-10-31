<template>
  <div class="page">
    <v-row align="center" justify="center" class="fill-height">
      <v-col
        class="d-flex flex-column pa-6 elevation-5 rounded-lg"
        cols=""
        md="5"
        lg="5"
        xl="5"
        sm=""
      >
        <div class="text-h3 align-self-center my-7">
          Login
        </div>
        <v-text-field v-model="creds.email" class="px-5" label="Email" prepend-icon="mdi-email" />
        <v-text-field v-model="creds.password" class="px-5" label="Password" prepend-icon="mdi-lock" />
        <v-btn color="primary" class=" ma-5 rounded-lg elevation-0" @click="submitForm()">
          Login
        </v-btn>
        <v-row>
          <v-col>
            <div class="mx-5 my-2 text-caption text--secondary">
              Don't have an account ? <br> <a class="text-span font-weight-bold" href="/register">Create an account</a>
            </div>
          </v-col>
          <v-col>
            <div class="mx-5 my-2 text-caption text--secondary">
              Forgot your password ? <br> <a class="text-span font-weight-bold" href="/register">Reset password</a>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
    setup () {

    },
    data () {
        return {
            creds: {
                email: 'j@j.com',
                password: 'test'
            }
        }
    },
    methods: {
        submitForm () {
            this.$auth.loginWith('local', {
                data: this.creds
            })
            alert(this.creds.email)
        }
    }
}
</script>

<style scoped>
.page {
    width: 100%;
    color: #212a4d;
}
</style>
