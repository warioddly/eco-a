<template>
  <div class="wrapper">
    <main class="content">
      <div id="applications-list">
        <header-component title="Заявки" class="header-nav" />
        <div class="body">
          <div class="list-items">
            <router-link :to="{name: 'applicationsShow'}">
              <div class="mb-16">
                <div class="list">
                  <img src="@/assets/images/application-images/image1.png" alt="..." class="list-img">
                  <div class="list-info">
                    <div class="list-header">
                      <p class="item-number">№325125</p>
                      <p class="item-status status-expectation">Ожидание</p>
                    </div>
                    <div class="list-body">
                      <p class="item-address mb-10">Московская область, г.Подольск, ул.Кузнецова 164</p>
                      <div class="info">
                        <div>
                          <p class="item-date mb-10">Дата и время вывоза: </p>
                          <p class="item-pick-up">Кто заберет: </p>
                        </div>
                        <div>
                          <p class="date mb-10">27.07.2022 18:30</p>
                          <p class="user">Михаил С.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
            <div class="mb-16">
              <div class="list">
                <img src="@/assets/images/application-images/image1.png" alt="..." class="list-img">
                <div class="list-info">
                  <div class="list-header">
                    <p class="item-number">№325125</p>
                    <p class="item-status status-canceled">Отменена</p>
                  </div>
                  <div class="list-body">
                    <p class="item-address mb-10">Московская область, г.Подольск, ул.Кузнецова 164</p>
                    <div class="info">
                      <div>
                        <p class="item-date mb-10">Дата и время вывоза: </p>
                        <p class="item-pick-up">Кто заберет: </p>
                      </div>
                      <div>
                        <p class="date mb-10">27.07.2022 18:30</p>
                        <p class="user">Михаил С.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-16">
              <div class="list">
                <img src="@/assets/images/application-images/image1.png" alt="..." class="list-img">
                <div class="list-info">
                  <div class="list-header">
                    <p class="item-number">№325125</p>
                    <p class="item-status status-expectation">Ожидание</p>
                  </div>
                  <div class="list-body">
                    <p class="item-address mb-10">Московская область, г.Подольск, ул.Кузнецова 164</p>
                    <div class="info">
                      <div>
                        <p class="item-date mb-10">Дата и время вывоза: </p>
                        <p class="item-pick-up">Кто заберет: </p>
                      </div>
                      <div>
                        <p class="date mb-10">27.07.2022 18:30</p>
                        <p class="user">Михаил С.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-16">
              <div class="list">
                <img src="@/assets/images/application-images/image1.png" alt="..." class="list-img">
                <div class="list-info">
                  <div class="list-header">
                    <p class="item-number">№325125</p>
                    <p class="item-status status-expectation">Ожидание</p>
                  </div>
                  <div class="list-body">
                    <p class="item-address mb-10">Московская область, г.Подольск, ул.Кузнецова 164</p>
                    <div class="info">
                      <div>
                        <p class="item-date mb-10">Дата и время вывоза: </p>
                        <p class="item-pick-up">Кто заберет: </p>
                      </div>
                      <div>
                        <p class="date mb-10">27.07.2022 18:30</p>
                        <p class="user">Михаил С.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-16">
              <div class="list">
                <img src="@/assets/images/application-images/image1.png" alt="..." class="list-img">
                <div class="list-info">
                  <div class="list-header">
                    <p class="item-number">№325125</p>
                    <p class="item-status status-success">Исполнена</p>
                  </div>
                  <div class="list-body">
                    <p class="item-address mb-10">Московская область, г.Подольск, ул.Кузнецова 164</p>
                    <div class="info">
                      <div>
                        <p class="item-date mb-10">Дата и время вывоза: </p>
                        <p class="item-pick-up">Кто заберет: </p>
                      </div>
                      <div>
                        <p class="date mb-10">27.07.2022 18:30</p>
                        <p class="user">Михаил С.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-16">
              <div class="list">
                <img src="@/assets/images/application-images/image1.png" alt="..." class="list-img">
                <div class="list-info">
                  <div class="list-header">
                    <p class="item-number">№325125</p>
                    <p class="item-status status-canceled">Отменена</p>
                  </div>
                  <div class="list-body">
                    <p class="item-address mb-10">Московская область, г.Подольск, ул.Кузнецова 164</p>
                    <div class="info">
                      <div>
                        <p class="item-date mb-10">Дата и время вывоза: </p>
                        <p class="item-pick-up">Кто заберет: </p>
                      </div>
                      <div>
                        <p class="date mb-10">27.07.2022 18:30</p>
                        <p class="user">Михаил С.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-16">
              <div class="list">
                <img src="@/assets/images/application-images/image1.png" alt="..." class="list-img">
                <div class="list-info">
                  <div class="list-header">
                    <p class="item-number">№325125</p>
                    <p class="item-status status-expectation">Ожидание</p>
                  </div>
                  <div class="list-body">
                    <p class="item-address mb-10">Московская область, г.Подольск, ул.Кузнецова 164</p>
                    <div class="info">
                      <div>
                        <p class="item-date mb-10">Дата и время вывоза: </p>
                        <p class="item-pick-up">Кто заберет: </p>
                      </div>
                      <div>
                        <p class="date mb-10">27.07.2022 18:30</p>
                        <p class="user">Михаил С.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-16">
              <div class="list">
                <img src="@/assets/images/application-images/image1.png" alt="..." class="list-img">
                <div class="list-info">
                  <div class="list-header">
                    <p class="item-number">№325125</p>
                    <p class="item-status status-success">Исполнена</p>
                  </div>
                  <div class="list-body">
                    <p class="item-address mb-10">Московская область, г.Подольск, ул.Кузнецова 164</p>
                    <div class="info">
                      <div>
                        <p class="item-date mb-10">Дата и время вывоза: </p>
                        <p class="item-pick-up">Кто заберет: </p>
                      </div>
                      <div>
                        <p class="date mb-10">27.07.2022 18:30</p>
                        <p class="user">Михаил С.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-16">
              <div class="list">
                <img src="@/assets/images/application-images/image1.png" alt="..." class="list-img">
                <div class="list-info">
                  <div class="list-header">
                    <p class="item-number">№325125</p>
                    <p class="item-status status-expectation">Ожидание</p>
                  </div>
                  <div class="list-body">
                    <p class="item-address mb-10">Московская область, г.Подольск, ул.Кузнецова 164</p>
                    <div class="info">
                      <div>
                        <p class="item-date mb-10">Дата и время вывоза: </p>
                        <p class="item-pick-up">Кто заберет: </p>
                      </div>
                      <div>
                        <p class="date mb-10">27.07.2022 18:30</p>
                        <p class="user">Михаил С.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-16">
              <div class="list">
                <img src="@/assets/images/application-images/image1.png" alt="..." class="list-img">
                <div class="list-info">
                  <div class="list-header">
                    <p class="item-number">№325125</p>
                    <p class="item-status status-expectation">Ожидание</p>
                  </div>
                  <div class="list-body">
                    <p class="item-address mb-10">Московская область, г.Подольск, ул.Кузнецова 164</p>
                    <div class="info">
                      <div>
                        <p class="item-date mb-10">Дата и время вывоза: </p>
                        <p class="item-pick-up">Кто заберет: </p>
                      </div>
                      <div>
                        <p class="date mb-10">27.07.2022 18:30</p>
                        <p class="user">Михаил С.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

export default {
  name: 'ApplicationsListView',
  components: {
    NavigationComponent,
    DetailComponent,
    HeaderComponent
  }
}
</script>

<style scoped lang="scss">
</style>
