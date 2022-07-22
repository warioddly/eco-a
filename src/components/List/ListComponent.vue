<template>
  <div class="list">
    <div class="zoom">
         <div class="plus" id='zoom-in'></div>
         <div class="minus" id='zoom-out'></div>
    </div>

    <div class="search">
      <div class="icon-search"></div>
      <input type="text" class="search-input" id='search' placeholder="Найти по адресу" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'list-component',
}
</script>

<style scoped lang="scss">

</style>
