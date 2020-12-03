<template>
  <div>
    <b-container fluid>
      <b-row>
        <Menu />
        <b-col>
          <Nuxt />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Menu from "@/components/Menu";
export default {
  name: "lk",
  components: {Menu}
}
</script>

<style scoped>

</style>
