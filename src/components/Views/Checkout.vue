<script>
import ButtonComponents from './ButtonComponents.vue';
import { mapGetters } from 'vuex';

export default {
    name: "Checkout",
    components: { ButtonComponents },

    computed: {
        ...mapGetters("cart", ["cartItems", "cartTotal"]),

        cart() {
            return this.cartItems;
        }
    },
}
</script>
<template>
  <!-- Breadcrumb + Title -->
  <div class="max-w-7xl mx-auto px-4 py-6">
    <div class="flex flex-wrap gap-2 text-gray-600 text-sm mb-6">
      <span class="hover:text-black cursor-pointer">Account</span> /
      <span class="hover:text-black cursor-pointer">My Account</span> /
      <span class="hover:text-black cursor-pointer">Product</span> /
      <span class="hover:text-black cursor-pointer">View Cart</span> /
      <span class="text-black font-semibold">Checkout</span>
    </div>

    <h1 class="text-2xl sm:text-3xl font-bold">Billing Details</h1>
  </div>

  <!-- Main Layout -->
  <div class="max-w-7xl mx-auto px-4 py-10">
    <div class="flex flex-col lg:flex-row gap-10">

      <!-- Billing Form -->
      <div class="flex-1">
        <div class="space-y-4">

          <div v-for="label in [
            'First Name',
            'Company Name',
            'Street Address',
            'Apartment, floor, etc. (optional)',
            'Town / City',
            'Phone Number',
            'Email Address'
          ]" :key="label">
            <label class="block text-sm text-gray-500 mb-1">{{ label }}</label>
            <input
              type="text"
              class="w-full h-12 bg-[#F5F5F5] rounded px-3 outline-none focus:ring-2 focus:ring-[#DB4444]"
            />
          </div>

        </div>
      </div>

      <!-- Order Summary -->
      <div class="w-full lg:max-w-md bg-white p-6 border rounded">
        <div class="space-y-4">

          <!-- Cart Items -->
          <div
            v-for="item in cart"
            :key="item.id"
            class="flex justify-between items-center"
          >
            <div class="flex items-center gap-4">
              <img :src="item.image" class="w-12 h-12 object-cover" />
              <span class="text-sm font-medium">{{ item.name }}</span>
            </div>
            <span class="font-medium">${{ item.price }}</span>
          </div>

          <hr />

          <!-- Totals -->
          <div class="flex justify-between">
            <span>Subtotal</span>
            <span>${{ cartTotal.toFixed(2) }}</span>
          </div>

          <div class="flex justify-between">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <hr />

          <div class="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>${{ cartTotal }}</span>
          </div>

          <!-- Payment -->
          <div class="space-y-4 pt-6">

            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <span class="w-4 h-4 border rounded-full"></span>
                <span>Bank</span>
              </div>
              <img src="/assets/Frame 834.png" class="h-6" />
            </div>

            <div class="flex items-center gap-3">
              <span class="w-4 h-4 border rounded-full bg-black"></span>
              <span>Cash on delivery</span>
            </div>

          </div>

          <!-- Coupon -->
          <div class="flex flex-col sm:flex-row gap-3 pt-6 justify-center">
            <input
              placeholder="Coupon Code"
              class="flex-1 h-12 border rounded px-3 w-[100px]"
            />
            <ButtonComponents label="Apply Coupon" />
          </div>

          <ButtonComponents label="Place Order" class="w-full mt-4" />

        </div>
      </div>
    </div>

    <!-- Save Info -->
    <div class="flex items-center gap-3 mt-8">
      <div class="bg-[#DB4444] w-8 h-8 rounded flex items-center justify-center">
        <img src="/assets/check.png" class="w-4 h-4" />
      </div>
      <span class="text-sm">
        Save this information for faster checkout next time
      </span>
    </div>
  </div>
</template>
