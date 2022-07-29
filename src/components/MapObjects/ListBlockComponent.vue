<template>
  <div class="list-blocks">
    <div class="text-center" v-if="this.filteredMarkers.length === 0">
      <p class="text-secondary">По вашему запросу нечего не найдено!</p>
    </div>
    <div class="scrollable-block information" v-for="(item, index) in this.filteredMarkers" :key="index">
      <div class="list" @click="setSelectedMarker(item)" data-id="{{ item.id }}">
        <div class="info">
          <p class="address">{{ item['address'] }}</p>
          <div class="range-block">
            <p class="range">{{ item['routeRange'] }}</p>
            <p class="measure">Метров</p>
          </div>
        </div>
        <div class="container-type">
          <template v-if="item['pointType'] === 'trash'">
            <div class="marker icon-trash"></div>
          </template>
          <template v-else>
            <div class="marker icon-waste"></div>
          </template>
          <p class="type">Контейнер для раздельного сбора мусора</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {mapGetters, mapMutations} from "vuex";
import $ from "jquery";

export default {
  name: 'list-block-component',
  computed: mapGetters(['filteredMarkers']),

  methods: {
    setSelectedMarker(marker){
      this.SET_SELECTED_MARKER(marker)
      $("#detail").toggleClass('active');
      $("#overlay").toggleClass('active');
    },

    ...mapMutations(["SET_SELECTED_MARKER"]),
  },
}
</script>

<style scoped lang="scss">
</style>
