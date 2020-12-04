<template>
  <b-card class="shadow-sm border-0 user-select-none" body-class="d-flex align-items-start p-2">
    <div class="position-relative">
      <b-icon-check class="task-check" v-if="percent == 100"/>
      <svg width="64px" height="64px" viewBox="0 0 42 42" class="donut"
           style="transform: rotate(-90deg);" v-b-tooltip.hover="percent + ' %'">
        <circle class="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
        <circle class="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent"
                stroke="whitesmoke" stroke-width="3"></circle>
        <circle class="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent"
                stroke="#F58F29" stroke-width="3" v-bind:stroke-dasharray="percent +' ' + (100 - percent)"
                stroke-dashoffset="0"></circle>
      </svg>
    </div>
    <div class="px-3">
      <h5 class="m-0">Задача {{ index + 1 }}</h5>
      <small class="text-muted"><b>{{ percent }}</b> / 100</small>
      <p class="text-muted mt-2"><small>– Ёбаный рот этого казино, блядь! Ты кто такой, сука, чтоб это сделать?
      </small></p>
    </div>
  </b-card>
</template>

<script>
export default {
  name: "Tasks",
  props: ['percent', 'index'],
}
</script>

<style scoped>

.task-check {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 2.5em;
  height: 2.5em;
  z-index: 1;
  fill: #f59535;
  animation: an-check .3s ease-in-out;
}

.card:hover .donut-segment {
  stroke-width: 5px;
}

.donut-segment, .donut-segment:hover {
  transition: .2s;
}

@keyframes an-check {
  0% {
    transform: translateX(-50%) translateY(-50%) scale(0);
  }

  70% {
    transform: translateX(-50%) translateY(-50%) scale(1.2)
  }

  100% {
  transform: translateX(-50%) translateY(-50%) scale(1)
  }
}

</style>
