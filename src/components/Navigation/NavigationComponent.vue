<template>
  <div class="navigation">
    <ul class="nav-items">
      <li class="item">
        <router-link to="/list" class="nav-item-link">
          <div class="ico icon-nav-redeem"></div>
          <p>Обменять</p>
        </router-link>
      </li>
      <li class="item">
        <router-link to="/" class="nav-item-link">
          <div class="ico icon-nav-waste"></div>
          <p>Заявки</p>
        </router-link>
      </li>
      <li class="item">
        <router-link to="/" class="nav-item-link">
          <div class="ico icon-nav-marker-pin"></div>
          <p>Объекты</p>
        </router-link>
      </li>
      <li class="item">
        <router-link to="/list" class="nav-item-link">
          <div class="ico icon-nav-calendar-check"></div>
          <p>Календарь</p>
        </router-link>
      </li>
      <li class="item">
        <router-link to="/list" class="nav-item-link">
          <div class="ico icon-nav-menu"></div>
          <p>Еще</p>
        </router-link>
      </li>
    </ul>
    <div class="bottom-line" v-touch:swipe="onSwipeUp()">
      <div class="line"></div>
    </div>
  </div>
  <detail-component />
</template>

<script>
import DetailComponent from "@/components/Navigation/DetailComponent";
import $ from 'jquery'

export default {
  name: 'navigation-component',
  components: {
    DetailComponent
  },

  methods: {
    onSwipeUp() {
      return function (direction) {
        if(direction === 'top' || direction === 'right' || direction === 'left'){
          console.log(direction);
          $("#detail").addClass('active')
        }
      };
    },
  }
}
</script>

<style scoped lang="scss">
</style>
