<template>
  <div class="left-nav-menu vh-100 bg-white d-none d-lg-block pt-3 border-right">
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
  color: #228CDB!important;
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

.nuxt-link-active {

}
</style>
