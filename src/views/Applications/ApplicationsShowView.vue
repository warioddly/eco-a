<template>
  <div class="wrapper">
    <main class="content application-show">
      <div id="applications-list-show">
        <div id="overlay"></div>
        <header-component title="№325125" class="header-nav" />
        <div class="body">
          <carousel
              :items-to-show="1"
              :wrap-around="true"
              :autoplay="2000"
              :touchDrag="true"
              snapAlign="center"
              class="carousel-container" >
            <slide v-for="slide in 5" :key="slide">
              <img src="https://wallpaperaccess.com/full/2651906.jpg" alt="" class="carousel-item-image">
            </slide>
            <template #addons>
              <pagination class="carousel-pagination"/>
            </template>
          </carousel>
          <div class="info">
            <div class="status mb-10 mt-10">
              <p class="id">№325125</p>
              <p class="status-canceled application-status">Отменена</p>
            </div>
            <div class="info-body">
              <p class="address mb-10">Московская область, г.Подольск, ул.Кузнецова 164</p>
              <div class="info">
                <div class="lab mb-10">
                  <p class="labels">Дата и время вывоза:</p>
                  <p class="data date">27.07.2022</p>
                </div>
                <div class="lab mb-10">
                  <p class="labels">Кто заберет:</p>
                  <p class="pick-up data">Михаил С.</p>
                </div>
                <div class="lab mb-10">
                  <p class="labels">Тип вторсырья:</p>
                  <p class="type data">Бумага, Стекло, Пластик, Металл</p>
                </div>
                <div class="lab mb-10">
                  <p class="labels">Примерный вес:</p>
                  <p class="capacity data">20 кг</p>
                </div>
                <div class="lab mb-10">
                  <p class="labels">Контактный телефон:</p>
                  <p class="phone data">+7(495)123-45-67</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="btns">
          <div class="get-qr-code mb-16" @click="generateQrCode">Показать QR-код</div>
          <router-link :to="{name: 'applicationsCancelRequest'}" class="cancel">
            <div class="btn-danger-outline">Отменить заявку</div>
          </router-link>
        </div>
      </div>
      <detail-component/>
    </main>
    <nav>
      <navigation-component/>
    </nav>
  </div>
</template>

<script>

import DetailComponent from "@/components/Applications/Details/DetailComponent";
import NavigationComponent from "@/components/Navigation/NavigationComponent";
import { Carousel, Slide, Pagination } from 'vue3-carousel';
import HeaderComponent from "@/components/Navigation/HeaderComponent.vue";
import 'vue3-carousel/dist/carousel.css';
import $ from "jquery";

export default {
  name: 'ApplicationsListView',
  components: {
    HeaderComponent,
    Carousel,
    Slide,
    Pagination,
    NavigationComponent,
    DetailComponent
  },

  methods: {
    generateQrCode() {
      $("#detail").toggleClass('active')
      $('#overlay').toggleClass('active');
    }
  }
}
</script>

<style scoped lang="scss">
</style>
