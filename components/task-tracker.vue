<template>
  <b-card class="shadow-sm border-0" body-class="d-flex p-2">
    <div>
      <svg width="64px" height="64px" viewBox="0 0 42 42" class="donut"
           style="transform: rotate(-90deg);" v-b-tooltip.hover="percent + ' %'">
        <circle class="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
        <circle class="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent"
                stroke="whitesmoke" stroke-width="3"></circle>
        <circle class="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent"
                stroke="#F58F29" stroke-width="3" :stroke-dasharray="`${percent} ${100-percent}`"
                stroke-dashoffset="0"></circle>
      </svg>
    </div>
    <div class="px-3">
      <h5 class="m-0">Задача </h5>
      <small class="text-muted"><b>{{ percent }}</b> / 100</small>
    </div>
  </b-card>
</template>

<script>
export default {
name: "task-tracker",
  props: ['percent']
}
</script>

<style scoped>

.donut-segment:hover {
  stroke-width: 5px;
}

.donut-segment, .donut-segment:hover {
  transition: .2s;
}

</style>
