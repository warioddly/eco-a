<template>
  <router-view />
</template>

<script>

export default {

  created() {
    this.$store.dispatch('initMarkers');

    ymaps.ready(() => {
      this.$store.dispatch('initGeolocation')
    });
  },
}
</script>

<style lang="scss">

</style>
