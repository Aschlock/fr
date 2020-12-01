<template>
  <div>
    <b-container fluid>
      <b-row>
        <div class="vh-100 bg-white d-none d-lg-block pt-3 border-right">
          <b-nav vertical>
            <b-nav-item class="px-2" active>
              <b-icon icon="file-earmark-text" class="mr-3"></b-icon>
              Документы
            </b-nav-item>
            <b-nav-item class="px-2">
              <b-icon icon="bar-chart" class="mr-3"></b-icon>
              Link
            </b-nav-item>
            <b-nav-item class="px-2">
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
            <b-row>
              <b-col xl="3" lg="4" sm="12" class="mb-3" v-for="card in cards" :key="card.id">
                <b-card body-class="px-4 py-3" class="shadow-sm border-0">
                  <b-card-title class="d-flex">{{ card.title }}
                    <b-button class="ml-auto font-weight-bold d-flex align-items-center" style="line-height: 1"
                              @click="addTrans(), makeToast()">+
                    </b-button>
                  </b-card-title>
                  <hr class="my-1">

                  <b-list-group class="mx-n4 transactions">
                    <template v-for="(item, index) in cards[0].items">
                      <b-list-group-item class="flex-column align-items-start px-4 py-2" v-if="index < 5" :key="index">
                        <div class="d-flex w-100 justify-content-between">
                          <div>
                            <p class="mb-0">{{ item.payer }}</p>
                            <small class="text-muted" :id="'tooltip-' + index">№{{ cards[0].items.length - index }}, {{ item.date.toLocaleDateString('ru') }}</small>
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
                    <b-list-group-item href="#" v-if="cards[0].items.length >= 5" class="text-primary">
                      Показать все
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
      this.$bvToast.toast(`Новое списание №${this.cards[0].items.length} ${(new Date).toLocaleString('ru')}`, {
        title: 'My defence',
        autoHideDelay: 3000,
        appendToast: append
      })
    },

    addTrans(sum = 1000) {
      this.cards[0].items.unshift({
        isIncome: false,
        sum: (Math.random() * 1000).toFixed(0),
        payer: 'к ООО ААА',
        date: new Date
      })
    }
  },
  data() {
    return {
      cards: [
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

</style>
