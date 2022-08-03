<template>
  <div class="detail" id="detail" v-touch:swipe="onSwipeDown()">
    <div id="detail-card">
      <div class="line"></div>
      <div class="info">
        <div class="card-info information">
          <p class="address">{{ selectedMarker['address'] }}</p>
          <div class="range-block">
            <div class="icon-route"></div>
            <span>
            <p class="range">{{ selectedMarker['routeRange'] }}</p>
            <p class="measure">Метров</p>
          </span>
          </div>
        </div>
        <div class="container-type">
          <p class="type">Контейнер для раздельного сбора мусора</p>
        </div>
      </div>
      <div class="info product-type">
        <p class="text-title">Виды принимаемого сырья</p>
        <ul class="product-type-items">
            <li class="types text-secondary">Пластик</li>
            <li class="types text-secondary">Макулатура</li>
            <li class="types text-secondary">Картон</li>
            <li class="types text-secondary">Металл</li>
        </ul>
      </div>
      <div class="info contacts">
        <div class="owner">
          <p class="text-title">Владелец</p>
          <p class="text-secondary">ООО “Эколайн”</p>
        </div>
        <div class="contact">
          <div class="phone">
            <p class="text-title">Телефон</p>
            <p class="text-secondary">+7(123)456-78-90</p>
          </div>
          <div class="work-time">
            <p class="text-title">Часы работы</p>
            <p class="text-secondary">С 9:00 до 19:00</p>
          </div>
        </div>
      </div>
      <div class="build-route">
        <div class="btn build-route-btn" @click="buildRoute()"><p>Проложить маршрут</p></div>
      </div>
    </div>
  </div>
<!--  <div class="filter" id="filter" v-touch:swipe="onSwipeDown()">-->
<!--    wadawdawdawddddddddddddddddd-->
<!--    <div class="line"></div>-->
<!--  </div>-->
</template>

<script>

import $ from "jquery";
import {mapGetters, mapMutations} from "vuex";
import router from "@/router";

export default {
  name: 'detail-component',

  computed: mapGetters(['selectedMarker', 'geolocation', 'markers']),

  methods: {
    onSwipeDown() {
      return function (direction) {
        if(direction === 'bottom' || direction === 'right' || direction === 'left'){
          $("#detail").removeClass('active')
          $('#overlay').removeClass('active');
        }
      };
    },

    async buildRoute() {
      $('#detail').removeClass('active');
      $('#overlay').removeClass('active');
      this.SET_MAP_INIT(true);

      // map.geoObjects.removeAll();
      // map.geoObjects.add(objectManager);

      if(this.$route.fullPath === '/'){
        if(Object.keys(map).length !== 0){
          $('#map').empty();
        }

        map = new ymaps.Map('map', {
          zoom: 10,
          controls: [],
          center: [55.831903, 37.411961]
        })

        if(this.selectedMarker.address !== 'Empty'){
          multiRoute = new ymaps.multiRouter.MultiRoute({
            referencePoints: [this.geolocation, this.selectedMarker.geometry.coordinates],
            params: { routingMode: 'pedestrian' } }, { boundsAutoApply: true });
          map.geoObjects.add(multiRoute);
          map.geoObjects.add(objectManager);
        }
      }

      if(this.$route.fullPath !== '/'){
        router.replace('/');
        await new Promise(resolve => setTimeout(resolve, 1000));
        return
      }

      setTimeout(() => {
        this.SET_MAP_INIT(false);
      }, 3000)
    },

    ...mapMutations(["SET_SELECTED_MARKER", 'SET_MAP_INIT']),

  },
}
</script>

<style scoped lang="scss">
</style>
