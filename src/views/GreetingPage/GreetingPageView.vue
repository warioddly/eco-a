<template>
  <main class="content" >
    <div id="greeting" class="">
      <carousel
          ref="myCarousel"
          :items-to-show="1"
          :wrap-around="true"
          :touchDrag="true"
          snapAlign="center"
          class="carousel-container" >

          <slide v-for="slide in 4" :key="slide">

            <div class="item-container">
              <div class="img-container">
                <img src="@/assets/images/application-images/wp6506178.jpg" alt="" class="">
              </div>
              <div class="body">
                <p class="text-title">Основной тезис</p>
                <p class="text-description">3-4 экрана, для чего приложение, как помогает, описать плюшки создания аккаунта (мотивация к регистрации)</p>
              </div>
            </div>

          </slide>

        <template #addons >
          <div class="buttons">
            <pagination class="carousel-pagination"/>
            <div class="btn btn-secondary" @click="nextSlider">Далее</div>
            <div class="skip" @click="skip">Пропустить</div>
          </div>
        </template>
      </carousel>
    </div>
  </main>
</template>

<script>

import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import HeaderComponent from "@/components/Navigation/HeaderComponent.vue";
import 'vue3-carousel/dist/carousel.css';
import router from "@/router";
import $ from "jquery";

export default {
  name: 'GreetingPageView',
  components: {
    HeaderComponent,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },

  methods: {
    nextSlider(){
     this.$refs.myCarousel.next()
    },
    skip(){
      window.localStorage.setItem('greet', JSON.stringify([{ greeted: true }]));
      router.push({ name: 'home' });
      $('nav').show();
    },
  }
}
</script>

<style scoped lang="scss">
</style>
