<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col xl="1" lg="2" sm="12" class="vh-100 bg-dark d-none d-lg-block">
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
              <b-col lg="4" sm="12">
                <b-card header="123" bg-variant="">
                  qweqwe
                </b-card>
              </b-col>
              <b-col lg="4" sm="12">
                <b-card header="123" bg-variant="">
                  qweqwe
                </b-card>
              </b-col>
              <b-col lg="4" sm="12">
                <b-card header="123" bg-variant="">
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
export default {}
</script>

<style>
.container {
  color: #333;
}

</style>
