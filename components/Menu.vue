<template>
  <div class="w-md-100">
    <b-collapse id="qweqwe" class="left-nav-menu vh-100 bg-white d-none d-lg-flex flex-column pt-3 border-right" is-nav>

      <b-nav vertical class="mb-3">
        <div class="d-flex align-items-center">
          <svg class="mr-1" height="64px" viewBox="0 0 100 100" style="fill: #353D46"
               width="100px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
               xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M92.374,60.459c-0.373-3.26-1.784-6.17-3.878-8.418l0.032-10.604l-8.629,6.072c-0.73-0.11-1.473-0.183-2.231-0.183   c-0.472,0-0.949,0.022-1.424,0.067c-2.213-9.11-9.785-15.841-18.954-17.092l1.223-7.237l-2.795-0.473l-1.266,7.492   c-0.082-0.001-0.161-0.011-0.243-0.011c-0.866,0-1.744,0.051-2.609,0.149l-0.101,0.012l1.212-7.17l-2.795-0.473l-1.351,7.994   c-12.1,1.742-20.726,12.837-19.326,25.059c0.085,0.736,0.204,1.467,0.357,2.184l-14.365,5.781l10.856,3.039l-18.56,10.76   l68.095-0.588c1.238,0.17,2.495,0.188,3.717,0.045c3.932-0.449,7.452-2.404,9.914-5.504C91.716,68.264,92.824,64.391,92.374,60.459   z M85.677,46.909l-0.008,2.778c-0.712-0.459-1.465-0.855-2.252-1.188L85.677,46.909z M87.034,69.6   c-1.99,2.506-4.838,4.086-8.018,4.449C78,74.168,76.954,74.148,75.921,74l-0.107-0.016L18.229,74.48l15.095-8.75l-9.3-2.604   l8.938-3.598l-0.333-1.217c-0.265-0.965-0.457-1.971-0.574-2.99c-1.247-10.89,6.599-20.764,17.488-22.012l2.378-0.271   c0.759-0.087,1.528-0.131,2.287-0.131c9.611,0,17.825,6.871,19.531,16.339l0.302,1.399l1.405-0.268   c0.279-0.053,0.558-0.106,0.843-0.14c0.457-0.053,0.921-0.079,1.378-0.079c6.086,0,11.197,4.566,11.89,10.621   C89.922,63.961,89.025,67.092,87.034,69.6z"/><path
            d="M52.989,45.921c-8.683,0-15.773,7.063-15.804,15.743c-0.006,0.943,0.082,1.896,0.267,2.914l0.21,1.16l30.621,0.111   l0.221-1.156c0.192-1.012,0.287-1.963,0.289-2.908c0.017-4.223-1.612-8.197-4.587-11.194   C61.231,47.596,57.269,45.937,52.989,45.921z M65.891,63.006l-25.813-0.094c-0.041-0.42-0.061-0.83-0.059-1.234   c0.026-7.125,5.845-12.923,13.017-12.923c3.465,0.014,6.717,1.375,9.157,3.833c2.44,2.459,3.777,5.721,3.765,9.188   C65.957,62.18,65.935,62.588,65.891,63.006z"/><rect
            height="2.834" width="6.75" x="76.629" y="60.783"/></g></svg>
          <span class="h3 font-weight-normal"><span class="text-primary">Q</span>qqqq</span>
        </div>
      </b-nav>
      <b-nav vertical>
        <b-nav-item class="" link-classes="linklink" :to="'/lk'">
          <b-icon icon="house" class="mr-3"></b-icon>
          Главная
        </b-nav-item>
        <b-nav-item class="" link-classes="linklink" :to="'/lk/docs'">
          <b-icon icon="file-earmark-text" class="mr-3"></b-icon>
          Документы
        </b-nav-item>
        <b-nav-item class="" link-classes="linklink">
          <b-icon icon="bar-chart" class="mr-3"></b-icon>
          Link
        </b-nav-item>
        <b-nav-item class="" link-classes="linklink" v-b-toggle="'collapse-2'">
          <div class="dropdown-toggle">
            <b-icon icon="bookmark" class="mr-3"></b-icon>
            Another Link
          </div>
        </b-nav-item>
        <b-collapse id="collapse-2">
          <b-nav vertical>
            <b-nav-item link-classes="linklink" class="pl-3" v-for="i in 25" :key="i">
              <b-icon icon="box-seam" class="mr-3"></b-icon>
              Link
            </b-nav-item>
          </b-nav>
        </b-collapse>
      </b-nav>

      <b-nav vertical class="mt-auto border-top">
        <b-nav-item link-classes="linklink" to="/lk/settings">
          <b-icon icon="gear" class="mr-3"></b-icon>
          Настройки
        </b-nav-item>
      </b-nav>


    </b-collapse>
    <div class="pt-lg-0 pt-3 px-3 px-md-4 px-lg-0">
      <div v-b-toggle="'qweqwe'" class="ml-auto" style="position:absolute; top: 0; right: 0; z-index: 123;">
        <svg height="32px" id="Layer_1" viewBox="0 0 32 32" style="fill: #333"
             width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Menu"
}
</script>

<style scoped>

.linklink {
  min-width: 250px;
}

.nuxt-link-exact-active {
  background: aliceblue;
  color: #228CDB !important;
}

.left-nav-menu {
  position: sticky;
  top: 0;
  overflow-y: auto;
}

.left-nav-menu a {
  color: #738396;
}

.left-nav-menu a:hover {
  color: #353D46;
}

.left-nav-menu .nav-item:hover {
  background: #F3F5F6;
}

.left-nav-menu.show {
  display: flex !important;
  width: 100vw !important;
  position: fixed !important;
  z-index: 10;
  align-items: normal;
}

@media (max-width: 992px) {
  .w-md-100 {
    width: 100%;
  }
}

</style>
