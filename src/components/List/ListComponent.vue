<template>
  <div id="list">
    <search-component />
    <list-block-component :markerData="markerData" />
  </div>
</template>

<script>

import SearchComponent from "@/components/SearchComponent";
import ListBlockComponent from "@/components/List/ListBlockComponent";
import $ from "jquery";

export default {
  name: 'list-component',

  components: {
    SearchComponent,
    ListBlockComponent
  },

  data () {
    return {
      markerData: []
    }
  },

  methods: {
    async run(){
      $.ajax({
        url: '/data.json'
      }).done((data) => {
        this.markerData = data;
      });
    }
  },

  created() {
    ymaps.ready(this.run());
  }
}
</script>

<style scoped lang="scss">
</style>
