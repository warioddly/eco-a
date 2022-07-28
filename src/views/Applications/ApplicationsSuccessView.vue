<template>
  <div class="wrapper">
    <main class="content">
      <div id="applications">
        <header-component title="Заявки" class="header-nav"/>
        <div class="body">
          <div>
            <div class="ico icon-application-success application-search-ico"></div>
            <p class="no-applications text-title text-center pd-15">Заявка создана</p>
            <p class="no-applications-secondary text-secondary text-center pd-15">Тут рыбный текст по поводу того, что вы молодец, и с вами свяжутся для уточнения данных</p>
          </div>
          <router-link :to="{name: 'handOverRecyclables'}" class="float-btn">
            <div class="circle-btn icon-add-btn"></div>
          </router-link>
        </div>
      </div>
      <detail-component/>
    </main>
    <nav>
      <navigation-component/>
    </nav>
  </div>
</template>

<script>

import DetailComponent from "@/components/Applications/Details/DetailComponent";
import NavigationComponent from "@/components/Navigation/NavigationComponent";
import HeaderComponent from "@/components/Navigation/HeaderComponent.vue";
import router from "@/router";

export default {
  name: 'ApplicationsCancelView',
  components: {
    HeaderComponent,
    NavigationComponent,
    DetailComponent
  },


  created() {

    setTimeout(() => router.push("/applications/list"), 5000)

  }
}
</script>

<style scoped lang="scss">
</style>
