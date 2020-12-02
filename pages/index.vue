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
            <b-nav-item class="pl-1 pr-5">
              <b-icon icon="bookmark" class="mr-3"></b-icon>
              Another Link
            </b-nav-item>
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
                <b-card class="shadow-sm border-0">
                  123
                </b-card>
              </b-col>
            </b-row>
            <b-row>
              <b-col xl="3" lg="4" sm="12" class="mb-3">
                <b-card body-class="px-4 py-3" class="shadow-sm border-0">
                  <b-card-title class="d-flex">{{ payments.title }}
                    <b-button class="ml-auto font-weight-bold d-flex align-items-center text-secondary-200" variant="secondary-100" style="line-height: 1"
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
                            <small class="text-muted" :id="'tooltip-' + index">№{{ payments.items.length - index }}, {{ item.date.toLocaleDateString('ru') }}</small>
                            <b-tooltip title="123" triggers="hover" :target="'tooltip-' + index">
                              {{ item.date.toLocaleString('ru') }}
                            </b-tooltip>
                          </div>
                          <div>
                            <p v-if="item.isIncome" class="text-success font-weight-bold text-nowrap">+{{ item.sum }} ₽</p>
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
          title: 'Транзакции',
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

</style>
