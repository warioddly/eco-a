<template>
  <div class="wrapper">
    <main class="content">
      <hand-over-recyclables-component />
      <detail-component/>
    </main>
    <nav>
      <navigation-component/>
    </nav>
  </div>
</template>

<script>

import DetailComponent from "@/components/MapObjects/Details/DetailComponent";
import NavigationComponent from "@/components/Navigation/NavigationComponent";
import HandOverRecyclablesComponent from "@/components/Applications/HandOverRecyclablesComponent";

export default {
  name: 'HandOverRecyclablesView',
  components: {
    HandOverRecyclablesComponent,
    NavigationComponent,
    DetailComponent
  }
}
</script>

<style scoped lang="scss">
</style>
