<template>
  <div>
    <b-container fluid class="pt-3">
      <b-row class="mb-3">
        <b-col>
          <h1>
            Главная
          </h1>
        </b-col>
      </b-row>
      <b-row class="mb-4">
        <b-col xl="3" lg="6" md="6" sm="6" v-for="(percent, index) in percents" :key="index" @click="incrs(index)" class="mb-3 mb-xl-0">
          <Tasks v-bind:percent="percent" v-bind:index="index"></Tasks>
        </b-col>
      </b-row>
      <b-row>
        <Transfers v-bind:payments="payments" />
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
              date: new Date(2020, 12, 1, 12, 24, 48)
            },
            {
              isIncome: true,
              sum: (Math.random() * 10000).toFixed(0),
              payer: 'OOO AAA',
              date: new Date(2020, 12, 1, 16, 38, 12)
            },
            {
              isIncome: false,
              sum: (Math.random() * 10000).toFixed(0),
              payer: 'OOO AAA',
              date: new Date(2020, 12, 1, 16, 38, 12)
            },
            {
              isIncome: true,
              sum: (Math.random() * 10000).toFixed(0),
              payer: 'OOO AAA',
              date: new Date(2020, 12, 1, 16, 38, 12)
            },
          ]
        },
      percents: [
        100,
        4,
        95,
        23
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
