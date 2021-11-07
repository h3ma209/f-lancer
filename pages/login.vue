<template>
  <div class="page fill-height">
    <v-row align="center" justify="center" class="fill-height">
      <v-col
        class="d-flex flex-column pa-6 elevation-1 rounded-lg"
        cols=""
        md="5"
        lg="5"
        xl="5"
        sm=""
        style="background:white"
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
import { mapMutations } from 'vuex'

export default {
    name: 'Login',
    setup () {

    },
    data () {
        return {
            creds: {
                email: 'j@j.com',
                password: 'test'
            },
            errorMsg: ''
        }
    },
    created () {
        if (this.$auth.loggedIn) {
            this.$router.push('/profile')
        }
    },
    methods: {
        ...mapMutations(['addNotification']),

        async submitForm () {
            try {
                const resp = await this.$auth.loginWith('local', {
                    data: this.creds,
                    callbackUrl: '/profile'
                })
                if (resp.status === 200) {
                    this.$router.push('/profile')
                }
            } catch (e) {
                this.addNotification({ msg: 'invalid email and password', type: 'error' })
            }
        }
    }
}
</script>

<style scoped>
.page {
    height: 100vh;
    width: 100%;
    color: #212a4d;
    background-image: url("/login-background.svg");
    background-position: bottom;
    background-size: cover;
}
.alert {
    position: fixed;
    bottom: 5vh;
    right: 5vh;
}
</style>
