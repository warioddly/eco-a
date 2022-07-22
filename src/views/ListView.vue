<template>
  <div class="wrapper">
    <list-or-map-component />
    it's list view
  </div>
</template>

<script>

import ListOrMapComponent from "@/components/ListOrMapComponent";

export default {
  name: 'ListView',
  components: {
    ListOrMapComponent
  }
}
</script>
