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
          <b-container fluid>
            <b-row>
              <b-col class="py-3">
                <b-navbar toggleable="lg" type="light" variant="transparent" class="px-0">
                  <b-navbar-brand href="#">
                    <img src="~/static/icons/bird.svg" width="48px"/>
                  </b-navbar-brand>
                  <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                  <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                      <b-nav-item href="#">Link</b-nav-item>
                      <b-nav-item href="#" disabled>Disabled</b-nav-item>
                    </b-navbar-nav>
                    <b-navbar-nav class="ml-auto">
                      <div>
                          User
                      </div>
                    </b-navbar-nav>
                  </b-collapse>
                </b-navbar>
              </b-col>
            </b-row>
          </b-container>
          <b-container fluid>
            <b-row>
              <b-col lg="4" sm="12" class="mb-3 mb-lg-0" v-for="title in titles">
                <b-card class="shadow-sm bg-primary">
                  <b-card-title>{{ title }}</b-card-title>
                  <hr class="my-1">
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
  head() {
    return {
      title: 'Хуявная'
    }
  },
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
