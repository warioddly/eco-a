<template>
  <div class="wrapper">
    <main class="content">
      <application-list-component />
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
import ApplicationListComponent from "@/components/Applications/ApplicationListComponent";

export default {
  name: 'ApplicationsListView',
  components: {
    ApplicationListComponent,
    NavigationComponent,
    DetailComponent
  }
}
</script>

<style scoped lang="scss">
</style>
