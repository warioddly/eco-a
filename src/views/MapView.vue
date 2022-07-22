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
import MapComponent2 from "@/components/Map/MapComponent2";
import NavigationComponent from "@/components/Navigation/NavigationComponent";
import ListOrMapComponent from "@/components/ListOrMapComponent";

export default {
  name: 'HomeView',
  components: {
    MapComponent,
    MapComponent2,
    NavigationComponent,
    ListOrMapComponent
  }
}
</script>

<style scoped lang="scss">
</style>
