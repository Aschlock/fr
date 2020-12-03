<template>
  <div>
    <b-container fluid class="pt-3">
      <b-row class="mb-3">
        <b-col>
          <h1>
            Документы
          </h1>
        </b-col>
      </b-row>
      <b-row class="mb-4">
        <b-col cols="3" v-for="(percent, index) in percents" :key="index" @click="incrs(index)">
          <Tasks v-bind:percent="percent"></Tasks>
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
import Menu from "@/components/Menu";
import Transfers from "@/components/Transfers";

export default {
  components: {Transfers, Menu, Tasks},
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
