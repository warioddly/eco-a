<template>
  <div class="map">
    <yandex-map
        ref="map"
        zoom="17"
        map-type="map"
        :coords="coords"
        :settings="settings"
        :controls="[]"
        class="ymap"
        @map-was-initialized="mapCreated"
    >

      <!--      Markers      -->
      <template v-for="(item, index) in markers">
        <ymap-marker
            :markerId="index"
            :coords="item.coords"
            :icon="item.icon"
            @onhover="getMarkerInformation"
        />
      </template>

      <!--      User Location      -->
      <ymap-marker
          :markerId="-1"
          :coords="location"
          :icon="icons.user"
      />

      <ymap-marker
          marker-id="1"
          marker-type="Circle"
          :coords="location"
          :circle-radius="50"
          hint-content="Hint content 1"
          :marker-fill="{ color: '#26262614', opacity: 1 }"
          :marker-stroke="{ color: 'rgba(255,0,0,0)', width: 5 }"
          :balloon="{ header: 'header', body: 'body', footer: 'footer' }"
          :options="{ geodesic: true }"
          fillRule="nonZero"
      ></ymap-marker>

    </yandex-map>
  </div>
</template>

<script>

import { yandexMap, ymapMarker, loadYmap } from 'vue-yandex-maps'
import $ from "jquery";

export default {
  name: 'map-component2',
  components: {
    yandexMap,
    ymapMarker
  },

  data () {
    return {
      settings: {
        apiKey: '744d33c1-034f-4dac-9ff2-bdfe1f52b51f',
        lang: 'ru_RU',
        coordorder: 'latlong',
        version: '2.1'
      },
      map: null,
      coords: [],
      location: [],
      icons: {
        trash: {
          trash: {
            layout: 'default#image', // 'default#imageWithContent' для использования с контентом
            imageHref: require('../../assets/images/icons/trash.svg'), // адрес изображения или data:image/svg+xml;base64
            imageSize: [25, 25], // размер иконки в px
            imageOffset: [-22, -55], // смещение иконки в px,
            contentOffset: [-22, -55], // смещение контента в px,
          },
          toggled: {
            layout: 'default#image',
            imageHref: require('../../assets/images/icons/toggled-trash.svg'),
            imageSize: [28, 28],
            imageOffset: [-22, -55],
            contentOffset: [-22, -55],
          },
        },
        waste: {
          waste: {
            layout: 'default#image', // 'default#imageWithContent' для использования с контентом
            imageHref: require('../../assets/images/icons/waste.svg'), // адрес изображения или data:image/svg+xml;base64
            imageSize: [25, 25], // размер иконки в px
            imageOffset: [-22, -55], // смещение иконки в px,
            contentOffset: [-22, -55], // смещение контента в px,
          },
          toggled: {
            layout: 'default#image',
            imageHref: require('../../assets/images/icons/toggled-waste.svg'),
            imageSize: [28, 28],
            imageOffset: [-22, -55],
            contentOffset: [-22, -55],
          },
        },
        user: {
          layout: 'default#image', // 'default#imageWithContent' для использования с контентом
          imageHref: require('../../assets/images/icons/user.svg'), // адрес изображения или data:image/svg+xml;base64
          imageSize: [25, 25], // размер иконки в px
          imageOffset: [-15, -35], // смещение иконки в px,
          contentOffset: [-22, -55], // смещение контента в px,
        },
      },
      markers: [],
    }
  },

  methods: {
    mapCreated: function ($map) {
      this.map = $map
      console.log('ready');

      // Location icon
      let geolocationControl = new ymaps.control.GeolocationControl({
        options: {
          layout: ymaps.templateLayoutFactory.createClass(
              "<div class=\"location-button\"></div>"
          ),
          noPlacemark: true,
          position: {
            top: window.innerHeight / 2 - 30,
            right: 15,
          }
        },
      });
      geolocationControl.events.add('click', () => {
        this.getLocation();
      });
      this.map.controls.add(geolocationControl);


      // Initialization map location
      this.getLocation();

      // setInterval(this.updateLocation, 5000);
    },

    getMarkerInformation(event) {
      const marker = event.get('target');
      this.setMarkerIcon(marker, this.icons.waste.waste['imageHref']);
    },

    setMarkerIcon(marker, icon) {
      marker.options.set('iconImageHref', icon);
    },

    updateLocation(){
      ymaps.geolocation.get().then((res) => {
        this.location = res.geoObjects.position;
      });
    },

    getLocation(){
      ymaps.geolocation.get().then((res) => {
        this.location = res.geoObjects.position;
        this.coords = res.geoObjects.position;
      });
    }
  },

  async mounted() {
    this.coords = [0, 0];
    this.markers = [
      {
        id: 1,
        coords: [
          42.875460907001774,
          74.60746765136719,
        ],
        icon: this.icons.trash.trash
      },
      {
        id: 2,
        coords: [
          42.873951296240556,
          74.61038589477539,
        ],
        icon: this.icons.trash.toggled
      },
      {
        id: 3,
        coords: [
          42.8752093077727,
          74.60283279418944,
        ],
        icon: this.icons.waste.waste
      },
      {
        id: 4,
        coords: [
          42.873070672909556,
          74.60403442382812,
        ],
        icon: this.icons.waste.waste
      },
      {
        id: 5,
        coords: [
          42.872567453935716,
          74.60746765136719,
          ],
        icon: this.icons.trash.trash
      },
      {
        id: 6,
        coords: [
          42.873070672909556,
          74.60403442382812,
        ],
        icon: this.icons.waste.waste
      },
      {
        id: 7,
        coords: [
          42.87168681085845,
          74.61296081542969,
        ],
        icon: this.icons.waste.waste
      },
      {
        id: 8,
        coords: [
          42.872567453935716,
          74.60746765136719,
        ],
        icon: this.icons.trash.trash
      },
      {
        id: 9,
        coords: [
          42.872567453935716,
          74.60746765136719,
        ],
        icon: this.icons.waste.waste
      },
      {
        id: 10,
        coords: [
          42.87168681085845,
          74.61296081542969,
        ],
        icon: this.icons.trash.trash
      },
      {
        id: 11,
        coords: [
          42.87143519624264,
          74.60832595825195,
        ],
        icon: this.icons.trash.trash
      }
      ,      {
        id: 5,
        coords: [
          42.877851048516725,
          74.61261749267578,
        ],
        icon: this.icons.trash.trash
      }
      ,      {
        id: 5,
        coords: [
          42.87634149622545,
          74.61502075195311,
        ],
        icon: this.icons.trash.trash
      }
      ,      {
        id: 5,
        coords: [
          42.87407709854777,
          74.6165657043457,
        ],
        icon: this.icons.trash.trash
      }
      ,      {
        id: 5,
        coords: [
          42.88099583051603,
          74.60660934448242,
        ],
        icon: this.icons.trash.trash
      }
      ,      {
        id: 5,
        coords: [
          42.88829110747604,
          74.6242904663086,
        ],
        icon: this.icons.waste.waste
      }
      ,      {
        id: 5,
        coords: [
          42.885901370384325,
          74.62703704833984,
        ],
        icon: this.icons.trash.trash
      }
      ,      {
        id: 5,
        coords: [
          42.88137319358506,
          74.61708068847656,
        ],
        icon: this.icons.trash.trash
      }
      ,      {
        id: 5,
        coords: [
          42.88049267616701,
          74.62102890014648,
        ],
        icon: this.icons.trash.trash
      }
      ,      {
        id: 5,
        coords: [
          42.878731603632815,
          74.62188720703125,
        ],
        icon: this.icons.trash.trash
      }
      ,      {
        id: 5,
        coords: [
          42.87948635515939,
          74.61759567260742,
        ],
        icon: this.icons.trash.trash
      }
      ,      {
        id: 5,
        coords: [
          42.87572823005869,
          74.61113691329956,
        ],
        icon: this.icons.trash.trash
      }
      ,      {
        id: 5,
        coords: [
          42.87591692798989,
          74.6105146408081,
        ],
        icon: this.icons.trash.trash
      }
      ,{
        id: 5,
        coords: [
          42.87948635515939,
          74.61759567260742,
        ],
        icon: this.icons.trash.trash
      }
      ,{
        id: 5,
        coords: [
          42.87572823005869,
          74.61113691329956,
          ],
        icon: this.icons.trash.trash
      }
      ,{
        id: 5,
        coords: [
          42.87591692798989,
          74.6105146408081,
        ],
        icon: this.icons.trash.trash
      }
      ,{
        id: 5,
        coords: [
          42.87292914298788,
          74.61150169372559,
        ],
        icon: this.icons.trash.trash
      },{
        id: 5,
        coords: [
          42.87665598933144,
          74.6117377281189,
        ],
        icon: this.icons.trash.trash
      },{
        id: 5,
        coords: [
          42.87465893088289,
          74.61175918579102,
        ],
        icon: this.icons.trash.trash
      }
      ,{
        id: 5,
        coords: [
          42.863257162826166,
          74.59819793701172,
        ],
        icon: this.icons.trash.trash
      },
      {
        id: 5,
        coords: [
          42.85750043579542,
          74.59592342376708,
        ],
        icon: this.icons.waste.waste
      },
      {
        id: 5,
        coords: [
          42.85709146755485,
          74.59969997406006,
        ],
        icon: this.icons.trash.trash
      },
      {
        id: 5,
        coords: [
          42.85655665884564,
          74.59661006927489,
        ],
        icon: this.icons.trash.trash
      },
      {
        id: 5,
        coords: [
          42.860017103808495,
          74.599871635437,
        ],
        icon: this.icons.waste.waste
      },
      {
        id: 5,
        coords: [
          42.85866440750113,
          74.59991455078125,
        ],
        icon: this.icons.trash.trash
      },
      {
        id: 5,
        coords: [
          42.858538573779924,
          74.60227489471436,
        ],
        icon: this.icons.trash.trash
      },
      {
        id: 5,
        coords: [
          42.858538573779924,
          74.6043348312378,
        ],
        icon: this.icons.trash.trash
      },
      {
        id: 5,
        coords: [
          42.85554994753361,
          74.60214614868164,
        ],
        icon: this.icons.waste.waste
      },
      {
        id: 5,
        coords: [
          42.853442092570326,
          74.6023178100586,
        ],
        icon: this.icons.trash.trash
      },
      {
        id: 5,
        coords: [
          42.863257162826166,
          74.59819793701172,
        ],
        icon: this.icons.waste.waste
      },
      {
        id: 5,
        coords: [
          42.863257162826166,
          74.59819793701172,
        ],
        icon: this.icons.trash.trash
      },
      {
        id: 5,
        coords: [
          42.863257162826166,
          74.59819793701172,
        ],
        icon: this.icons.trash.trash
      },
      {
        id: 5,
        coords: [
          42.863257162826166,
          74.59819793701172,
        ],
        icon: this.icons.waste.waste
      },
      {
        id: 5,
        coords: [
          42.863257162826166,
          74.59819793701172,
        ],
        icon: this.icons.waste.waste
      },
      {
        id: 5,
        coords: [
          42.863257162826166,
          74.59819793701172,
        ],
        icon: this.icons.waste.waste
      },
      {
        id: 5,
        coords: [
          42.85347355362106,
          74.59978580474854,
        ],
        icon: this.icons.trash.trash
      },
      {
        id: 5,
        coords: [
          42.85479490327942,
          74.59729671478271,
        ],
        icon: this.icons.trash.trash
      },
    ];
  },
}
</script>

<style scoped lang="scss">
</style>
