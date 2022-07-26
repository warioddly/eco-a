import {createStore} from 'vuex'
import $ from "jquery";

export default createStore({
  state: {
    markers: [],
    mapInitialized: true,
    userGeoLocation: {},
    mapCenter: [],
    selectedMarker: {
      address: "Empty",
      routeRange: 0
    },
    filteredMarkers: {},
    toRoute: {},
    userRegion: {},
    filteredRegions: {},
  },

  getters: {
    mapInitialized(state){
      return state.mapInitialized;
    },

    filteredMarkers(state){
      return state.filteredMarkers;
    },

    filteredRegions(state){
      return state.filteredRegions;
    },

    markers(state){
      return state.markers;
    },

    selectedMarker(state){
      return state.selectedMarker;
    },

    geolocation(state){
      return state.userGeoLocation;
    },

    getSelectedRegion(state){
      return state.userRegion;
    }
  },

  mutations: {
    SET_MAP_INIT(state, payload){
      state.mapInitialized = payload
    },

    SET_GEOLOCATION(state, payload){
      state.userGeoLocation = payload;
      state.userGeoLocation = [55.875445, 37.549348];
    },

    SET_MARKERS(state, payload){
      state.markers = payload;
    },

    SET_MARKER_RANGE(state){

      assignRouteRanges(state.markers);

      function assignRouteRanges(markers){
        for (let i = 0; i < markers.length; i++) {
          getRouteRange(markers[i].geometry.coordinates, i)
        }
      }

      function getRouteRange(coords, index){
        let way, segments, sumSegments = 0;
        ymaps.route([state.userGeoLocation , coords])
            .then((route) => {

              way = route.getPaths().get(0);
              segments = way.getSegments();

              for (var j = 0; j < segments.length; j++) {
                sumSegments += parseInt(segments[j].getLength())
              }

              createNewArr(sumSegments, index);
            });
      }

      function createNewArr(item, index){
        Object.assign(state.markers[index], {
          routeRange: item
        });
      }

    },

    SET_SELECTED_MARKER(state, payload){
      state.selectedMarker = payload;
    },

    SET_SEARCH_MARKER(state, word) {
      let filtered = filteredList();
      function filteredList() {
        return state.markers.filter((marker) => marker.address.toLowerCase().includes(word));
      }

      state.filteredMarkers = filtered;
    },

    SET_USER_REGION(state, payload) {
      state.userRegion = payload;
    },

    SET_SEARCH_REGION(state, word, search=true) {
      if(search){
        let word = filteredList();
        function filteredList() {
          return state.userRegion.filter((city) => city.city.toLowerCase().includes(word));
        }
      }

      state.filteredRegions = word;
    },
  },

  actions: {
    async initMarkers(context){
      await $.ajax({
        url: '/db/data.json'
      }).done((data) => {
        context.commit('SET_MARKERS', data)
        context.commit('SET_SEARCH_MARKER', data)
      });
    },

    async initRegions(context){
      await $.ajax({
        url: '/db/regions.json'
      }).done((data) => {
        context.commit('SET_USER_REGION', data)
        context.commit('SET_SEARCH_REGION', data)
      });
    },

    async initGeolocation(context){
      await ymaps.geolocation.get({ provider: 'auto', mapStateAutoApply: true }).then((res) => {
        context.commit('SET_GEOLOCATION', res.geoObjects.position)
      });

      context.commit("SET_MARKER_RANGE", this.state.markers);
    },
  },

  modules: {
  },
})
