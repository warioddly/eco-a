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
  </div>
  <detail-component />
</template>

<script>
import DetailComponent from "@/components/Navigation/DetailComponent";

export default {
  name: 'navigation-component',
  components: {
    DetailComponent
  }
}
</script>

<style scoped lang="scss">
</style>
