<template>
  <div class="wrapper">
    <header>
      <list-or-map-component />
    </header>
    <main class="content">
      <map-component />
      <detail-component />
    </main>
    <nav>
      <navigation-component/>
    </nav>
  </div>
</template>

<script>

import DetailComponent from "@/components/MapObjects/Details/DetailComponent";
import MapComponent from "@/components/MapObjects/Map/MapComponent";
import NavigationComponent from "@/components/Navigation/NavigationComponent";
import ListOrMapComponent from "@/components/MapObjects/components/ListOrMapComponent";

export default {
  name: 'HomeView',
  components: {
    MapComponent,
    NavigationComponent,
    ListOrMapComponent,
    DetailComponent
  }
}
</script>

<style scoped lang="scss">
</style>
