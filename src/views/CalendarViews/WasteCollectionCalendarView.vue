<template>
  <div class="wrapper">
    <main class="content">
      <div id="calendar">
        <header-component title="Календарь сбора отходов" class="header-nav"/>
        <div class="body">
          <div class="calendar">
            <Calendar is-expanded :attributes="attributes" />
          </div>
        </div>
      </div>
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
import HeaderComponent from "@/components/Navigation/HeaderComponent.vue";
import 'v-calendar/dist/style.css';

export default {
  name: 'WasteCollectionCalendarView',

  data() {
    return {
      attributes: [
        {
          key: 'today',
          highlight: {
            contentStyle: {
              backgroundColor: "#1B8EE2",
              borderRadius: "8px",
              padding: "18px",
              color: "white",
            }
          },
          dot: {
            style: {
              backgroundColor: 'white',
            },
          },
          dates: new Date(),
          excludeDates: null,
          order: 0
        }
      ]
    }
  },

  components: {
    HeaderComponent,
    NavigationComponent,
    DetailComponent
  }
}
</script>

<style scoped lang="scss">
</style>
