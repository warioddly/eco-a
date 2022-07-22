<template>
  <div class="wrapper">
    <header>
      <list-or-map-component />
    </header>
    <main class="content">
      <map-component />
    </main>
    <nav>
      <navigation-component/>
    </nav>
  </div>
</template>

<script>

import MapComponent from "@/components/Map/MapComponent";
import NavigationComponent from "@/components/Navigation/NavigationComponent";
import ListOrMapComponent from "@/components/ListOrMapComponent";

export default {
  name: 'HomeView',
  components: {
    MapComponent,
    NavigationComponent,
    ListOrMapComponent
  }
}
</script>

<style scoped lang="scss">
</style>
