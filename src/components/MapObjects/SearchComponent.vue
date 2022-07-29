<template>
  <div class="search-controllers">
    <div class="search">
      <div class="icon-search"></div>
      <input type="text" class="search-input" id='search' v-model="search" @input="searchFunction()" placeholder="Найти по адресу" />
      <div class="icon-clear" @click="clearInput" v-if="search"></div>
        <div id="dropdown-list" v-if="search !== '' && currentRoute === '/'">
        <div class="dropdown-container">
          <div v-if="this.filteredMarkers.length === 0">
              <p class="text-secondary">По вашему запросу нечего не найдено!</p>
          </div>
          <div class="information" v-for="(item, index) in this.filteredMarkers" :key="index">
            <div class="list" @click="setSelectedMarker(item)" data-id="{{ item.id }}">
              <div class="info">
                <p class="address">{{ item['address'] }}</p>
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
      </div>
    </div>
    <div class="filter" @click="toggleActiveToFilter()"></div>
  </div>
</template>

<script>

import $ from "jquery";
import {mapGetters, mapMutations} from "vuex";

export default {
  name: 'search-component',

  data() {
    return {
      search: '',
      currentRoute: '',
    }
  },

  computed: mapGetters(['filteredMarkers']),

  methods: {
    toggleActiveToFilter(){
      $("#filter").toggleClass("active");
      $("#overlay").toggleClass("active");
    },

    clearInput(){
      this.search = '';
      this.SET_SEARCH_MARKER('');
    },

    searchFunction(){
      this.SET_SEARCH_MARKER(this.search.toLowerCase());
    },

    setSelectedMarker(marker){
      this.search = '';
      this.SET_SEARCH_MARKER('');
      this.SET_SELECTED_MARKER(marker)
      $("#detail").toggleClass('active');
    },

    ...mapMutations(['SET_SELECTED_MARKER', 'SET_SEARCH_MARKER'])

  },

  created() {
    this.currentRoute = this.$route.path
    this.SET_SEARCH_MARKER('');
  }

}
</script>

<style scoped lang="scss">
</style>
