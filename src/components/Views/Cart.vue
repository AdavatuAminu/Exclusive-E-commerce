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
  <div class="px-10 py-8">
    <div class="flex items-center space-x-2 text-gray-600 mb-8">
      <span class="font-medium hover:text-black cursor-pointer">Home</span>
      <span>/</span>
      <span class="text-black font-semibold">Cart</span>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full bg-white rounded-lg border-separate border-spacing-y-4">
        <tbody>

          <tr class="font-semibold text-gray-700 text-left shadow-sm">
            <td class="p-4">Product</td>
            <td class="p-4">Price</td>
            <td class="p-4">Quantity</td>
            <td class="p-4">Subtotal</td>
            <td class="p-4"></td>
          </tr>

          <tr v-if="cart.length === 0">
            <td colspan="5" class="text-center py-10 text-gray-500 text-lg">
              Your cart is empty
            </td>
          </tr>

          <tr v-for="item in cart" :key="item.id" class="bg-white shadow-sm hover:bg-gray-50 transition">
            <td class="p-4 flex items-center gap-3">
              <img :src="item.image" class="w-16 h-16 rounded object-cover" />
              <span>{{ item.name }}</span>
            </td>

            <td class="p-4">${{ item.price }}</td>

            <td class="p-4">
              <input type="number" min="1" :value="item.quantity"
                class="w-20 p-2 border rounded text-center focus:outline-none focus:border-[#DB4444]"
                @change="updateQuantity({ id: item.id, quantity: $event.target.value })" />
            </td>

            <td class="p-4 font-semibold">
              ${{ (item.price * item.quantity).toFixed(2) }}
            </td>

            <td class="p-4 text-center">
              <button @click="removeFromCart(item.id)" class="text-red-500 hover:text-red-700 transition text-xl">
                ×
              </button>
            </td>
          </tr>

        </tbody>
      </table>

      <div class="flex justify-between items-center mt-5">
        <button class="w-[218px] h-[56px] border border-gray-400 rounded-sm hover:bg-gray-50 transition">
          Return to shop
        </button>
        <button class="w-[218px] h-[56px] border border-gray-400 rounded-sm hover:bg-gray-50 transition">
          Update Cart
        </button>
      </div>
      <div class="flex flex-col lg:flex-row justify-between mt-20 gap-10">
        <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-10">
          <input placeholder="Coupon Code"
            class="w-[300px] h-[56px] border border-gray-400 rounded-sm p-4 focus:outline-none focus:border-[#DB4444]" />
          <ButtonComponents label="Apply Coupon" weight="211px" height="56px" />
        </div>

        <div
          class="flex flex-col justify-center w-full max-w-[470px] h-auto min-h-[324px] border border-black rounded-sm p-5">
          <span class="text-[20px] font-bold">Cart Total</span>

          <div class="mt-5 space-y-5">
            <div>
              <div class="flex justify-between w-full">
                <span class="text-[16px]">SubTotal:</span>
                <span class="text-[16px]">${{ cartTotal.toFixed(2) }}</span>
              </div>
              <div class="border border-gray-400 mt-3"></div>
            </div>

            <div>
              <div class="flex justify-between w-full">
                <span class="text-[16px]">Shipping:</span>
                <span class="text-[16px]">Free</span>
              </div>
              <div class="border border-gray-400 mt-3"></div>
            </div>

            <div>
              <div class="flex justify-between w-full text-[18px] font-bold">
                <span>Total:</span>
                <span>${{ cartTotal.toFixed(2) }}</span>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-center">
            <router-link to="/homepage/checkout">
              <ButtonComponents label="Proceed to checkout" weight="260px" height="56px"
                class="mt-8 mx-auto bg-[#DB4444] text-white hover:bg-red-600" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>