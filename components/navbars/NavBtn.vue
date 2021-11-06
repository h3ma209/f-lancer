<template>
  <div class="menu pa-6 " :class="{active:isClicked,'rounded-circle':!isClicked}">
    <div class="btn-container rounded-circle elevation-6">
      <v-img class="btn-icon" src="F.svg" max-height="40" contain @click="isClicked = !isClicked" />
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            isClicked: false
        }
    }
}
</script>

<style scoped>

.menu{
    background:white;
    float: right;
    height:70px;
    width:70px;
    display:grid;
    place-content:center;
    transition: all 0.4s cubic-bezier(0.5,-0.6,0.19,0.5);
    position: fixed;
    z-index: 9999;
    right: 5vw;
    top: 5vw;
}
.menu.active{
    right: 0vw;
    top: 0vw;
    z-index: 9999;
    width: 100vw;
    height: 100vh;
    position: fixed;
    transition: all 0.4s cubic-bezier(0.5,-0.6,0.19,0.5s);
 }

 .btn-container{
    background:white;
    float: right;
    height:70px;
    width:70px;
    display:grid;
    place-content:center;
    transition: all 1s cubic-bezier(0.5,-0.6,0.19,1);
    position: fixed;
    z-index: 9999;
    right: 5vw;
    top: 5vw;
 }
</style>
