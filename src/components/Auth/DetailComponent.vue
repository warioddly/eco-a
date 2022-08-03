<template>
  <div class="detail" id="detail" v-touch:swipe="onSwipeDown()">
    <div id="detail-card">
      <div class="line"></div>
      <div class="region-detail">
        <div class="search-controllers">
          <div class="search">
            <div class="icon-search"></div>
            <input type="text" class="search-input" id='search' v-model="search" @input="searchFunction()" placeholder="Наименование региона" />
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
        </div>
        <div class="items">
          <template v-for="item in this.getSelectedRegion">
            <div class="item-list">
              {{ item.city }}
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import $ from "jquery";
import QrcodeVue from 'qrcode.vue'
import {mapGetters} from "vuex";

export default {
  name: 'detail-component',

  components: {
    QrcodeVue,
  },

  computed: mapGetters(['getSelectedRegion']),

  data() {
    return {
      regions: [],
      regionData: [],
    }
  },

  methods: {
    onSwipeDown() {
      return function (direction) {
        if(direction === 'bottom' || direction === 'right' || direction === 'left'){
          $("#detail").removeClass('active')
          $('#overlay').removeClass('active');
        }
      };
    },
  },

  created() {
    $.ajax('/db/regions.json')
      .then(data => {
        this.regions.push(data);
        this.regionData.push(data[0]);
      })
  }
}
</script>

<style scoped lang="scss">



</style>
