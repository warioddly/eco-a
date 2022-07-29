<template>
  <main class="content register">
    <div id="register">
      <header-component :route="'home'" title="Регистрация" class="header-nav"/>
      <div class="body pd-15 mt-20">
        <form action="#" method="POST">
          <div class="mb-16 off3-radio-group">
            <p class="text-title mb-16">Тип пользователя</p>
              <div class="mb-16">
                <input type="radio" @click="changeUserType" id="Individual" name="radio-group" checked>
                <label for="Individual">Физическое лицо</label>
              </div>
              <div>
                <input type="radio" id="Entity" @click="changeUserType" name="radio-group">
                <label for="Entity">Юридическое лицо, ИП</label>
              </div>
          </div>
          <div class="mb-16 off3-radio-group" v-if="userIsEntity">
            <p class="text-title mb-16">Планируемый объем/вес для передачи *</p>
            <div class="mb-16">
              <input type="radio" id="capacity3" name="radio-group2" checked>
              <label for="capacity3">Менее 50 кг</label>
            </div>
            <div class="mb-16">
              <input type="radio" id="capacity2" name="radio-group2">
              <label for="capacity2">от 50 до 100 кг</label>
            </div>
            <div>
              <input type="radio" id="capacity1" name="radio-group2">
              <label for="capacity1">Свыше 100 кг</label>
            </div>
          </div>
          <div class="mb-16" v-if="userIsEntity">
            <div :class="'off3-group '   + [v$.identifier.$error ? ' in-invalid' : ' ']">
              <div class="off3-input-group">
                <input id="identifier" type="text" class="off3-input" v-model="identifier" placeholder=" ">
                <label for="identifier" class="off3-label">ИНН <span class="input-required-label" v-if="!v$.identifier.$error || identifier === ''">*</span></label>
              </div>
              <div class="icon-clear" @click="identifier = ''" v-if="identifier"></div>
            </div>
            <div v-if="v$.identifier.$error" class="error-message">Введите ИНН *</div>
          </div>
          <div class="mb-16" v-if="userIsEntity">
            <div class="off3-group">
              <div class="off3-input-group">
                <input id="organization" type="text" class="off3-input" v-model="organization" placeholder=" ">
                <label for="organization" class="off3-label">Наименование организации</label>
              </div>
              <div class="icon-clear" @click="organization = ''" v-if="organization"></div>
            </div>
          </div>
          <div class="mb-16" v-if="userIsEntity">
            <div :class="'off3-group '   + [v$.region.$error ? ' in-invalid' : ' ']">
              <div class="off3-input-group">
                <input id="region" type="text" class="off3-input" v-model="region" placeholder=" ">
                <label for="region" class="off3-label">Наименование региона <span class="input-required-label" v-if="!v$.region.$error || region === ''">*</span></label>
              </div>
              <div class="icon-clear" @click="region = ''" v-if="region"></div>
            </div>
            <div v-if="v$.region.$error" class="error-message">Укажите свой регион</div>
          </div>
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
              <div class="icon-clear" v-if="username"  @click="username = ''"></div>
            </div>
            <div v-if="v$.username.$error" class="error-message">Введите свою имя *</div>
          </div>
          <div class="off3-group mb-16">
            <div class="off3-input-group">
              <input id="middlename" type="text" class="off3-input" v-model="middlename" placeholder=" ">
              <label for="middlename" class="off3-label">Отчество</label>
            </div>
            <div class="icon-clear" v-if="middlename"  @click="middlename = ''"></div>
          </div>
          <div class="mb-16">
            <div :class="'off3-group '   + [v$.phone.$error ? ' in-invalid' : ' ']">
              <div class="off3-input-group">
                <input id="phone" type="text" class="off3-input" v-model="phone" placeholder=" ">
                <label for="phone" class="off3-label">Контактный телефон <span class="input-required-label" v-if="!v$.phone.$error || phone === ''">*</span></label>
              </div>
              <div class="icon-clear" @click="phone = ''" v-if="phone"></div>
            </div>
            <div v-if="v$.phone.$error" class="error-message">Введите свой email почту</div>
          </div>
          <div class="">
            <div :class="'off3-group '   + [v$.email.$error ? ' in-invalid' : ' ']">
              <div class="off3-input-group">
                <input id="email" type="text" class="off3-input" v-model="email" placeholder=" ">
                <label for="email" class="off3-label">Email <span class="input-required-label" v-if="!v$.email.$error || email === ''">*</span></label>
              </div>
              <div class="icon-clear" @click="email = ''" v-if="email"></div>
            </div>
            <div v-if="v$.email.$error" class="error-message">Введите свой email почту</div>
          </div>
          <div class="off3-upload-file mb-16 mt-16" v-if="userIsEntity">
            <p class="header-title text-start mb-24">Добавить фото/видео <span class="input-required-label">*</span></p>
            <label for="upload-photo" class="upload-photo-label">
              <img src="@/assets/images/icons/camera-plus.svg" alt="">
            </label>
            <input type="file" name="photo" id="upload-photo" accept="image/*"/>
            <div class="off3-files">
            </div>
          </div>
          <div class="off3-select mb-16">
            <div class="off3-select-group">
              <input id="checkbox-2" class="checkbox-custom" name="checkbox-2" type="checkbox" value="Бумага">
              <label for="checkbox-2" class="checkbox-custom-label"><p>
                Подтверждаю свое согласие на обработку
                вносимых в форму моих персональных данных *
              </p></label>
            </div>
            <div v-if="v$.confirmConsentProcessing.$error" class="error-message">Выберите хотя бы один тип сырья</div>
          </div>
          <div class="mb-16">
            <div class="btn" @click="formSubmit">Зарегистрироваться</div>
          </div>
          <p class="text-mini mb-24">Если у вас не получается зарегистрироваться, <span class="color-purple">обратитесь в техподдержку</span></p>
        </form>
      </div>
    </div>
    <detail-component/>
  </main>
</template>

<script>

import DetailComponent from "@/components/Auth/DetailComponent";
import HeaderComponent from "@/components/Navigation/HeaderComponent";
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import router from "@/router";

export default {
  name: 'HandOverRecyclablesView',
  components: {
    DetailComponent,
    HeaderComponent,
  },

  data() {
    return {
      userIsEntity: false,
      lastname: "",
      username: '',
      middlename: '',
      address: '',
      email: '',
      phone: '',
      identifier: '',
      organization: '',
      region: '',
      confirmConsentProcessing: false,
    }
  },

  setup: () => ({ v$: useVuelidate() }),

  validations () {
    return {
      lastname: { required },
      username: { required },
      phone: { required },
      email: { required, email },
      identifier: { required },
      region: { required },
      confirmConsentProcessing: { required },
    }
  },

  methods: {

    async formSubmit(){
      const result = await this.v$.$validate()
      if (!result) {
        return false
      }

      await this.saveToDB()
      await router.push("/applications/success")
    },

    saveToDB(){
      //
      // let stringifyJson = window.localStorage.getItem('applications');
      // let dataArr = [];
      //
      // if(stringifyJson !== '' || stringifyJson !== "{}"){
      //   dataArr = JSON.parse(window.localStorage.getItem('applications')) || [];
      // }
      //
      // dataArr.push({
      //   id: Math. floor(Math.random() * 9999999),
      //   username: this.username || '',
      //   middlename: this.middlename || '',
      //   address: this.address || '',
      //   pickupDate: this.pickupDate.toLocaleDateString() || '',
      //   pickupTime: this.pickupTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) || '',
      //   types: this.types || [],
      //   capacity: this.capacity || '',
      //   phone: this.phone || '',
      //   status: 'status-expectation',
      //   images: [
      //     {
      //       id: 1,
      //       path: "https://wallpapercave.com/wp/wp11329095.jpg"
      //     },
      //     {
      //       id: 2,
      //       path: "https://wallpapercave.com/wp/wp11329095.jpg"
      //     },
      //     {
      //       id: 2,
      //       path: "https://wallpapercave.com/wp/wp11329095.jpg"
      //     }
      //   ]
      // });
      //
      // window.localStorage.setItem('applications', JSON.stringify(dataArr));
    },

    changeUserType(){
      this.userIsEntity = this.userIsEntity === false;
    }
  },
}
</script>

<style scoped lang="scss">
</style>
