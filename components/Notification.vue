<template>
  <div class="alert">
    <v-alert v-for="notification,i in nots.slice(Math.max(nots.length - 6, 0))" :key="i" :type="notification.type" dismissible @click="rmNots(i)">
      {{ notification.msg }}
    </v-alert>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
    setup () {

    },
    data () {
        return {
            // nots: [{ msg: 'test', type: 'error' }]
        }
    },
    computed: {
        nots () {
            return this.getNotification()
        }
    },
    methods: {
        ...mapMutations(['addNotification', 'removeNotification']),
        ...mapGetters(['getNotification']),
        rmNots (i) {
            // console.log('removing ' + i)
            this.removeNotification(i)
        }
    }

}
</script>

<style scoped>

.alert {
    max-height: 80%;

    position: fixed;
    bottom: 5vh;
    right: 5vh;
    z-index: 99999;
    transition: all 0.4s ease;
    overflow: hidden;
}
</style>
