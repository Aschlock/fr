<template>
  <div>
    <b-container fluid>
      <b-row>
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
        <b-col>
          <b-container fluid class="pt-3">
            <b-row class="mb-3">
              <b-col>
                <h1>
                  Документы
                </h1>
              </b-col>
            </b-row>
            <b-row class="mb-4">
              <b-col cols="3" v-for="i in 4">
                <b-card class="shadow-sm border-0" body-class="d-flex p-2">
                  <div>
                    <svg width="64px" height="64px" viewBox="0 0 42 42" class="donut"
                         style="transform: rotate(-90deg);" v-b-tooltip.hover="percents[i-1] + ' %'">
                      <circle class="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
                      <circle class="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent"
                              stroke="whitesmoke" stroke-width="3"></circle>
                      <circle class="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent"
                              stroke="#F58F29" stroke-width="3" :stroke-dasharray="`${percents[i-1]} ${100-percents[i-1]}`"
                              stroke-dashoffset="0"></circle>
                    </svg>
                  </div>
                  <div class="px-3">
                    <h4 class="m-0">Задача {{ i }}</h4>
                    <small class="text-muted"><b>{{ percents[i-1] }}</b> / 100</small>
                  </div>
                </b-card>
              </b-col>
            </b-row>
            <b-row>
              <b-col xl="3" lg="4" sm="12" class="mb-3">
                <b-card body-class="px-4 py-3" class="shadow-sm border-0">
                  <b-card-title class="d-flex">{{ payments.title }}
                    <b-button class="ml-auto font-weight-bold d-flex align-items-center text-secondary-200"
                              variant="secondary-100" style="line-height: 1"
                              @click="addTrans(), makeToast()">+
                    </b-button>
                  </b-card-title>
                  <hr class="my-1">

                  <b-list-group class="mx-n4 transactions">
                    <template v-for="(item, index) in payments.items">
                      <b-list-group-item class="flex-column align-items-start px-4 py-2" v-if="index < 5" :key="index">
                        <div class="d-flex w-100 justify-content-between">
                          <div>
                            <p class="mb-0">{{ item.payer }}</p>
                            <small class="text-muted" :id="'tooltip-' + index">№{{ payments.items.length - index }},
                              {{ item.date.toLocaleDateString('ru') }}</small>
                            <b-tooltip title="123" triggers="hover" :target="'tooltip-' + index">
                              {{ item.date.toLocaleString('ru') }}
                            </b-tooltip>
                          </div>
                          <div>
                            <p v-if="item.isIncome" class="text-success font-weight-bold text-nowrap">+{{ item.sum }}
                              ₽</p>
                            <p v-else class="text-warning font-weight-bold text-nowrap">–{{ item.sum }} ₽</p>
                          </div>
                        </div>
                      </b-list-group-item>
                    </template>
                    <b-list-group-item href="#" v-if="payments.items.length > 5" class="text-primary">
                      <div class="d-flex justify-content-between">
                        <div>
                          Показать все
                        </div>
                        <div>
                          <b-badge variant="secondary-100" class="text-secondary-200">
                            {{ payments.items.length }}
                          </b-badge>
                        </div>
                      </div>
                    </b-list-group-item>
                  </b-list-group>

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
      title: 'Хуячечная'
    }
  },
  methods: {
    makeToast(append = false) {
      this.toastCount++
      this.$bvToast.toast(`Новое списание №${this.payments.items.length} ${(new Date).toLocaleString('ru')}`, {
        title: 'My defence',
        autoHideDelay: 3000,
        appendToast: append
      })
    },

    addTrans(sum = 1000) {
      this.payments.items.unshift({
        isIncome: false,
        sum: (Math.random() * 1000).toFixed(0),
        payer: 'к ООО ААА',
        date: new Date
      })
    }
  },
  data() {
    return {
      payments:
        {
          id: 1,
          title: 'Переводы',
          items: [
            {
              isIncome: true,
              sum: 848,
              payer: 'OOO AAA',
              date: new Date(2020, 12, 1, 12, 24, 48)
            },
            {
              isIncome: true,
              sum: 2356,
              payer: 'OOO AAA',
              date: new Date(2020, 12, 1, 16, 38, 12)
            },
          ]
        },
      percents: [
        13,
        49,
        88,
        4,
      ]

    }
  }
}
</script>

<style>

.transactions .list-group-item {
  transition: .2s;
}

.transactions .list-group-item:hover {
  background: whitesmoke;
  transition: .2s;
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

.donut-segment:hover {
  stroke-width: 5px;
}

.donut-segment, .donut-segment:hover {
  transition: .2s;
}

</style>
