<template>
  <div class="wrapper">
    <header>
      <list-or-map-component />
    </header>
    <main class="content">
      <list-component />
    </main>
    <nav>
      <navigation-component/>
    </nav>
  </div>
</template>

<script>

import NavigationComponent from "@/components/Navigation/NavigationComponent";
import ListOrMapComponent from "@/components/ListOrMapComponent";
import ListComponent from "@/components/List/ListComponent";

export default {
  name: 'HomeView',
  components: {
    ListComponent,
    NavigationComponent,
    ListOrMapComponent
  }
}
</script>

<style scoped lang="scss">
</style>
