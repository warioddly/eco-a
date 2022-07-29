<template>
  <main class="content">
    <div id="applications">
      <header-component title="Заявки" class="header-nav"/>
      <div class="body">
        <div>
          <div class="ico icon-application-success application-search-ico"></div>
          <p class="no-applications text-title text-center pd-15">Заявка создана</p>
          <p class="no-applications-secondary text-secondary text-center pd-15">Тут рыбный текст по поводу того, что вы молодец, и с вами свяжутся для уточнения данных</p>
          <div class="mg-15">
            <router-link :to="{name: 'applicationsList'}" class="btn create-application-btn">К списку</router-link>
          </div>
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
  name: 'ApplicationsCancelView',
  components: {
    HeaderComponent,
    DetailComponent
  },
}
</script>

<style scoped lang="scss">
</style>
