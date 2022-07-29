<template>
  <div class="header">
    <router-link :to="{ name: route}">
      <div class="icon-back"></div>
    </router-link>
    <p class="header-title">{{ title }}</p>
    <div class="icon-user-profile"></div>
  </div>
</template>

<script>

export default {
  name: 'header-component',
  props: ['title', 'route'],
}
</script>

<style scoped lang="scss">
</style>
