const state = () => ({
  cart: []
})

const mutations = {
  ADD_TO_CART(state, product) {
    const existing = state.cart.find(item => item.id === product.id)
    if (existing) {
      existing.quantity++
    } else {
      state.cart.push({ ...product, quantity: 1 })
    }
  },

  UPDATE_QUANTITY(state, { id, quantity }) {
    const item = state.cart.find(item => item.id === id)
    if (item) {
      item.quantity = Number(quantity)
      if (item.quantity <= 0) {
        state.cart = state.cart.filter(i => i.id !== id)
      }
    }
  },

  REMOVE_FROM_CART(state, id) {
    state.cart = state.cart.filter(item => item.id !== id)
  },

  CLEAR_CART(state) {
    state.cart = []
  }
}

const getters = {
  cartCount: (state) => {
    return state.cart.reduce((total, item) => total + item.quantity, 0)
  },

  cartTotal: (state) => {
    return state.cart.reduce((total, item) => total + item.price * item.quantity, 0)
  },

  cartItems: (state) => state.cart
}

const actions = {
  addToCart({ commit }, product) {
    commit('ADD_TO_CART', product)
  },

  updateQuantity({ commit }, payload) {
    commit('UPDATE_QUANTITY', payload)
  },

  removeFromCart({ commit }, id) {
    commit('REMOVE_FROM_CART', id)
  },

  clearCart({ commit }) {
    commit('CLEAR_CART')
  }
}

export const cart = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}