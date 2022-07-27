<template>
  <div class="header">
    <router-link to="/">
      <div class="icon-back"></div>
    </router-link>
    <p class="header-title">{{ title }}</p>
    <div class="icon-user-profile"></div>
  </div>
</template>

<script>

export default {
  name: 'header-component',
  props: ['title'],
}
</script>

<style scoped lang="scss">
</style>
