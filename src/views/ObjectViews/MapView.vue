<template>
  <main class="content">
    <map-component />
    <detail-component />
  </main>
</template>

<script>

import DetailComponent from "@/components/MapObjects/DetailComponent";
import MapComponent from "@/components/MapObjects/MapComponent";
import NavigationComponent from "@/components/Navigation/NavigationComponent";
import ListOrMapComponent from "@/components/MapObjects/ListOrMapComponent";

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
