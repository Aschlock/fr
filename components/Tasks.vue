<template>
  <b-card class="shadow-sm border-0 user-select-none" body-class="p-2">
    <div class="task-body d-flex align-items-start">
      <div class="position-relative" v-b-tooltip.hover="percent + ' %'">
        <b-icon-check class="task-check" v-if="percent == 100"/>
        <svg width="64px" height="64px" viewBox="0 0 42 42" class="donut"
             style="transform: rotate(-90deg);">
          <circle class="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
          <circle class="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent"
                  stroke="whitesmoke" stroke-width="3"></circle>
          <circle class="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent"
                  stroke="#228cdb" stroke-width="3" v-bind:stroke-dasharray="percent +' ' + (100 - percent)"
                  stroke-dashoffset="0"></circle>
        </svg>
      </div>
      <div class="ml-3 pr-2">

          <div class="d-flex justify-between">
            <h5 class="m-0">Задача {{ index + 1 }}</h5>
<!--            <small class="ml-auto text-secondary-200">-->
<!--              12.12.2020-->
<!--            </small>-->
          </div>

        <small class="text-muted"><b>{{ percent }}</b> / 100</small>
        <p class="text-muted mt-2"><small>– Ёбаный рот этого казино, блядь! Ты кто такой, сука, чтоб это сделать?
        </small></p>
      </div>
    </div>
    <div class="px-2 d-flex justify-between">
      <div>
        <b-avatar-group size="2rem">
          <b-avatar to="#" variant="secondary-100"></b-avatar>
          <b-avatar to="#" variant="secondary-100"></b-avatar>
          <b-avatar to="#" variant="secondary-100"></b-avatar>
          <b-avatar to="#" text="+4" variant="secondary-100"></b-avatar>
        </b-avatar-group>
      </div>
      <div class="ml-auto">

        <b-button size="sm" variant="secondary-100" class="text-secondary-200"><b-icon icon="person-dash" class="mr-2"/> Отписаться</b-button>
      </div>
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
  fill: #228cdb;
  animation: an-check .3s ease-in-out;
}

.task-body:hover .donut-segment {
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
