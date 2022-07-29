<template>
  <main class="content" >
    <div id="applications" v-if="data == null">
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
    <div id="applications-list" v-else>
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
                    <p class="item-status status-expectation" v-if="item.status === 'status-expectation'">Ожидание</p>
                    <p class="item-status status-canceled" v-if="item.status === 'status-canceled'">Отменена</p>
                    <p class="item-status status-success" v-if="item.status === 'status-success'">Исполнена</p>
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
  </main>
</template>

<script>

import DetailComponent from "@/components/Applications/DetailComponent";
import HeaderComponent from "@/components/Navigation/HeaderComponent";

export default {
  name: 'ApplicationsView',
  components: {
    DetailComponent,
    HeaderComponent,
  },

  data() {
    return {
      data: null
    }
  },

  mounted() {
    this.data = JSON.parse(window.localStorage.getItem('applications'));
    if(this.data != null){
      this.data = this.data.reverse()
    }
  }
}
</script>

<style scoped lang="scss">
</style>
