<template>
  <v-card class="rounded-lg pa-10 d-flex flex-column align-center justify-center elevation-2" max-width="600" :min-width="$vuetify.breakpoint.lg ? 600 : '20vh'">
    <v-dialog v-model="dialog" max-width="400">
      <v-card>
        <v-card-title class="text-h5">
          Change Profile Pic
        </v-card-title>

        <v-card-text>
          <v-text-field v-model="changeDT.imgLink" label="link" prepend-icon="mdi-link" />
        </v-card-text>

        <v-card-actions>
          <v-btn text @click="dialog = false, changeDT.imgLink = ''">
            Cancel
          </v-btn>

          <v-btn color="primary darken-1" @click="changeProPic()">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-btn id="editIcon" fab elevation="1" small @click="edit = !edit">
      <v-icon>
        mdi-pen
      </v-icon>
    </v-btn>
    <div class="my-5">
      <v-hover v-slot="{hover}">
        <v-avatar size="100">
          <v-img :src="dtImgLink">
            <v-expand-transition>
              <div v-if="hover" class="d-flex align-center justify-center transition-fast-in-fast-out primary  text-span white--text" style="height: 100%; width:100%; opacity:0.8">
                <v-btn small text @click="dialog = !dialog">
                  Change pic
                </v-btn>
              </div>
            </v-expand-transition>
          </v-img>
        </v-avatar>
      </v-hover>
    </div>
    <v-form
      ref="form"
      v-model="valid"
      class=""
      lazy-validation
      style="width:100%"
      :disabled="!edit"
    >
      <v-text-field :value="dtName" label="Name" required />
      <v-text-field :value="dtEmail" label="E-mail" required />
      <v-text-field :value="dtPassword" label="Password" />
      <div class="ma-5" />
      <v-btn :disabled="!valid || !edit" color="primary" class="mr-4">
        Save
      </v-btn>
      <v-btn color="error" class="mr-4" :disabled="!edit">
        Cancel
      </v-btn>
    </v-form>
  </v-card>
</template>
<script>
export default {
    props: {
        name: { type: String, default: '' },
        email: { type: String, default: '' },
        password: { type: String, default: '' },
        imgLink: { type: String, default: 'https://cdn.vuetifyjs.com/images/john.png' },
        tags: { type: String, default: '' }
    },
    data () {
        return {
            edit: false,
            valid: false,
            dialog: false,
            dtName: '',
            dtEmail: '',
            dtPassword: '',

            changeDT: {
                imgLink: ''
            }
        }
    },
    created () {
        this.dtName = this.name
        this.dtEmail = this.email
        this.dtPassword = this.password
        this.dtImgLink = this.imgLink
    },
    methods: {
        changeProPic () {
            this.dialog = false
            this.dtImgLink = this.changeDT.imgLink
            this.changeDT.imgLink = ''
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
#editIcon {
    position: absolute;
    top: 7%;
    right: 7%;
}
#editIcon:hover {
    cursor: pointer;
}
</style>
