<template>
  <div id="hand-over-recyclables">
    <header-component title="Заявки"/>
    <div class="body pd-15">
      <p class="title">Сдать вторсырье на переработку</p>
      <VueInputUi v-model="username" size="lg"/>
    </div>
  </div>
</template>

<script>

import HeaderComponent from "@/components/Navigation/HeaderComponent.vue";

export default {
  name: 'hand-over-recyclables-component',
  components: {
    HeaderComponent,
  },

  data() {
    return {
      username: 'awdawdawd',
    }
  }
}
</script>

<style scoped lang="scss">
</style>
