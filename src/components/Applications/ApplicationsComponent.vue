<template>
  <div id="applications">
      <header-component title="Заявки" class="header-nav"/>
      <div class="body">
        <div>
          <div class="ico icon-application-search application-search-ico"></div>
          <p class="no-applications text-title text-center pd-15">Нет заявок</p>
          <p class="no-applications-secondary text-secondary text-center pd-15">У вас еще нет ни одной заявки на вывоз мусора</p>
          <div class="mg-15">
            <router-link :to="{name: 'handOverRecyclables'}" class="btn create-application-btn">
              Создать заявку
            </router-link>
          </div>
        </div>
        <router-link :to="{name: 'handOverRecyclables'}" class="float-btn">
            <div class="circle-btn icon-add-btn"></div>
          </router-link>
      </div>
  </div>
</template>

<script>

import HeaderComponent from "@/components/Navigation/HeaderComponent.vue";

export default {
  name: 'applications-component',
  components: {
    HeaderComponent
  },
}
</script>

<style scoped lang="scss">
</style>
