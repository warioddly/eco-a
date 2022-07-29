<template>
  <transition name="slide-fade">

    <main class="content">
    <div id="applications-list">
      <header-component route="home" title="Заявки" class="header-nav" />
      <div class="body">
        <div class="list-items" v-for="item in data">
          <router-link :to="{name: 'applicationsShow', params: { id: item.id }}">
            <div class="mb-16">
              <div class="list">
                <img src="@/assets/images/application-images/image1.png" alt="..." class="list-img">
                <div class="list-info">
                  <div class="list-header">
                    <p class="item-number">№{{ item.id }}</p>
                    <p :class="'item-status ' + item.status">Ожидание</p>
                  </div>
                  <div class="list-body">
                    <p class="item-address mb-10">{{ item.address }}</p>
                    <div class="info">
                      <div>
                        <p class="item-date mb-10">Дата и время вывоза: </p>
                        <p class="item-pick-up">Кто заберет: </p>
                      </div>
                      <div>
                        <p class="date mb-10">{{ item.pickupDate }} {{ item.pickupTime }}</p>
                        <p class="user">{{ item.lastname }} {{ item.username }} {{ item.middlename }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <router-link :to="{name: 'handOverRecyclables'}" class="float-btn">
          <div class="circle-btn icon-add-btn"></div>
        </router-link>
      </div>
    </div>
    <detail-component/>
  </main>

  </transition>

</template>

<script>

import DetailComponent from "@/components/Applications/Details/DetailComponent";
import NavigationComponent from "@/components/Navigation/NavigationComponent";
import HeaderComponent from "@/components/Navigation/HeaderComponent.vue";

export default {
  name: 'ApplicationsListView',
  components: {
    NavigationComponent,
    DetailComponent,
    HeaderComponent
  },

  data() {
    return {
      data: [],
    }
  },

  created() {
    this.data = JSON.parse(window.localStorage.getItem('applications'));
    if(this.data != null){
      this.data = this.data.reverse()
    }
  }
}
</script>

<style scoped lang="scss">
</style>
