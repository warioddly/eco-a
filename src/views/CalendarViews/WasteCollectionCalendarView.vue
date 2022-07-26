<template>
  <div class="wrapper">
    <main class="content">
      <waste-collection-calendar />
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
import WasteCollectionCalendar from "@/components/WasteCollectionCalendar/CalendarComponent";

export default {
  name: 'WasteCollectionCalendarView',
  components: {
    WasteCollectionCalendar,
    NavigationComponent,
    DetailComponent
  }
}
</script>

<style scoped lang="scss">
</style>
