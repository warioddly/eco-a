<link rel="stylesheet" href="../../assets/scss/main.scss">
<template>
  <div class="detail" id="detail" v-touch:swipe="onSwipeDown()">
    <div id="detail-card">
      <div class="line"></div>
      <div class="info">
        <div class="card-info information">
          <p class="address">г.Москва, Самаркандский бульвар 37, стр.3</p>
          <div class="range-block">
            <div class="icon-route"></div>
            <span>
            <p class="range">356</p>
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
            <p class="text-title">Владелец</p>
            <p class="text-secondary">ООО “Эколайн”</p>
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
</template>

<script>

import $ from "jquery";

export default {
  name: 'detail-component',

  methods: {
    onSwipeDown() {
      return function (direction) {
        if(direction === 'bottom' || direction === 'right' || direction === 'left'){
          $("#detail").removeClass('active')
        }
      };
    },

    buildRoute(){
        console.log('qqqqqqq');

      var pointA = [55.749, 37.524],
          pointB = "Moscow, Red square",
          /**
           * Creating a multiroute.
           * @see https://api.yandex.com/maps/doc/jsapi/2.1/ref/reference/multiRouter.MultiRoute.xml
           */
          multiRoute = new ymaps.multiRouter.MultiRoute({
            referencePoints: [
              pointA,
              pointB
            ],
            params: {
              //The routing type - pedestrian.
              routingMode: 'pedestrian'
            }
          }, {
            // Automatically set the map boundaries so the entire route is visible.
            boundsAutoApply: true
          });

      // Creating a button.
      var changePointsButton = new ymaps.control.Button({
        data: {content: "Swap points A and B"},
        options: {selectOnClick: true}
      });

      // Declaring handlers for the button.
      changePointsButton.events.add('select', function () {
        multiRoute.model.setReferencePoints([pointB, pointA]);
      });

      changePointsButton.events.add('deselect', function () {
        multiRoute.model.setReferencePoints([pointA, pointB]);
      });

      this.map.geoObjects.add(multiRoute);






    },
  }
}
</script>

<style scoped lang="scss">
</style>
