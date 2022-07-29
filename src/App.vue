<template>
  <div :class="$route.name == 'home' ? 'wrapper overflow-hidden' : 'wrapper'">

    <header v-if="$route.name === 'home' || $route.name === 'objectList'">
      <div class="list-or-map">
        <router-link :to="{ name: 'home'}" class="header-link">Карта</router-link>
        <router-link :to="{ name: 'objectList'}" class="header-link">Список</router-link>
      </div>
    </header>

    <router-view v-slot="{ Component }">
      <FadeInOut entry="left" exit="right" :duration="120" mode="out-in">
        <component :is="Component" />
      </FadeInOut>
    </router-view>

    <nav>
      <navigation-component/>
    </nav>
  </div>
</template>

<script>

import NavigationComponent from "@/components/Navigation/NavigationComponent";
import $ from 'jquery'
import router from "@/router";

export default {

  components: {
    NavigationComponent
  },

  mounted() {
    this.$store.dispatch('initMarkers');

    ymaps.ready(() => {
      this.$store.dispatch('initGeolocation')
    });

    let greeted = JSON.parse(window.localStorage.getItem('greet22')) || null;
    if(greeted == null){
      router.push({ name: 'greeting' })
      $('nav').hide()
    }
  },
}
</script>

<style lang="scss">

</style>
