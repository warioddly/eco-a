<template>
  <main class="content">
    <div id="applications">
      <header-component :route="'applications'" title=" " class="header-nav"/>
      <div class="body">
        <div>
          <div class="ico icon-application-success application-search-ico"></div>
          <p class="no-applications text-title text-center pd-15">Ваша заявка отменена</p>
        </div>
      </div>
    </div>
    <detail-component/>
  </main>
</template>

<script>

import DetailComponent from "@/components/Applications/DetailComponent";
import HeaderComponent from "@/components/Navigation/HeaderComponent.vue";

export default {
  name: 'ApplicationsSuccessView',
  components: {
    DetailComponent,
    HeaderComponent
  }
}
</script>

<style scoped lang="scss">
</style>
