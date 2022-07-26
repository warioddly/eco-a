<template>
  <div id="calendar">
      <div class="header">
        <router-link to="/">
          <div class="icon-back"></div>
        </router-link>
        <p class="header-title">Календарь сбора отходов</p>
        <div class="icon-user-profile"></div>
      </div>
      <div class="body">
        <div class="calendar">
          <Calendar is-expanded show-weeknumbers="inside" :attributes="attributes" />
        </div>
      </div>
  </div>
</template>

<script>

import 'v-calendar/dist/style.css';

export default {
  name: 'waste-collection-calendar',

  data() {
    return {
      attributes: [
        {
          key: 'today',
          highlight: {
            contentStyle: {
              backgroundColor: "#1B8EE2",
              borderRadius: "8px",
              padding: "21px",
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
