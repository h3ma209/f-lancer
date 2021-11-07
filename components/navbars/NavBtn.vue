<template>
  <div class="menu pa-6 " :class="{active:isClicked,'rounded-circle':!isClicked}">
    <div class="btn-container rounded-circle elevation-6">
      <v-img class="btn-icon" src="F.svg" max-height="40" contain @click="isClicked = !isClicked" />
    </div>
    <div class="contents" :class="{active:isClicked}">
      <v-list-tile class="pa-5">
        <v-list-tile-item-group>
          <v-list-tile-item v-for="item,i in links" :key="i">
            <v-list-tile-item-content class="px-5 ">
              <div class="link text-h2 text-left">
                {{ i+1 }}. {{ item.title }}
              </div>
            </v-list-tile-item-content>
          </v-list-tile-item>
        </v-list-tile-item-group>
      </v-list-tile>
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            isClicked: false,
            links: [
                { title: 'Home', link: '/' },
                { title: 'Login', link: '/' },
                { title: 'Register', link: '/' },
                { title: 'Profile', link: '/' },
                { title: 'Logout', link: '/' }
            ]
        }
    }
}
</script>

<style scoped>
*{
    color: #212a4d;
}
.menu {
    float: right;
    height: 70px;
    width: 70px;
    display: grid;
    place-content: center;
    transition: all 0.3s cubic-bezier(0.86, 0, 0.07, 1);
    position: fixed;
    z-index: 9999;
    right: 5vw;
    top: 5vw;
}
.menu.active {
    background: white;
    right: 0vw;
    top: 0vw;
    z-index: 9999;
    width: 100vw;
    height: 100vh;
    position: fixed;
}

.contents {
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease-in-out;

}
.contents.active {
    visibility: visible;
    opacity: 1;

}
.btn-container {
    background: white;
    float: right;
    height: 70px;
    width: 70px;
    display: grid;
    place-content: center;

    position: fixed;
    z-index: 9999;
    right: 5vw;
    top: 5vw;
    transition: all 0.3s ease-in-out;
}
.btn-container:hover {
    cursor: pointer;
    background: rgb(236, 236, 236);
}
/* .link {
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
    background-repeat: no-repeat;
    background-size: 100% 0.2em;
    background-position: 0 88%;
    transition: all 0.25s ease-in;
    cursor: pointer;
}
.link:hover{
    background-size: 100% 88%;
} */
.link {

    transition: all 0.25s ease-in;
    cursor: pointer;
    background-size: 10% 0.2em;
    background-position: 0 80%;
}
.link:hover {
    background-image: linear-gradient(120deg, #03DAC6 0%, #03DAC6 100%);
    background-repeat: no-repeat;
    background-size: 100% 0.2em;
    transform: scale(1.15);
    background-position: 0 80%;
}
</style>
