<template>
<div>
  <transition-group name="fade">
    <template v-if="this.mapInitialized">
      <div data-v-6ae436b8="" class="map-preloading">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 30 30"  xml:space="preserve">
          <rect x="0" y="13" width="4" height="5" rx="2">
            <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>
            <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>
          </rect>
          <rect x="10" y="13" width="4" height="5" rx="2">
            <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate>
            <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate>
          </rect>
          <rect x="20" y="13" width="4" height="5" rx="2">
              <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>
            <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>
          </rect>
        </svg>
      </div>
    </template>
  </transition-group>
</div>
  <search-component />
  <div id="map" class="map">
  </div>
</template>

<script>

import { mapGetters, mapMutations } from "vuex"
import SearchComponent from "@/components/MapObjects/components/SearchComponent";
import $ from "jquery";

export default {
  name: 'map-component',

  components: {
    SearchComponent
  },

  computed: mapGetters(['markers', 'mapInitialized']),

  data () {
    return {
      settings: {
        apiKey: '744d33c1-034f-4dac-9ff2-bdfe1f52b51f',
        lang: 'ru_RU',
        coordorder: 'latlong',
        version: '2.1'
      },
      location: [],
      locationCircle: {},
      coords: [],
    }
  },


  methods: {
    run(){
      map = new ymaps.Map('map', {
          zoom: 10,
          controls: [],
          center: [55.831903, 37.411961]
        })

      this.markerInitialize();
      // this.getLocation();

      setTimeout(() => {
        this.SET_MAP_INIT(false);
        this.createControllers();
      }, 2000)

    },

    createControllers(){
      // ZoomController

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
                top: window.innerHeight / 2 - 110
              }
            }
        });

      map.controls.add(zoomControl);

      // LocationController

      var geolocationControl = new ymaps.control.GeolocationControl({
        options: {
          layout: ymaps.templateLayoutFactory.createClass(
              "<div class=\"location-button\"></div>")
          ,
          noPlacemark: true,
          position: {
            right: 15,
            top: window.innerHeight / 2 - 10
          }
        }
      });

      geolocationControl.events.add('click', () => {
        this.getLocation();
      });

      map.controls.add(geolocationControl);

    },

    getLocation(){
      ymaps.geolocation.get({provider: 'auto', mapStateAutoApply: true}
      ).then((res) => {
        this.location = res.geoObjects.position;
        this.coords = res.geoObjects.position;

        if(!this.mapInitialized) {
            // Creating user location icon

          res.geoObjects.options.set('iconImageHref', require('@/assets/images/icons/user.svg'));
          res.geoObjects.get(0).properties.set({
            balloonContentBody: 'Мое местоположение'
          });

          map.geoObjects.add(res.geoObjects);

            // Creating a circle.
          var myCircle = new ymaps.Circle([this.location, 120], {

              balloonContent: "Radius of the circle: 1km",
              hintContent: "Move me"
            }, {
              draggable: false,
              fillColor: "#26262614",
              strokeColor: "#99006600",
              strokeOpacity: 0,
              strokeWidth: 5
            });

            // Adding the circle to the map.
          map.geoObjects.add(myCircle);

            this.locationCircle = myCircle
          }
        else{
          myCircle.geometry.setCoordinates(this.location)
         }
      });
    },

    markerInitialize() {
      let objects = [], markers = this.markers;
      objectManager = new ymaps.ObjectManager({
        clusterize: true,
        gridSize: 32,
        clusterDisableClickZoom: false,
      });

      for (var i = 0, l = markers.length; i < l; i++) {
        objects.push({
          type: 'Feature',
          id: markers[i].id,
          geometry: {
            type: 'Point',
            coordinates: markers[i].geometry.coordinates
          },
          options: {
            iconLayout: 'default#image',
            iconImageHref: markers[i].pointType === "trash" ? require('@/assets/images/icons/trash.svg') : require('@/assets/images/icons/waste.svg'),
            iconImageSize: [30, 42],
            iconImageOffset: [-5, -38]
          }
        });
      }

      objectManager.add(objects);
      objectManager.events.add('click', (event) => {
        let marker = this.markers.find(obj => obj.id === event.get('objectId'));
        if(marker){
          this.SET_SELECTED_MARKER(marker)
          $("#detail").toggleClass('active');
        }
      });

      map.geoObjects.add(objectManager);
    },

    ...mapMutations(["SET_SELECTED_MARKER", "SET_MAP_INIT"]),

  },

  created() {
    ymaps.ready(this.run);
  }
}
</script>

<style scoped lang="scss">
</style>
