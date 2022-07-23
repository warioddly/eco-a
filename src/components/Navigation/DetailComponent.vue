<template>
  <div v-touch:swipe="onSwipeItem(item)" class="detail">
    <div class="line"></div>
    awdaw
    dawda
    wdawdawdawdawd
    awdaw
    dawd
    awdawdawd
  </div>
</template>

<script>

export default {
  name: 'detail-component',

  methods: {
    onSwipeItem(item) {
      return function (direction) {
        console.log("Swiped item in direction ", direction);
      };
    },
  }
}
</script>

<style scoped lang="scss">
</style>
