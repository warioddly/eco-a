<template>
  <main class="content">
    <div id="hand-over-recyclables">
      <header-component :route="'applications'" title="Заявки" class="header-nav"/>
      <div class="body pd-15">
        <p class="header-text title">Сдать вторсырье на переработку</p>

        <form action="#" method="POST">


          <div class="mb-16">
            <div :class="'off3-group '   + [v$.lastname.$error ? ' in-invalid' : ' ']">
              <div class="off3-input-group">
                <input id="lastname" type="text" class="off3-input" v-model="lastname" placeholder=" ">
                <label for="lastname" class="off3-label">Фамилия <span class="input-required-label" v-if="!v$.lastname.$error || lastname === ''">*</span></label>
              </div>
              <div class="icon-clear" @click="lastname = ''" v-if="lastname"></div>
            </div>
            <div v-if="v$.lastname.$error" class="error-message">Введите свою фамилию *</div>
          </div>
          <div class="mb-16">
            <div :class="'off3-group '   + [v$.username.$error ? ' in-invalid' : ' ']">
              <div class="off3-input-group">
                <input id="username" type="text" class="off3-input" v-model="username" placeholder=" ">
                <label for="username" class="off3-label">Имя <span class="input-required-label" v-if="!v$.username.$error || username === ''">*</span></label>
              </div>
              <div class="icon-clear" @click="username = ''" v-if="username"></div>
            </div>
            <div v-if="v$.username.$error" class="error-message">Введите своe имя *</div>
          </div>

          <div class="off3-group mb-16">
            <div class="off3-input-group">
              <input id="middlename" type="text" class="off3-input" v-model="middlename" placeholder=" ">
              <label for="middlename" class="off3-label">Отчество</label>
            </div>
            <div class="icon-clear" v-if="middlename"  @click="middlename = ''"></div>
          </div>

          <div class="mb-16">
            <div :class="'off3-group '   + [v$.address.$error ? ' in-invalid' : ' ']">
              <div class="off3-input-group">
                <input id="address" type="text" class="off3-input" v-model="address" placeholder=" ">
                <label for="address" class="off3-label">Адрес <span class="input-required-label" v-if="!v$.address.$error || address === ''">*</span></label>
              </div>
              <div class="icon-clear" @click="address = ''" v-if="address"></div>
            </div>
            <div v-if="v$.address.$error" class="error-message">Адрес *</div>
          </div>

          <div class="mb-16">
            <div class="date">
              <div class="off3-group mb-16" @click="DatePickerActivate()">
                <div class="off3-input-group">
                  <input id="pickupDate" type="text" class="off3-input" placeholder=" " :value="pickupDate.toLocaleDateString()" readonly>
                  <label for="pickupDate" class="off3-label">Дата вывоза</label>
                </div>
<!--                <div class="icon-clear" v-if="pickupDate"  @click="pickupDate = ''"></div>-->
                <div class="icon-calendar ml-16"></div>
              </div>
              <div class="date-picker" v-if="datePicker">
                <date-picker mode="date" v-model="pickupDate" model-value/>
              </div>
            </div>
          </div>
          <div class="mb-16">
            <div class="time">
              <div class="off3-group mb-16" @click="TimePickerActivate()">
                <div class="off3-input-group">
                  <input id="pickupTime" type="text" class="off3-input" placeholder=" " :value="pickupTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})" readonly>
                  <label for="pickupTime" class="off3-label">Желаемое время</label>
                </div>
<!--                <div class="icon-clear" v-if="pickupTime" @click="pickupTime = ''"></div>-->
                <div class="icon-clock ml-16"></div>
              </div>
              <div :class="'time-picker ' + timePicker">
                <date-picker mode="time" is24hr v-model="pickupTime" model-value/>
              </div>
            </div>
          </div>
          <div class="off3-select mb-16">
            <p class="header-title text-start">Тип вторсырья <span class="input-required-label">*</span></p>
            <div v-if="v$.types.$error" class="error-message">Выберите хотя бы один тип сырья</div>
            <div class="off3-select-group">
              <input id="checkbox-2" class="checkbox-custom" name="checkbox-2" type="checkbox" value="Бумага" v-model="types">
              <label for="checkbox-2" class="checkbox-custom-label">Бумага</label>
            </div>
            <div class="off3-select-group">
              <input id="checkbox-3" class="checkbox-custom" name="checkbox-2" type="checkbox" value="Стекло" v-model="types">
              <label for="checkbox-3" class="checkbox-custom-label">Стекло</label>
            </div>
            <div class="off3-select-group">
              <input id="checkbox-4" class="checkbox-custom" name="checkbox-2" type="checkbox" value="Пластик" v-model="types">
              <label for="checkbox-4" class="checkbox-custom-label">Пластик</label>
            </div>
            <div class="off3-select-group">
              <input id="checkbox-5" class="checkbox-custom" name="checkbox-2" type="checkbox" value="Металл" v-model="types">
              <label for="checkbox-5" class="checkbox-custom-label">Металл</label>
            </div>
            <div class="off3-select-group">
              <input id="checkbox-6" class="checkbox-custom" name="checkbox-2" type="checkbox" value="Одежда, текстиль" v-model="types">
              <label for="checkbox-6" class="checkbox-custom-label">Одежда, текстиль</label>
            </div>
          </div>

          <div class="mb-16">
            <div :class="'off3-group '   + [v$.capacity.$error ? ' in-invalid' : ' ']">
              <div class="off3-input-group">
                <input id="capacity" type="text" class="off3-input" v-model="capacity" placeholder=" ">
                <label for="capacity" class="off3-label">Примерный вес/объем/кол-во <span class="input-required-label" v-if="!v$.capacity.$error || capacity === ''">*</span></label>
              </div>
              <div class="icon-clear" @click="capacity = ''" v-if="capacity"></div>
            </div>
            <div v-if="v$.capacity.$error" class="error-message">Поле не должен быть пустым</div>
          </div>

          <div class="mb-16">
            <div :class="'off3-group '   + [v$.phone.$error ? ' in-invalid' : ' ']">
              <div class="off3-input-group">
                <input id="phone" type="text" class="off3-input" v-model="phone" placeholder=" ">
                <label for="phone" class="off3-label">Контактный телефон <span class="input-required-label" v-if="!v$.phone.$error || phone === ''">*</span></label>
              </div>
              <div class="icon-clear" @click="phone = ''" v-if="phone"></div>
            </div>
            <div v-if="v$.phone.$error" class="error-message">Введите контактный номер</div>
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
          <div class="mb-24">
            <!--              <router-link to="/applications/list">-->
            <div class="btn" @click="formSubmit">Отправить заявку</div>
            <!--              </router-link-->
          </div>

        </form>

      </div>
    </div>
  </main>
</template>

<script>

import $ from "jquery"
import DetailComponent from "@/components/Applications/DetailComponent";
import HeaderComponent from "@/components/Navigation/HeaderComponent.vue";
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import router from "@/router";

export default {
  name: 'HandOverRecyclablesView',
  components: {
    DetailComponent,
    HeaderComponent,
  },

  data() {
    return {
      datePicker: false,
      timePicker: 'd-none',
      pickupDate: null,
      pickupTime: null,
      lastname: "",
      username: '',
      middlename: '',
      types: [],
      address: '',
      capacity: '',
      phone: '',
    }
  },

  setup: () => ({ v$: useVuelidate() }),

  validations () {
    return {
      lastname: { required },
      username: { required },
      address: { required },
      capacity: { required },
      phone: { required },
      types: { required },
    }
  },

  methods: {
    DatePickerActivate(){
      if(this.timePicker === 'd-block'){
        this.timePicker = 'd-none'
      }
      this.datePicker = this.datePicker === false ? true : false;
    },

    TimePickerActivate(){
      this.timePicker = this.timePicker === 'd-none' ? 'd-block' : 'd-none';
      if(this.datePicker){
        this.datePicker= false
      }
      $('.time-picker .vc-time-picker').removeClass('vc-invalid');
    },

    async formSubmit(){
        const result = await this.v$.$validate()
        if (!result) {
          return false
        }

        await this.saveToDB()
        await router.push("/applications/success")
    },

    saveToDB(){

      let stringifyJson = window.localStorage.getItem('applications');
      let dataArr = [];

      if(stringifyJson !== '' || stringifyJson !== "{}"){
         dataArr = JSON.parse(window.localStorage.getItem('applications')) || [];
      }

      dataArr.push({
          id: Math. floor(Math.random() * 9999999),
          username: this.username || '',
          middlename: this.middlename || '',
          address: this.address || '',
          pickupDate: this.pickupDate.toLocaleDateString() || '',
          pickupTime: this.pickupTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) || '',
          types: this.types || [],
          capacity: this.capacity || '',
          phone: this.phone || '',
          status: 'status-expectation',
          images: [
            {
              id: 1,
              path: "https://wallpapercave.com/wp/wp11329095.jpg"
            },
            {
              id: 2,
              path: "https://wallpapercave.com/wp/wp11329095.jpg"
            },
            {
              id: 2,
              path: "https://wallpapercave.com/wp/wp11329095.jpg"
            }
          ]
        });

      window.localStorage.setItem('applications', JSON.stringify(dataArr));
    },

    resetInput(item) {
      item = "";
    },
  },

  created() {
    let day = new Date(Date.now());
    this.pickupDate =  day
    this.pickupTime =  day
  },
}
</script>

<style scoped lang="scss">
</style>
