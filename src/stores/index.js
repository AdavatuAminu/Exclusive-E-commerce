import { createStore } from 'vuex'
import { cart } from './modules/cart'
import { countdown } from './modules/countdown'
import { products } from './modules/products'
import { wishlist } from './modules/wishlist'

export default createStore({
  modules: {
    cart,
    countdown,
    products,
    wishlist
  }
})