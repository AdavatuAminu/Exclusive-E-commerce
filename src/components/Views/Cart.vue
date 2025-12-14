<script>
import { mapGetters, mapActions } from "vuex";
import ButtonComponents from "@/components/Views/ButtonComponents.vue";

export default {
  name: "Cart",
  components: { ButtonComponents },

  computed: {
    ...mapGetters("cart", ["cartItems", "cartTotal"]),

    cart() {
      return this.cartItems;
    }
  },

  methods: {
    ...mapActions("cart", ["updateQuantity", "removeFromCart"])
  }
};
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 mt-10 sm:mt-20">
    <div class="overflow-x-auto">
      <table class="w-full bg-white rounded-lg border-separate border-spacing-y-2 sm:border-spacing-y-4">
        <tbody>
          <tr class="font-semibold text-gray-700 text-left shadow-sm hidden sm:table-row">
            <td class="p-2 sm:p-4">Product</td>
            <td class="p-2 sm:p-4">Price</td>
            <td class="p-2 sm:p-4">Quantity</td>
            <td class="p-2 sm:p-4">Subtotal</td>
            <td class="p-2 sm:p-4"></td>
          </tr>
          <tr v-if="cart.length === 0" class="text-center py-10 text-gray-500 text-base sm:text-lg">
            <td colspan="5">Your cart is empty</td>
          </tr>
          <tr v-for="item in cart" :key="item.id" class="bg-white shadow-sm hover:bg-gray-50 transition flex flex-col sm:table-row gap-4 sm:gap-0 p-4 sm:p-0">
            <td class="flex items-center gap-3 p-2 sm:p-4">
              <img :src="item.image" class="w-12 h-12 sm:w-16 sm:h-16 rounded object-cover flex-shrink-0" />
              <span class="text-sm sm:text-base">{{ item.name }}</span>
            </td>
            <td class="p-2 sm:p-4 text-sm sm:text-base">${{ item.price }}</td>
            <td class="p-2 sm:p-4">
              <input type="number" min="1" :value="item.quantity" class="w-full sm:w-20 p-2 border rounded text-center focus:outline-none focus:border-[#DB4444] text-sm" @change="updateQuantity({ id: item.id, quantity: $event.target.value })" />
            </td>
            <td class="p-2 sm:p-4 font-semibold text-sm sm:text-base">${{ (item.price * item.quantity).toFixed(2) }}</td>
            <td class="p-2 sm:p-4 text-center">
              <button @click="removeFromCart(item.id)" class="text-red-500 hover:text-red-700 transition text-xl">×</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="flex flex-col sm:flex-row justify-between items-center mt-4 sm:mt-5 gap-4">
        <button class="w-full sm:w-[218px] h-[56px] border border-gray-400 rounded-sm hover:bg-gray-50 transition">Return to shop</button>
        <button class="w-full sm:w-[218px] h-[56px] border border-gray-400 rounded-sm hover:bg-gray-50 transition">Update Cart</button>
      </div>
      <div class="flex flex-col lg:flex-row justify-between mt-10 sm:mt-20 gap-6 lg:gap-10">
        <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full lg:w-auto">
          <input placeholder="Coupon Code" class="w-full h-[56px] border border-gray-400 rounded-sm p-4 focus:outline-none focus:border-[#DB4444] text-sm" />
          <ButtonComponents label="Apply Coupon" weight="150px" height="56px" class="justify-center mt-4 sm:mt-0" />
        </div>
        <div class="flex flex-col justify-center w-full lg:w-[470px] h-auto min-h-[300px] sm:min-h-[324px] border border-black rounded-sm p-4 sm:p-5">
          <span class="text-lg sm:text-[20px] font-bold">Cart Total</span>
          <div class="mt-4 sm:mt-5 space-y-4">
            <div>
              <div class="flex justify-between">
                <span class="text-sm sm:text-[16px]">SubTotal:</span>
                <span class="text-sm sm:text-[16px]">${{ cartTotal.toFixed(2) }}</span>
              </div>
              <div class="border border-gray-400 mt-2 sm:mt-3"></div>
            </div>
            <div>
              <div class="flex justify-between">
                <span class="text-sm sm:text-[16px]">Shipping:</span>
                <span class="text-sm sm:text-[16px]">Free</span>
              </div>
              <div class="border border-gray-400 mt-2 sm:mt-3"></div>
            </div>
            <div>
              <div class="flex justify-between text-base sm:text-[18px] font-bold">
                <span>Total:</span>
                <span>${{ cartTotal.toFixed(2) }}</span>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-center mt-6 sm:mt-8">
            <router-link to="/homepage/checkout">
              <ButtonComponents label="Proceed to checkout" weight="200px" height="56px" class="mx-auto bg-[#DB4444] text-white hover:bg-red-600" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>