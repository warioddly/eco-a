<template>
  <div class="wrapper">
    <main class="content">
      <application-success-component />
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
import ApplicationSuccessComponent from "@/components/Applications/ApplicationSuccessComponent";

export default {
  name: 'ApplicationsSuccessView',
  components: {
    ApplicationSuccessComponent,
    NavigationComponent,
    DetailComponent
  }
}
</script>

<style scoped lang="scss">
</style>
