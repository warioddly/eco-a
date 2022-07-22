
<template>
    <div id="map" class="map"></div>
</template>

<script>

export default {
  name: 'map-component',

  data () {
    return {
      settings: {
        apiKey: '744d33c1-034f-4dac-9ff2-bdfe1f52b51f',
        lang: 'ru_RU',
        coordorder: 'latlong',
        version: '2.1'
      },
      map: {},
      location: [],
      coords: [],
    }
  },

  methods: {
    run(){
      ymaps.geolocation.get().then((res) => {
        this.location = res.geoObjects.position;
        this.coords = res.geoObjects.position;

        this.mapIntitialize();
      });

    },

    mapIntitialize(){
      this.map = new ymaps.Map("map", {
        center: this.location,
        zoom: 14
      });
    },

    markerIntitialize() {

    },


  },

  created() {
    ymaps.ready(this.run);
  }
}
</script>

<style scoped lang="scss">
</style>
