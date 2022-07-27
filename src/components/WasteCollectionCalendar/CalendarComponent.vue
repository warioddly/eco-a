<template>
  <div id="calendar">
    <header-component title="Календарь сбора отходов"/>
      <div class="body">
        <div class="calendar">
          <Calendar is-expanded :attributes="attributes" />
        </div>
      </div>
  </div>
</template>

<script>

import HeaderComponent from "@/components/Navigation/HeaderComponent.vue";
import 'v-calendar/dist/style.css';

export default {
  name: 'waste-collection-calendar',
  components: {
    HeaderComponent
  },

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
  }

}
</script>

<style scoped lang="scss">
</style>
