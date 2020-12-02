<template>
  <div class="left-nav-menu vh-100 bg-white d-none d-lg-block pt-3 border-right">
    <b-nav vertical>
      <b-nav-item class="pl-1 pr-5" active>
        <b-icon icon="file-earmark-text" class="mr-3"></b-icon>
        Документы
      </b-nav-item>
      <b-nav-item class="pl-1 pr-5">
        <b-icon icon="bar-chart" class="mr-3"></b-icon>
        Link
      </b-nav-item>
      <b-nav-item class="pl-1 pr-5" v-b-toggle="'collapse-2'">
        <div class="dropdown-toggle">
          <b-icon icon="bookmark" class="mr-3"></b-icon>
          Another Link
        </div>
      </b-nav-item>
      <b-collapse id="collapse-2">
        <b-nav vertical>
          <b-nav-item class="pl-3 pr-5" v-for="i in 15">
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

</style>
