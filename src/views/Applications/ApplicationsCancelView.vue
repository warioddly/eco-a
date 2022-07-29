<template>
  <main class="content">
    <div id="applications">
      <header-component title=" " class="header-nav"/>
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

import DetailComponent from "@/components/Applications/Details/DetailComponent";
import NavigationComponent from "@/components/Navigation/NavigationComponent";
import HeaderComponent from "@/components/Navigation/HeaderComponent.vue";

export default {
  name: 'ApplicationsSuccessView',
  components: {
    NavigationComponent,
    DetailComponent,
    HeaderComponent
  }
}
</script>

<style scoped lang="scss">
</style>
