const state = () => ({
  wishlist: []
})

const mutations = {
  ADD_TO_WISHLIST(state, product) {
    const existing = state.wishlist.find(item => item.id === product.id)
    if (existing) {
      existing.quantity++
    } else {
      state.wishlist.push({ ...product, quantity: 1 })
    }
  },

  UPDATE_QUANTITY(state, { id, quantity }) {
    const item = state.wishlist.find(item => item.id === id)
    if (item) {
      item.quantity = Number(quantity)
      if (item.quantity <= 0) {
        state.wishlist = state.wishlist.filter(i => i.id !== id)
      }
    }
  },

  REMOVE_FROM_WISHLIST(state, id) {
    state.wishlist = state.wishlist.filter(item => item.id !== id)
  },

  CLEAR_WISHLIST(state) {
    state.wishlist = []
  }
}

const getters = {
  wishlistCount: (state) => {
    return state.wishlist.reduce((total, item) => total + item.quantity, 0)
  },

  wishlistTotal: (state) => {
    return state.wishlist.reduce((total, item) => total + item.price * item.quantity, 0)
  },

  wishlistItems: (state) => state.wishlist
}

const actions = {
  addToWishlist({ commit }, product) {
    commit('ADD_TO_WISHLIST', product)
  },

  updateQuantity({ commit }, payload) {
    commit('UPDATE_QUANTITY', payload)
  },

  removeFromWishlist({ commit }, id) {
    commit('REMOVE_FROM_WISHLIST', id)
  },

  clearWishlist({ commit }) {
    commit('CLEAR_WISHLIST')
  }
}

export const wishlist = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}