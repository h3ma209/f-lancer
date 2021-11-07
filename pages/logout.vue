<template>
  <div />
</template>

<script>
export default {
    middleware: 'isAuth',
    created () {
        this.$auth.logout().then(this.$router.push('/login'))
    }
}
</script>
