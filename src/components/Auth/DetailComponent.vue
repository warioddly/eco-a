<template>
  <div class="detail" id="detail" v-touch:swipe="onSwipeDown()">
    <div id="detail-card">
      <div class="line"></div>
      <div class="qr-code-detail">
        <p class="header-text mt-16 mb-24">Покажите код водителю</p>
        <div class="items">
          <template v-for="item in regions[0]">
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

export default {
  name: 'detail-component',

  components: {
    QrcodeVue,
  },

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
