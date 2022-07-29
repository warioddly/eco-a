<template>
  <main class="content">
    <div id="applications-cancel-request">
      <div class="header">
        <router-link :to="{ name: 'applicationsShow', params: { id: this.$route.params.id }}">
          <div class="icon-back"></div>
        </router-link>
        <p class="header-title">№{{ this.$route.params.id }}</p>
        <div class="icon-user-profile"></div>
      </div>
      <div class="body mt-20">
        <div class="form-group">
          <label for="cancel-input">Укажите причину отмены</label>
          <textarea name="cancel" id="cancel-input"></textarea>
        </div>
      </div>
      <div class="btns mg-15">
        <router-link :to="{name: 'applicationsShow', params: { id: this.$route.params.id }}">
          <div class="btn-secondary-outline">Вернуться к заявке</div>
        </router-link>
        <div class="btn-danger-outline ml-16" @click="cancelApplication">Отменить заявку</div>
      </div>
    </div>
    <detail-component/>
  </main>
</template>

<script>

import DetailComponent from "@/components/Applications/DetailComponent";
import HeaderComponent from "@/components/Navigation/HeaderComponent.vue";
import router from "@/router";

export default {
  name: 'ApplicationsSuccessView',

  data() {
    return {
      id: this.$route.params.id,
      data: [],
    }
  },

  components: {
    DetailComponent,
    HeaderComponent
  },

  methods: {

    cancelApplication(){

      this.data = this.changeStatus(this.data, this.id, 'status-canceled');

      window.localStorage.setItem('applications', JSON.stringify(this.data));

      router.push({name: 'applicationsCancel'})
    },

    applicationsFilter(items, id) {
      return items.filter(item => {
        id = this.id.toString();
        item.id = item.id.toString();
        return item.id.includes(id)
      })
    },

    changeStatus(objArray, objId, status) {
      objArray.forEach(function(obj) {
        if (obj.id == objId){
          obj.status = status
          return objArray
        }
      });

      return objArray
    }
},

  created() {
    this.data = JSON.parse(window.localStorage.getItem('applications'));
  }
}
</script>

<style scoped lang="scss">
</style>
