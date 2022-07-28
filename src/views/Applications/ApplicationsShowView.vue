<template>
  <div class="wrapper">
    <main class="content application-show">
      <div id="applications-list-show">
        <div id="overlay"></div>
        <header-component :title="'№' + data.id" class="header-nav" />
        <div class="body">
          <carousel
              :items-to-show="1"
              :wrap-around="true"
              :autoplay="2000"
              :touchDrag="true"
              snapAlign="center"
              class="carousel-container" >
            <slide v-for="slide in data.images" :key="slide">
              <img :src="slide.path" alt="" class="carousel-item-image">
            </slide>
            <template #addons>
              <pagination class="carousel-pagination"/>
            </template>
          </carousel>
          <div class="info">
            <div class="status mb-10 mt-10">
              <p class="id">№{{ data.id }}</p>
              <p :class="data.status + ' application-status'">Ожидание</p>
            </div>
            <div class="info-body">
              <p class="address mb-10">{{ data.address }}</p>
              <div class="info">
                <div class="lab mb-10">
                  <p class="labels">Дата и время вывоза:</p>
                  <p class="data date">{{ data.pickupDate }} {{ data.pickupTime }}</p>
                </div>
                <div class="lab mb-10">
                  <p class="labels">Кто заберет:</p>
                  <p class="pick-up data">Михаил С.</p>
                </div>
                <div class="lab mb-10">
                  <p class="labels">Тип вторсырья:</p>
                  <p class="type data">{{ data.types.toString() }}</p>
                </div>
                <div class="lab mb-10">
                  <p class="labels">Примерный вес:</p>
                  <p class="capacity data">{{ data.capacity }}</p>
                </div>
                <div class="lab mb-10">
                  <p class="labels">Контактный телефон:</p>
                  <p class="phone data">{{ data.phone }}</p>
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

  data() {
    return{
      id: this.$route.params.id,
      data: [],
    }
  },

  methods: {
    generateQrCode() {
      $("#detail").toggleClass('active')
      $('#overlay').toggleClass('active');
    },

    applicationsFilter(items, id) {
      return items.filter(item => {
        id = id.toString();
        item.id = item.id.toString();
        return item.id.includes(id)
    })
}
},

  created() {
    this.data = this.applicationsFilter(JSON.parse(window.localStorage.getItem('applications')), this.id)[0];
  }
}
</script>

<style scoped lang="scss">
</style>
