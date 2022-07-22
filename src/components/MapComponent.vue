<template>
  <div class="map">
    <yandex-map
        ref="map"
        zoom="16"
        map-type="map"
        :coords="coords"
        :settings="settings"
        :controls="['zoomControl', 'searchControl', 'geolocationControl']"
        class="ymap"
    >

      <!--      Markers      -->
      <template v-for="item in markers">
        <ymap-marker
            :markerId="item.id"
            :coords="item.coords"
            :icon="item.icon"
        />
      </template>

      <!--      User Location      -->
      <ymap-marker
          :markerId="-1"
          :coords="coords"
          :icon="icons.user"
      />

      <ymap-marker
          marker-id="1"
          marker-type="Circle"
          :coords="coords"
          :circle-radius="120"
          hint-content="Hint content 1"
          :marker-fill="{ color: '#000000', opacity: 0.4 }"
          :marker-stroke="{ color: '#ff0000', width: 5 }"
          :balloon="{ header: 'header', body: 'body', footer: 'footer' }"
          :options="{ geodesic: true }"
          fillRule="nonZero"
      ></ymap-marker>

    </yandex-map>
  </div>
</template>

<script>

import { yandexMap, ymapMarker, loadYmap } from 'vue-yandex-maps'

export default {
  name: 'map-component',
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
      coords: [],
      icons: {
        trash: {
          trash: {
            layout: 'default#image', // 'default#imageWithContent' для использования с контентом
            imageHref: require('../assets/images/icons/trash.svg'), // адрес изображения или data:image/svg+xml;base64
            imageSize: [25, 25], // размер иконки в px
            imageOffset: [-22, -55], // смещение иконки в px,
            contentOffset: [-22, -55], // смещение контента в px,
          },
          toggled: {
            layout: 'default#image',
            imageHref: require('../assets/images/icons/toggled-trash.svg'),
            imageSize: [28, 28],
            imageOffset: [-22, -55],
            contentOffset: [-22, -55],
          },
        },
        garbage: {
          garbage: {
            layout: 'default#image', // 'default#imageWithContent' для использования с контентом
            imageHref: require('../assets/images/icons/garbage.svg'), // адрес изображения или data:image/svg+xml;base64
            imageSize: [25, 25], // размер иконки в px
            imageOffset: [-22, -55], // смещение иконки в px,
            contentOffset: [-22, -55], // смещение контента в px,
          },
          toggled: {
            layout: 'default#image',
            imageHref: require('../assets/images/icons/toggled-garbage.svg'),
            imageSize: [28, 28],
            imageOffset: [-22, -55],
            contentOffset: [-22, -55],
          },
        },
        user: {
          layout: 'default#image', // 'default#imageWithContent' для использования с контентом
          imageHref: require('../assets/images/icons/user.svg'), // адрес изображения или data:image/svg+xml;base64
          imageSize: [25, 25], // размер иконки в px
          imageOffset: [-15, -35], // смещение иконки в px,
          contentOffset: [-22, -55], // смещение контента в px,
        },
      },
      markers: [],
    }
  },

  async mounted() {
    this.coords = [54.82896654088406, 39.831893822753904];
    this.markers = [
      {
        id: 1,
        coords: [42.8575188, 74.6013217],
        icon: this.icons.trash.trash
      },
      {
        id: 2,
        coords: [42.8574288, 74.6012517],
        icon: this.icons.trash.toggled
      },
      {
        id: 3,
        coords: [42.8575388, 74.6022217],
        icon: this.icons.garbage.garbage
      },
      {
        id: 4,
        coords: [42.8575388, 74.5022217],
        icon: this.icons.garbage.garbage
      },
      {
        id: 5,
        coords: [42.6573388, 74.6012117],
        icon: this.icons.garbage.garbage
      }
    ];

    await loadYmap(this.settings);

    ymaps.geolocation.get().then((res) => {
      this.coords = res.geoObjects.position;
    });

  },
}
</script>

<style scoped lang="scss">
</style>
