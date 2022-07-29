<template>
  <header>
    <list-or-map-component />
  </header>
  <main class="content">
    <list-component />
    <detail-component />
  </main>
</template>

<script>

import DetailComponent from "@/components/MapObjects/Details/DetailComponent";
import NavigationComponent from "@/components/Navigation/NavigationComponent";
import ListOrMapComponent from "@/components/MapObjects/components/ListOrMapComponent";
import ListComponent from "@/components/MapObjects/List/ListComponent";

export default {
  name: 'HomeView',
  components: {
    ListComponent,
    NavigationComponent,
    ListOrMapComponent,
    DetailComponent,
  }
}
</script>

<style scoped lang="scss">
</style>
