const state = () => ({
  timeLeft: {
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56
  }
})

const mutations = {
  SET_TIME(state, time) {
    state.timeLeft = time
  },

  DECREMENT_SECOND(state) {
    let { days, hours, minutes, seconds } = state.timeLeft

    if (seconds > 0) {
      seconds--
    } else if (minutes > 0) {
      seconds = 59
      minutes--
    } else if (hours > 0) {
      seconds = 59
      minutes = 59
      hours--
    } else if (days > 0) {
      seconds = 59
      minutes = 59
      hours = 23
      days--
    } else {
      seconds = 0
    }

    state.timeLeft = { days, hours, minutes, seconds }
  }
}

const actions = {
  startCountdown({ commit }) {
    const updateCountdown = () => {
      const now = new Date()
      const end = new Date()
      end.setDate(end.getDate() + 3)
      end.setHours(23, 19, 56, 999)

      const diff = Math.max(0, (end - now) / 1000)

      const days = Math.floor(diff / (3600 * 24))
      const hours = Math.floor((diff % (3600 * 24)) / 3600)
      const minutes = Math.floor((diff % 3600) / 60)
      const seconds = Math.floor(diff % 60)

      commit('SET_TIME', { days, hours, minutes, seconds })

      if (diff <= 0) clearInterval(interval)
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)
  }
}

export const countdown = {
  namespaced: true,
  state,
  mutations,
  actions
}