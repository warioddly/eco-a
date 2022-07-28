<template>
  <div id="applications">
      <header-component title="Заявки" class="header-nav"/>
      <div class="body">
        <div>
          <div class="ico icon-application-success application-search-ico"></div>
          <p class="no-applications text-title text-center pd-15">Заявка создана</p>
          <p class="no-applications-secondary text-secondary text-center pd-15">Тут рыбный текст по поводу того, что вы молодец, и с вами свяжутся для уточнения данных</p>
          <div class="mg-15">
            <router-link :to="{name: 'applicationsList'}"
                         class="btn create-application-btn">К листу
            </router-link>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

import HeaderComponent from "@/components/Navigation/HeaderComponent.vue";

export default {
  name: 'applications-success-component',
  components: {
    HeaderComponent
  },
}
</script>

<style scoped lang="scss">
</style>
