<template>
  <div class="detail" id="detail" v-touch:swipe="onSwipeDown()">
    <div id="detail-card">
      <div class="line"></div>
      <div class="qr-code-detail">
        <p class="header-text mt-16 mb-24">Покажите код водителю</p>
        <qrcode-vue :value="'https://google.com'" class="qr-code"></qrcode-vue>
      </div>
    </div>
  </div>
</template>

<script>

import $ from "jquery";
import QrcodeVue from 'qrcode.vue'

export default {
  name: 'detail-component',

  components: {
    QrcodeVue,
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

    generateQrCode(){

    },

  },
}
</script>

<style scoped lang="scss">
</style>
