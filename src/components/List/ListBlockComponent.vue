<template>
  <div class="list-blocks " v-if="listInitialized">
    <div class="scrollable-block information" v-for="(item, index) in this.markerData" :key="index">
      <div class="list">
        <div class="info">
          <p class="address">{{ item['address'] }}</p>
          <div class="range-block">
            <p class="range">{{ item['routeRange'] }}</p>
            <p class="measure">Метров</p>
          </div>
        </div>
        <div class="container-type">
          <template v-if="item.type === 'trash'">
            <div class="marker icon-trash"></div>
          </template>
          <template v-else>
            <div class="marker icon-waste"></div>
          </template>
          <p class="type">Контейнер для раздельного сбора мусора</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'list-block-component',
  props: ['markerData'],

  data() {
      return {
        listInitialized: false,
        userLocation: [0, 0],
        routeRange: [],
      }
  },

  methods: {
    async listInitialize(){
      await ymaps.geolocation.get({ provider: 'auto', mapStateAutoApply: true }).then((res) => {
        this.userLocation = res.geoObjects.position;
      });

      this.assignRouteRanges();

      this.listInitialized = true
    },

    assignRouteRanges(){
      for (let i = 0; i < this.markerData.length; i++) {
        this.getRouteRange(this.markerData[i].coords, i)
      }
    },

    getRouteRange(coords, index){
      var way, segments, sumSegments = 0;
      ymaps.route([this.userLocation , coords])
          .then((route) => {

            way = route.getPaths().get(0);
            segments = way.getSegments();

            for (var j = 0; j < segments.length; j++) {
              sumSegments += parseInt(segments[j].getLength())
            }

            this.createArr(sumSegments, index);
          });

      return this.routeRange;
    },

    createArr(item, index){
      this.routeRange.push(item);
      Object.assign(this.markerData[index], {
        routeRange: item
      })
    },

  },

  created() {
    ymaps.ready(() => {
      this.listInitialize()
    });
  }
}
</script>

<style scoped lang="scss">
</style>
