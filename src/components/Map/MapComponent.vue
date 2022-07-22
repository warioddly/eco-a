
<template>
    <div id="map" class="map"></div>
</template>

<script>

import $ from "jquery";
var map = {};

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
        zoom: 14,
        controls: [],
      });

      this.getLocation();
      this.createControllers();
    },

    createControllers(){
      let ZoomLayout = ymaps.templateLayoutFactory.createClass(
          "<div class=\"zoom\">\n" +
          "  <div class=\"plus\" id='zoom-in'></div>\n" +
          "  <div class=\"minus\" id='zoom-out'></div>\n" +
          "</div>", {

        build: function () {
          ZoomLayout.superclass.build.call(this);

          this.zoomInCallback = ymaps.util.bind(this.zoomIn, this);
          this.zoomOutCallback = ymaps.util.bind(this.zoomOut, this);

          $('#zoom-in').bind('click', this.zoomInCallback);
          $('#zoom-out').bind('click', this.zoomOutCallback);
        },

        clear: function () {
          $('#zoom-in').unbind('click', this.zoomInCallback);
          $('#zoom-out').unbind('click', this.zoomOutCallback);

          ZoomLayout.superclass.clear.call(this);
        },

        zoomIn: function () {
          var map = this.getData().control.getMap();
          map.options.set('maxAnimationZoomDifference', Infinity);
          map.setZoom(map.getZoom() + 1, {duration: 300});
        },

        zoomOut: function () {
          var map = this.getData().control.getMap();
          map.options.set('maxAnimationZoomDifference', Infinity);
          map.setZoom(map.getZoom() - 1, {duration: 300});
        }
      });

      let zoomControl = new ymaps.control.ZoomControl({
          options:
            {
              layout: ZoomLayout,
              position: {
                right: 15,
                top: window.innerHeight / 2 - 130
              }
            }
        });

      this.map.controls.add(zoomControl);
    },

    getLocation(){
      this.map.setCenter(this.location)
      var circle = new ymaps.Circle([this.location, 100], {
        hintContent: "Move me"
      }, {
        geodesic: true,
      });
      this.map.geoObjects.add(circle);
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
