<template>
  <b-col xl="3" lg="6" md="" sm="12" class="mb-3">
    <b-card body-class="px-4 py-3" class="shadow-sm transfers">
      <b-card-title class="d-flex">{{ payments.title }}
        <b-button class="ml-auto font-weight-bold d-flex align-items-center text-secondary-200"
                  variant="secondary-100" style="line-height: 1"
                  @click="$bvModal.show('modal-for-create')">
          +
        </b-button>

        <b-modal id="modal-for-create" hide-footer hide-header size="md">
          <h3>Новый перевод</h3>
          <b-form @submit.stop.prevent="addTrans(), makeToast(), $bvModal.hide('modal-for-create')">
            <label for="payee" class="small text-muted">Получатель</label>
            <b-form-input required id="payee" v-model="creation_form.payee" placeholder="ООО Моя оборона" class="mb-2"></b-form-input>

            <label for="amount" class="small text-muted">Сумма, ₽</label>
            <b-form-input required v-model="creation_form.amount" id="amount" type="number" placeholder="1000" class="mb-2"></b-form-input>

            <label for="date" class="small text-muted">Дата</label>
            <b-form-datepicker required value-as-date v-model="creation_form.date" id="date" placeholder="03.12.2020" class="mb-4"></b-form-datepicker>

            <div class="float-right">
              <b-btn @click="$bvModal.hide('modal-for-create')"
                     class="text-secondary-200 btn-secondary-100 ">
                Отменить
              </b-btn>

              <b-btn @click=""
                     class="" variant="primary" type="submit">
                Сохранить
              </b-btn>
            </div>
          </b-form>
        </b-modal>

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
                <p v-if="item.isIncome" class="text-primary font-weight-bold text-nowrap">+{{ Number(item.sum).toLocaleString('ru-RU') }}
                  ₽</p>
                <p v-else class="font-weight-bold text-nowrap" style="color: #FE4A49;">–{{ Number(item.sum).toLocaleString('ru-RU') }} ₽</p>
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
</template>

<script>
export default {
  name: "Transfers",
  props: ['payments'],
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
        sum: this.creation_form.amount,
        payer: this.creation_form.payee,
        date: this.creation_form.date,
      })

      this.creation_form.amount = '';
      this.creation_form.payee = ''
      this.creation_form.date = new Date

    }
  },
  data: function () {
    return {
      creation_form: {
        payee: '',
        amount: '',
        date: new Date
      }
    }
  },
}
</script>

<style scoped>

.transactions .list-group-item {
  transition: .2s;
}

.transactions .list-group-item:hover {
  background: #f8f9fa;
  transition: .2s;
}

</style>
