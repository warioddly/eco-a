<template>
  <main class="content" >
    <div id="profile">
      <header-component :route="'home'" title="Мой профиль" class="header-nav"/>
      <div class="body"></div>
    </div>
  </main>
</template>

<script>

import HeaderComponent from "@/components/Navigation/HeaderComponent";

export default {
  name: 'ProfileView',
  components: {
    HeaderComponent,
  },
}
</script>

<style scoped lang="scss">
</style>
