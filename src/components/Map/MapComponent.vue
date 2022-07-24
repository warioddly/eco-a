<template>
    <div id="map" class="map">
      <search-component />
      <template v-if="mapInitialized">
        <div data-v-6ae436b8="" class="map-preloading">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 30 30"  xml:space="preserve">
            <rect x="0" y="13" width="4" height="5">
              <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>
              <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>
            </rect>
            <rect x="10" y="13" width="4" height="5">
              <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate>
              <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate>
            </rect>
            <rect x="20" y="13" width="4" height="5">
              <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>
              <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>
            </rect>
          </svg>
        </div>
      </template>
    </div>
</template>

<script>

import SearchComponent from "@/components/SearchComponent";
import $ from "jquery";
var map = {};

export default {
  name: 'map-component',

  components: {
    SearchComponent
  },

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
      mapInitialized: true,
    }
  },

  methods: {
    run(){
      ymaps.geolocation.get().then( (res) => {
        let mapContainer = $('#map'),
        bounds = res.geoObjects.get(0).properties.get('boundedBy'),
        mapState = ymaps.util.bounds.getCenterAndZoom(
            bounds,
            [mapContainer.width(), mapContainer.height()]
        );
        mapState['controls'] = [];
        mapState['zoom'] = 16;

        this.createMap(mapState);
      }, (e) => {
        this.createMap({
          zoom: 4,
          controls: [],
        });
      });
    },

    createMap(state) {
      this.map = new ymaps.Map('map', state);
      this.markerIntitialize();
      this.getLocation();

      setTimeout(() => {
        this.mapInitialized = false;
        this.createControllers();
      }, 1500)
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

      this.map.controls.add(zoomControl);

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
      this.map.controls.add(geolocationControl);

    },

    getLocation(){
      ymaps.geolocation.get({provider: 'auto', mapStateAutoApply: true}
      ).then((res) => {
        this.location = res.geoObjects.position;
        this.coords = res.geoObjects.position;

        if(this.mapInitialized) {
            // Creating user location icon

          res.geoObjects.options.set('iconImageHref', require('@/assets/images/icons/user.svg'));
          res.geoObjects.get(0).properties.set({
            balloonContentBody: 'Мое местоположение'
          });


          this.map.geoObjects.add(res.geoObjects);

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
            this.map.geoObjects.add(myCircle);

            this.locationCircle = myCircle
          }
        else{
          myCircle.geometry.setCoordinates(this.location)
         }
      });
    },

    async markerIntitialize() {
      $.ajax({
        url: '/data.json'
      }).done((data) => {

        var trashCollection = new ymaps.GeoObjectCollection({
          hintContent: 'A custom placemark icon',
          balloonContent: 'This is a pretty placemark'
        }, {
          iconLayout: 'default#image',
          iconImageHref: require('@/assets/images/icons/trash.svg'),
          iconImageSize: [30, 42],
          iconImageOffset: [-5, -38]
        });

        for (let i = 0; i < data.length; i++) {
          trashCollection.add(new ymaps.Placemark(data[i].coords));

        }

        this.map.geoObjects.add(trashCollection);

        trashCollection.events.add('click', () => console.log(111));

      });
    }
  },

  created() {
    ymaps.ready(this.run);
  }
}
</script>

<style scoped lang="scss">
</style>
