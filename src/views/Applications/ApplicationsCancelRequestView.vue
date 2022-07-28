<template>
  <div class="wrapper">
    <main class="content">
      <div id="applications-cancel-request">
        <header-component title="№325125" class="header-nav" />
        <div class="body">
          <div class="form-group">
            <label for="cancel-input">Укажите причину отмены</label>
            <textarea name="cancel" id="cancel-input" rows="20"></textarea>
          </div>
        </div>
        <div class="btns">
          <div class="get-qr-code mb-16" @click="generateQrCode">Показать QR-код</div>
          <div class="btn-danger-outline">Отменить заявку</div>
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
