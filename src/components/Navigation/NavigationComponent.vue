<template>
  <div class="navigation">
    <ul class="nav-items">
      <li class="item">
        <router-link to="/" class="nav-item-link">
          <div class="ico icon-nav-redeem"></div>
          <p>Обменять</p>
        </router-link>
      </li>
      <li class="item">
        <router-link to="/applications" class="nav-item-link">
          <div class="ico icon-nav-waste"></div>
          <p>Заявки</p>
        </router-link>
      </li>
      <li class="item">
        <router-link  to="/" :class="'nav-item-link ' + [$route.fullPath === '/list' ? 'router-link-active': ' ']">
          <div class="ico icon-nav-marker-pin"></div>
          <p>Объекты</p>
        </router-link>
      </li>
      <li class="item">
        <router-link to="/calendar" class="nav-item-link">
          <div class="ico icon-nav-calendar-check"></div>
          <p>Календарь</p>
        </router-link>
      </li>
      <li class="item">
        <router-link to="/" class="nav-item-link">
          <div class="ico icon-nav-menu"></div>
          <p>Еще</p>
        </router-link>
      </li>
    </ul>
    <div class="bottom-line" v-touch:swipe="onSwipeUp()">
      <div class="line"></div>
    </div>
  </div>
</template>

<script>

import $ from 'jquery'

export default {
  name: 'navigation-component',

  methods: {
    onSwipeUp() {
      return function (direction) {
        if(direction === 'top' || direction === 'right' || direction === 'left'){
          $("#detail").addClass('active')
          $('#overlay').addClass('active');
        }
      };
    },
  }
}
</script>

<style scoped lang="scss">
</style>
