<template>
  <div class="page">
    <div class="register-container d-flex flex-column align-center justify-center">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-card class="rounded-lg pa-2" max-width="700" :min-width="$vuetify.breakpoint.md ? 600 : '20vw'">
          <v-card-title class="text-h6 font-weight-regular justify-space-between">
            <span>{{ currentTitle }}</span>
            <v-avatar color="primary " class="subheading white--text" size="24" v-text="step" />
          </v-card-title>

          <v-window v-model="step">
            <v-window-item :value="1">
              <v-card-text>
                <v-text-field v-model="form.name" prepend-icon="mdi-account" label="Name" value="" :rules="rules.name" />
                <v-text-field v-model="form.email" prepend-icon="mdi-email" label="Email" value="" :rules="rules.email" />
                <span class="text-caption grey--text text--darken-1">
                  This is the email you will use to login to your account
                </span>

                <v-text-field v-model="form.password" prepend-icon="mdi-lock" label="Password" type="password" :rules="rules.password" />
                <v-text-field v-model="form.confirmPassword" prepend-icon="mdi-lock" label="Confirm Password" type="password" :rules="confirmPasswordRule" />
                <span class="text-caption grey--text text--darken-1">
                  Please enter a password for your account
                </span>
              </v-card-text>
            </v-window-item>

            <v-window-item :value="2">
              <v-card-text>
                <v-autocomplete v-model="form.city" prepend-icon="mdi-map-marker" :items="cities" :rules="rules.city" label="City" />
                <v-autocomplete
                  v-model="form.skills"
                  prepend-icon="mdi-vpn"
                  :rules="rules.skills"
                  :items="professions"
                  label="Skills"
                  multiple
                  small-chips
                  deletable-chips
                />
                <v-text-field v-model="form.imgLink" label="link" prepend-icon="mdi-link" />
                <span class="text-caption grey--text text--darken-1">
                  Add a link to your profile pic
                </span>
              </v-card-text>
            </v-window-item>

            <v-window-item :value="3">
              <div class="pa-4 text-center ma-2">
                <v-img v-if="form.imgLink.length !==0" class="rounded-circle mx-auto my-3" max-height="150" max-width="150" :src="form.imgLink" />
                <v-avatar v-else-if="form.imgLink.length ===0&&form.name.length !==0 " class="mx-auto my-3" size="65" color="primary">
                  <span class="white--text text-h5">{{ form.name.split(' ')[0].split('')[0].toLocaleUpperCase() }}</span>
                </v-avatar>

                <h3 class="text-h6 font-weight-light mb-2">
                  Welcome to F-Lancers, {{ form.name }}
                </h3>
                <span class="text-caption grey--text">Thanks for signing up!</span>
                <v-btn color="primary">
                  Go to your account
                </v-btn>
              </div>
            </v-window-item>
          </v-window>

          <v-divider />

          <v-card-actions>
            <v-btn :disabled="step === 1" text @click="step--">
              Back
            </v-btn>
            <v-spacer />
            <v-btn v-if="step < 2" color="primary" depressed @click="step++">
              Next
            </v-btn>
            <v-btn v-else-if="step === 2" color="secondary" @click="validateForm()">
              Next
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    data: () => ({
        valid: true,
        step: 1,
        form: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            city: '',
            skills: [],
            imgLink: ''
        },

        rules: {
            name: [
                v => !!v || 'name is required',
                v => (v && v.length <= 30) || 'name must be less than 30 characters'
            ],
            email: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
            ],
            password: [
                v => !!v || 'Password is required'
            ],

            city: [
                v => !!v || 'Please select your city'
            ],
            skills: [
                v => !!v.length || 'Add some skills to your profile'
            ]

        },

        cities: ['Slemani', 'Erbil', 'Kirkuk', 'Duhok'],
        professions: ['web developer', 'ui/ux designer', 'backend developer']

    }),
    computed: {
        currentTitle () {
            switch (this.step) {
            case 1: return 'Sign-up'
            case 2: return 'More info'
            case 3: return 'Account created'
            default: return 'test'
            }
        },
        confirmPasswordRule () {
            return [
                v => (!!v || 'Confirm Password is required'),
                v => (v === this.form.password || 'Password doesn\'t match ')
            ]
        }

    },
    methods: {
        ...mapMutations(['addNotification']),
        validateForm () {
            const formValid = this.$refs.form.validate()
            if (formValid) {
                this.createAccount()
            } else {
                this.step = 1
            }
        },
        async createAccount () {
            try {
                const resp = await this.$axios.post('/auth/user/create', this.form)
                if (resp.status === 200) {
                    this.step = 3
                    this.addNotification({ msg: 'User created successfuly', type: 'success' })
                    // console.log(resp.data)
                    const logResp = await this.$auth.loginWith('local', {
                        data: this.form,
                        callbackUrl: '/profile'
                    })
                    if (logResp.status === 200) {
                        this.$router.push('/profile')
                    }
                }
            } catch (e) {
                // console.log(e.response.data.error)
                console.log(e)
                this.addNotification({ msg: e.response.data.error, type: 'error' })
                this.step = 1
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.page {
    width: 100%;
    color: #212a4d;
    background-image: url("https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    .register-container {
        height: 100vh;
        width: 100%;
    }
}
</style>
