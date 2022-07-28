<template>
  <div id="list">
    <div id="overlay"></div>
    <search-component />
    <list-block-component/>
  </div>
</template>

<script>

import SearchComponent from "@/components/MapObjects/components/SearchComponent";
import ListBlockComponent from "@/components/MapObjects/List/ListBlockComponent";

export default {
  name: 'list-component',
  components: {
    SearchComponent,
    ListBlockComponent
  },
}
</script>

<style scoped lang="scss">
</style>
