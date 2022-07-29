<template>
  <div class="wrapper">

    <router-view v-slot="{ Component }">
      <transition
          name="fade" mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </router-view>

    <nav>
      <navigation-component/>
    </nav>
  </div>
</template>

<script>

import NavigationComponent from "@/components/Navigation/NavigationComponent";

export default {

  components: {
    NavigationComponent
  },

  mounted() {
    this.$store.dispatch('initMarkers');

    ymaps.ready(() => {
      this.$store.dispatch('initGeolocation')
    });
  }

}
</script>

<style lang="scss">
$duration: 0.5s;
.transition {
  overflow: hidden;
}
.router-view,
.router-view-back {
  &-enter-active,
  &-leave-active {
    position: fixed;
    width: 100%;
    background: white;
    min-height: 100vh;
    top: 0;
  }
}
// router view
.router-view-enter-active {
  transition: transform $duration ease-in-out;
  z-index: 2;
  transform: translateX(100%);
}
.router-view-enter-to {
  z-index: 2;
  transform: translateX(0%);
}
.router-view-leave-active {
  z-index: -1;
}
.router-view-leave-to {
  z-index: -1;
}
// router view back

.router-view-back-leave-active {
  transition: transform $duration ease-in-out;
  z-index: 2;
  transform: translateX(0%);
}
.router-view-back-leave-to {
  z-index: 2;
  transform: translateX(100%);
}
</style>
