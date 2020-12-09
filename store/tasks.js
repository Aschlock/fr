export const state = () => ({
  tasks: [
    100,
    4,
    95,
    0
  ],

  // tasks1: [
  //   {
  //     name: '',
  //     description: '',
  //     amountFrom: 0,
  //     amountTo: 100,
  //     isSubscribed: false,
  //     subscribedUsers: [
  //
  //     ],
  //   },
  // ]
})

export const getters = {
  // getTasks: (state, getters) => {
  //   return getters.doneTodos.length;
  // }
}

export const mutations = {
  qweqwe(state, index) {
    if (state.tasks[index] < 100 ) {
      state.tasks.splice(index, 1, ++state.tasks[index])
    }
  }
}

export const actions = {

}
