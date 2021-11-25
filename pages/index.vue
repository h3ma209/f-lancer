<template>
  <div class="page ">
    <div class="landing">
      <div class="overlay">
        <v-row no-gutters class="fill-height " align="center" justify="center">
          <v-col class=" fill-height content">
            <v-row justify="center" align="center" class="fill-height">
              <v-col class="px-10 mx-12">
                <h1>New <span class="primary--text">offers</span> are waiting for you</h1>
                <p class="mt-5">
                  find a new job
                </p>

                <div class="search pa-7 rounded-xl mt-14  d-none d-sm-flex">
                  <v-row>
                    <v-col>
                      <v-text-field prepend-icon="mdi-magnify" label="Search" />
                    </v-col>
                    <v-col>
                      <v-select
                        v-model="city"
                        :items="['slemani', 'kirkuk','erbil','duhok']"
                        menu-props="auto"
                        label="Select"
                        hide-details
                        prepend-icon="mdi-map-marker"
                        single-line
                      />
                    </v-col>
                    <v-col cols="3" class="d-flex flex-column align-center justify-center ">
                      <v-btn x-large color="primary" class="rounded-lg elevation-0">
                        Search
                      </v-btn>
                    </v-col>
                  </v-row>
                </div>
                <v-row class="follow-us mt-14" align="center">
                  <v-col cols="3" class="d-none d-sm-flex">
                    <span>Follow us</span>
                  </v-col>
                  <v-col lg="6" md="6" sm="5">
                    <v-row no-gutters class="sm-icons">
                      <v-col>
                        <v-btn outlined icon class="rounded-lg pa-5">
                          <v-icon>
                            mdi-twitter
                          </v-icon>
                        </v-btn>
                      </v-col>
                      <v-col>
                        <v-btn outlined icon class="rounded-lg pa-5">
                          <v-icon>mdi-linkedin</v-icon>
                        </v-btn>
                      </v-col>
                      <v-col>
                        <v-btn outlined icon class="rounded-lg pa-5">
                          <v-icon>mdi-facebook</v-icon>
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
          <v-col v-show="!$vuetify.breakpoint.xs" class="d-sm-none d-md-none d-lg-flex" />
        </v-row>
      </div>
    </div>
    <div class="whitespace" />
    <div class="jobs ">
      <h1 class="px-10 mx-12 mb-8">
        Search By Category
      </h1>
      <v-row align="center" justify="center" class="job-types ">
        <v-col
          v-for="items,i in job_types"
          :key="i"
          md="2"
          lg="2"
          cols="7"
          class="mx-3 my-3"
        >
          <v-card class="elevation-0 rounded-xl mx-auto pa-5 text-center d-flex flex-column align-center justify-center" max-width="250" height="350">
            <v-btn x-large outlined icon class="ma-5 pa-12" :color="items.color">
              <v-icon>{{ items.icon }}</v-icon>
            </v-btn>

            <div class="mt-5 text-h5 text-md-h5 font-weight-normal text--secondary">
              {{ items.title }}
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <div class="whitespace" />
    <div class="about-us py-14">
      <v-row align="center">
        <v-col lg="6">
          <div class="text-left mx-12 px-12">
            <h1 class="mb-8">
              About Us
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium placeat quae tempore, temporibus totam quos sequi consectetur!</p>
          </div>
        </v-col>
        <v-col lg="5" justify-self="center">
          <v-img class="rounded-lg" src="https://images.pexels.com/photos/6583354/pexels-photo-6583354.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" height="500" />
        </v-col>
      </v-row>
    </div>
    <div class="whitespace" />
    <div class="login-register">
      <v-row class="ma-0 pa-0">
        <v-col id="tt-login" class="col" @mouseenter="ChangeBg('#tt-login','.ibtn')" @mouseleave="RevertBg('#tt-login','.ibtn')">
          <button type="button" class="btn btn btn-primary ibtn">
            Login
          </button>
        </v-col>
        <v-col id="tt-register" class="col" @mouseenter="ChangeBg('#tt-register','.rbtn')" @mouseleave="RevertBg('#tt-register','.rbtn')">
          <button type="button" class="btn btn-primary rbtn">
            Register
          </button>
        </v-col>
      </v-row>
    </div>
    <div class="whitespace" />
  </div>
</template>

<script>
import jquery from 'jquery'
// 03DAC6 primary
// 018786 secondary
// B000020 error

export default {
    name: 'Index',
    data () {
        return {
            city: '',
            job_types: [
                { title: 'Designer', icon: 'mdi-brush-variant', color: 'red' },
                { title: 'Web Developer', icon: 'mdi-code-tags', color: 'cyan' },
                { title: 'Software Developer', icon: 'mdi-microsoft-visual-studio-code', color: 'blue' },
                { title: 'Mobile App Developer', icon: 'mdi-cellphone', color: 'green' },
                { title: 'DevOps', icon: 'mdi-cloud', color: 'purple' }
            ]
        }
    },
    methods: {
        ChangeBg (id, btnCLass) {
            jquery(id).addClass('change-bg')
            jquery(btnCLass).addClass('circle-btn')
        },
        RevertBg (id, btnCLass) {
            jquery(id).removeClass('change-bg')
            jquery(btnCLass).removeClass('circle-btn')
        }
    }
}
</script>

<style scoped>
.page {
    height: 100%;
    width: 100%;
    color: #212a4d;

}
.whitespace {
    height: 30vh;
}
.landing {
    height: 100vh;
    background: url("https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
    background-position: center;
    background-size: cover;
}
.landing .overlay {
    background: rgba(237, 243, 245, 0.6);
    height: 100%;
    width: 100%;
}
.landing .content {
    background: #edf3f5;
}
.landing .overlay h1 {
    max-width: 50%;
    font-size: 55px;
}
.landing .overlay p {
    font-size: 25px;
    font-weight: 300;
}
.landing .overlay .search {
    background: white;
}
.landing .overlay .follow-us {
    width: 60%;
}
.landing .overlay .follow-us span {
    font-weight: 300;
}
.landing .overlay .follow-us button {
    border-color: rgba(0, 0, 0, 0.2);
    color: rgba(0, 0, 0, 0.2);
}
.landing .overlay .follow-us button:hover {
    border-color: rgba(0, 0, 0, 0.6);
    color: rgba(0, 0, 0, 0.6);
}
/* jobbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb */
.jobs {

}
.jobs h1 {
    font-size: 55px;
}
.jobs .v-card {
    background: rgba(237, 243, 245, 1);
    transition: all 0.5s ease-in-out;
}
.jobs .v-card .v-btn {
    background: white;
    transition: all 0.5s ease-in-out;
}
.jobs .v-card .v-btn:hover {
    background: #212a4d;
}
.jobs .v-card .v-icon {
    font-size: 50px;
}
/* about usssssssssssssssssssssssssssssssssss */
.about-us{
    background: rgba(237, 243, 245, 1);
    height: 100vh;
}
.about-us h1 {
    max-width: 50%;
    font-size: 55px;
}
/* loginnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn */
.login-register {

    width: 100%;
}

.login-register .col {
    height: 539px;
    text-align: center;
    transition: all 0.4s ease;
}
.login-register .btn {
    border-radius: 0px;
    background-color: white;
    color: #03dac6;
    height: 86px;
    width: 200px;
    font-size: 35px;
    position: relative;
    top: 200px;
    border: 4.2px solid #03dac6;
    transition: all 0.4s ease;
}

#tt-login.change-bg {
    background-color: #03dac6;
}

#tt-register.change-bg {
    background-color: #03dac6;
}
.ibtn.circle-btn {
    height: 200px;
    border-radius: 50%;
    position: relative;
    top: 150px;
    color: #03dac6;
    background-color: white;
    border: 4.2px solid white;
}

.rbtn.circle-btn {
    height: 200px;
    border-radius: 50%;
    position: relative;
    top: 150px;
    color: #03dac6;
    background-color: white;
    border: 4.2px solid white;
}

@media only screen and (max-width: 800px) {
    .landing {
    }
    .landing .overlay {
    }
    .landing .overlay h1 {
        font-size: 40px;
        max-width: 80%;
    }
    .landing .overlay p {
        font-size: 25px;
    }
    .landing .overlay .search {
    }
    .landing .overlay .follow-us {
        width: 80%;
    }
    .landing .overlay .follow-us span {
    }
    .landing .overlay .follow-us button {
    }
    .landing .overlay .follow-us button:hover {
    }
    .jobs {

    }
    .jobs h1 {
        font-size: 40px;
    }
    .jobs .v-card {
    }
    .jobs .v-card .v-btn {
    }
    .jobs .v-card .v-icon {
        font-size: 40px;
    }
}
</style>
