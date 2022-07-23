<template>
  <div id="list">
    <search-component />
    <list-block-component />
  </div>
</template>

<script>

import SearchComponent from "@/components/SearchComponent";
import ListBlockComponent from "@/components/List/ListBlockComponent";

export default {
  name: 'list-component',

  components: {
    SearchComponent,
    ListBlockComponent
  }
}
</script>

<style scoped lang="scss">
</style>
