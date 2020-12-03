<template>
  <div>
    <b-container fluid>
      <b-row>
        <Menu />
        <b-col class="px-0 px-md-3">
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
