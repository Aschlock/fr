<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col xl="1" lg="2" sm="12" class="vh-100 bg-dark d-none d-lg-block pt-3">
          <b-nav vertical>
            <b-nav-item active>Active</b-nav-item>
            <b-nav-item>Link</b-nav-item>
            <b-nav-item>Another Link</b-nav-item>
            <b-nav-item disabled>Disabled</b-nav-item>
          </b-nav>
        </b-col>
        <b-col>
          <b-container fluid class="pt-3">
            <b-row>
              <b-col lg="4" sm="12" class="mb-3 mb-lg-0" v-for="title in titles">
                <b-card class="shadow-sm">
                  <b-card-title>{{ title }}</b-card-title>
                  <hr>
                  qweqwe
                </b-card>
              </b-col>
            </b-row>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titles: [123, 456, 789]
    }
  }
}
</script>

<style>
body {
  background: #f4f4f4;
}

.container {
  color: #333;
}

</style>
