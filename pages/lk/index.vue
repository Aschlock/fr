<template>
  <div>
    <b-container fluid class="pt-3">
      <b-row class="mb-3">
        <b-col>
          <h1>
            Главная
          </h1>
          <hr/>
        </b-col>
      </b-row>
      <b-row class="mb-4">
        <b-col xl="3" lg="6" md="6" sm="6" v-for="(percent, index) in percents" :key="index" @click="incrs(index)" class="mb-3 mb-xl-0">
          <Tasks v-bind:percent="percent" v-bind:index="index"></Tasks>
        </b-col>
      </b-row>
      <b-row>
        <Transfers v-bind:payments="payments" />
<!--        <b-col cols="9">-->
<!--          <b-card body-class="px-4 py-3" class="shadow-sm">-->
<!--            <b-container class="px-0">-->
<!--              <b-row>-->
<!--                <b-col cols="4">-->
<!--                  <h4>Поступило</h4>-->
<!--                  <hr>-->
<!--                  <h2>{{ total.income }} ₽</h2>-->
<!--                </b-col>-->
<!--                <b-col cols="4">-->
<!--                  <h4>Списано</h4>-->
<!--                  <hr>-->
<!--                  <h2>{{ total.pay }} ₽</h2>-->
<!--                </b-col>-->
<!--                <b-col cols="4">-->
<!--                  <h4>Итог</h4>-->
<!--                  <hr>-->
<!--                  <h2>{{ total.amount }} ₽</h2>-->
<!--                </b-col>-->
<!--              </b-row>-->
<!--            </b-container>-->
<!--          </b-card>-->
<!--        </b-col>-->
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Tasks from "@/components/Tasks";
import Transfers from "@/components/Transfers";

export default {
  components: {Transfers, Tasks},
  head() {
    return {
      title: 'Хуячечная'
    }
  },
  methods: {
    incrs(index) {
      if (this.percents[index] < 100 ) {
        this.percents.splice(index, 1, ++this.percents[index])
      }
    },
  },
  layout: 'lk',
  computed: {
    total: function () {
      let total = {
        income: 0,
        pay: 0,
        amount: 0
      }

      this.payments.items.forEach(function (payment) {
        if (payment.isIncome) {
          total.income += +payment.sum
        } else {
          total.pay += +payment.sum
        }
      })

      total.amount = total.income - total.pay;

      for (let i in total) {
        total[i] = total[i].toLocaleString('ru')
      }

      return total
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
              sum: (Math.random() * 10000).toFixed(0),
              payer: 'OOO AAA',
              date: new Date(2020, 11, 7, 12, 24, 48)
            },
            {
              isIncome: true,
              sum: (Math.random() * 10000).toFixed(0),
              payer: 'OOO AAA',
              date: new Date(2020, 11, 5, 14, 21, 52)
            },
            {
              isIncome: false,
              sum: (Math.random() * 10000).toFixed(0),
              payer: 'OOO AAA',
              date: new Date(2020, 11, 3, 0, 4, 15)
            },
            {
              isIncome: true,
              sum: (Math.random() * 10000).toFixed(0),
              payer: 'OOO AAA',
              date: new Date(2020, 11, 1, 15, 37, 23)
            },
            {
              isIncome: true,
              sum: (Math.random() * 10000).toFixed(0),
              payer: 'OOO AAA',
              date: new Date(2020, 10, 30, 12, 12, 48)
            },
          ]
        },
      percents: [
        100,
        4,
        95,
        0
      ]

    }
  },
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
