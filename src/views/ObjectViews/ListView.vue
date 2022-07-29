<template>
  <main class="content">
    <div id="list">
      <div id="overlay"></div>
      <search-component />
      <list-block-component/>
    </div>
    <detail-component />
  </main>
</template>

<script>

import DetailComponent from "@/components/MapObjects/DetailComponent";
import NavigationComponent from "@/components/Navigation/NavigationComponent";
import ListOrMapComponent from "@/components/MapObjects/ListOrMapComponent";
import SearchComponent from "@/components/MapObjects/SearchComponent";
import ListBlockComponent from "@/components/MapObjects/ListBlockComponent";

export default {
  name: 'HomeView',
  components: {
    NavigationComponent,
    ListOrMapComponent,
    DetailComponent,
    SearchComponent,
    ListBlockComponent
  }
}
</script>

<style scoped lang="scss">
</style>
