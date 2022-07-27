<template>
  <div class="wrapper">
    <main class="content">
      <applications-component />
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
import ApplicationsComponent from "@/components/Applications/ApplicationsComponent";

export default {
  name: 'ApplicationsView',
  components: {
    ApplicationsComponent,
    NavigationComponent,
    DetailComponent
  }
}
</script>

<style scoped lang="scss">
</style>
