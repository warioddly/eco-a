<template>
  <div class="wrapper">
    <main class="content">
      <div id="hand-over-recyclables">
        <header-component title="Заявки" class="header-nav"/>
        <div class="body pd-15">
          <p class="header-text title">Сдать вторсырье на переработку</p>

          <form action="#" method="POST">

            <div class="off3-group mb-16">
              <div class="off3-input-group">
                <input id="lastname" type="text" class="off3-input" v-model="lastname" placeholder=" ">
                <label for="lastname" class="off3-label">Фамилия <span class="input-required-label">*</span></label>
              </div>
              <div class="icon-clear" @click="lastname = ''" v-if="lastname"></div>
            </div>

            <div class="off3-group mb-16">
              <div class="off3-input-group">
                <input id="username" type="text" class="off3-input" v-model="username" placeholder=" ">
                <label for="username" class="off3-label">Имя <span class="input-required-label">*</span></label>
              </div>
              <div class="icon-clear" v-if="username"  @click="username = ''"></div>
            </div>
            <div class="off3-group mb-16">
              <div class="off3-input-group">
                <input id="middlename" type="text" class="off3-input" v-model="middlename" placeholder=" ">
                <label for="middlename" class="off3-label">Отчество</label>
              </div>
              <div class="icon-clear" v-if="middlename"  @click="middlename = ''"></div>
            </div>
            <div class="off3-group mb-16">
              <div class="off3-input-group">
                <input id="address" type="text" class="off3-input" v-model="address" placeholder=" ">
                <label for="address" class="off3-label">Адрес <span class="input-required-label">*</span></label>
              </div>
              <div class="icon-clear" v-if="address"  @click="address = ''"></div>
              <div class="icon-address-marker ml-16"></div>
            </div>
            <div class="date">
              <div class="off3-group mb-16">
                <div class="off3-input-group" @click="DatePickerActivate()">
                  <input id="pickupDate" type="text" class="off3-input" placeholder=" " v-model="pickupDate" readonly>
                  <label for="pickupDate" class="off3-label">Дата вывоза <span class="input-required-label">*</span></label>
                </div>
                <div class="icon-clear" v-if="pickupDate"  @click="pickupDate = ''"></div>
                <div class="icon-calendar ml-16"></div>
              </div>
              <div class="date-picker" v-if="datePicker">
                <date-picker mode="date" v-model="pickupDate" model-value/>
              </div>
            </div>
            <div class="time">
              <div class="off3-group mb-16">
                <div class="off3-input-group"  @click="TimePickerActivate()">
                  <input id="pickupTime" type="text" class="off3-input" placeholder=" " v-model="pickupTime" readonly>
                  <label for="pickupTime" class="off3-label">Желаемое время <span class="input-required-label">*</span></label>
                </div>
                <div class="icon-clear" v-if="pickupTime" @click="pickupTime = ''"></div>
                <div class="icon-clock ml-16"></div>
              </div>
              <div class="date-picker" v-if="datePicker">
                <date-picker mode="time" v-model="pickupTime" model-value :isdisabled="false"/>
              </div>
            </div>
            <div class="off3-select mb-16">
              <p class="header-title text-start">Тип вторсырья <span class="input-required-label">*</span></p>
              <div class="off3-select-group">
                <input id="checkbox-2" class="checkbox-custom" name="checkbox-2" type="checkbox">
                <label for="checkbox-2" class="checkbox-custom-label">Бумага</label>
              </div>
              <div class="off3-select-group">
                <input id="checkbox-3" class="checkbox-custom" name="checkbox-2" type="checkbox">
                <label for="checkbox-3" class="checkbox-custom-label">Стекло</label>
              </div>
              <div class="off3-select-group">
                <input id="checkbox-4" class="checkbox-custom" name="checkbox-2" type="checkbox">
                <label for="checkbox-4" class="checkbox-custom-label">Пластик</label>
              </div>
              <div class="off3-select-group">
                <input id="checkbox-5" class="checkbox-custom" name="checkbox-2" type="checkbox">
                <label for="checkbox-5" class="checkbox-custom-label">Металл</label>
              </div>
              <div class="off3-select-group">
                <input id="checkbox-6" class="checkbox-custom" name="checkbox-2" type="checkbox">
                <label for="checkbox-6" class="checkbox-custom-label">Одежда, текстиль</label>
              </div>
            </div>
            <div class="off3-group mb-16">
              <div class="off3-input-group">
                <input id="capacity" type="text" class="off3-input" v-model="capacity" placeholder=" ">
                <label for="capacity" class="off3-label">Примерный вес/объем/кол-во <span class="input-required-label">*</span></label>
              </div>
              <div class="icon-clear" v-if="capacity"  @click="capacity = ''"></div>
            </div>
            <div class="off3-group mb-16">
              <div class="off3-input-group">
                <input id="phone" type="text" class="off3-input" v-model="phone" placeholder=" ">
                <label for="phone" class="off3-label">Контактный телефон <span class="input-required-label">*</span></label>
              </div>
              <div class="icon-clear" v-if="phone"  @click="phone = ''"></div>
            </div>
            <div class="off3-upload-file mb-24">
              <p class="header-title text-start mb-24">Добавить фото/видео <span class="input-required-label">*</span></p>
              <label for="upload-photo" class="upload-photo-label">
                <img src="@/assets/images/icons/camera-plus.svg" alt="">
              </label>
              <input type="file" name="photo" id="upload-photo" accept="image/*"/>
              <div class="off3-files">
              </div>
            </div>
            <div class="mb-24"><router-link to="/applications/list">
              <div class="btn">Отправить заявку</div>
            </router-link></div>

          </form>

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
import $ from "jquery"

export default {
  name: 'HandOverRecyclablesView',
  components: {
    NavigationComponent,
    DetailComponent,
    HeaderComponent,
  },
  data() {
    return {
      datePicker: false,
      pickupDate: null,
      pickupTime: null,
      lastname: "",
      username: '',
      middlename: '',
      address: '',
      capacity: '',
      phone: '',
    }
  },

  methods: {
    DatePickerActivate(){
      this.datePicker = this.datePicker === false ? true : false;
    },

    TimePickerActivate(){
      $('.date-picker .vc-time-picker').removeClass('vc-invalid');
    },

    formSubmit(){
      console.log(111)
    },

    resetInput(item) {
      item = "";
    },
  },

  created() {
    let day = new Date(Date.now());
    this.pickupDate =  day.toLocaleDateString()
    this.pickupTime =  day.toLocaleTimeString()
  }
}
</script>

<style scoped lang="scss">
</style>
