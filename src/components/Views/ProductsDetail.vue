<script>
import ButtonComponents from './ButtonComponents.vue';
import { mapState, mapGetters, mapActions } from 'vuex';
export default {
    name: "ProductsDetail",
    components: { ButtonComponents },
    data() {
        return {
            quantity: 1
        }
    },
    computed: {
        ...mapState('products', ['items']),
        products() {
            return this.items || []
        },
        ...mapGetters("cart", ["cartItems", "cartTotal"]),
        cart() {
            return this.cartItems;
        }
    },
    methods: {
        ...mapActions('cart', ['addToCart']),
        increaseQuantity() {
            this.quantity++;
        },
        decreaseQuantity() {
            if (this.quantity > 1) {
                this.quantity--;
            }
        }
    }
}
</script>
<template>
  <!-- Breadcrumb -->
  <div class="max-w-7xl mx-auto px-4 pt-6">
    <div class="flex flex-wrap items-center gap-2 text-gray-600 text-sm sm:text-base">
      <span class="hover:text-black cursor-pointer">Account</span>
      <span>/</span>
      <span class="hover:text-black cursor-pointer">Gaming</span>
      <span>/</span>
      <span class="text-black font-semibold">Havic HV G-92 Gamepad</span>
    </div>
  </div>

  <!-- Product Section -->
  <div class="max-w-7xl mx-auto px-4 mt-12">
    <div class="flex flex-col lg:flex-row gap-10">

      <!-- Images -->
      <div class="flex flex-col-reverse lg:flex-row gap-4 flex-1">
        <!-- Thumbnails -->
        <div class="flex lg:flex-col gap-2 lg:gap-12 justify-center">
          <img src="/assets/Frame 895.png" class="w-20 h-20 sm:w-24 sm:h-24 object-cover" />
          <img src="/assets/Frame 896.png" class="w-20 h-20 sm:w-24 sm:h-24 object-cover" />
          <img src="/assets/Frame 897.png" class="w-20 h-20 sm:w-24 sm:h-24 object-cover" />
          <img src="/assets/Frame 919.png" class="w-20 h-20 sm:w-24 sm:h-24 object-cover" />
        </div>

        <!-- Main Image -->
        <img
          src="/assets/Frame 894.png"
          class="w-full max-w-md mx-auto object-contain"
        />
      </div>

      <!-- Product Info -->
      <div class="flex-1 space-y-4">
        <h1 class="text-2xl font-bold">Havic HV G-92 Gamepad</h1>

        <div class="flex flex-wrap items-center gap-2">
          <img src="/assets/Five star.png" class="w-24" />
          <span class="text-gray-500 text-sm">(150 reviews)</span>
          <span>|</span>
          <span class="text-[#00FF66] font-semibold">In Stock</span>
        </div>

        <p class="text-2xl font-semibold">$192.00</p>

        <p class="text-sm text-gray-700 leading-relaxed">
          PlayStation 5 Controller Skin High quality vinyl with air channel
          adhesive for easy bubble free install & mess free removal.
        </p>

        <hr class="border-gray-300" />

        <!-- Colors -->
        <div class="flex items-center gap-3">
          <span class="font-semibold">Colours:</span>
          <img src="/assets/Colour Chnage.png" class="h-5" />
        </div>

        <!-- Sizes -->
        <div class="flex items-center gap-4 flex-wrap">
          <span class="font-semibold">Size:</span>
          <div class="flex gap-3">
            <span class="border px-2 py-1 text-sm">XS</span>
            <span class="border px-2 py-1 text-sm">S</span>
            <span class="bg-[#DB4444] text-white px-2 py-1 text-sm">M</span>
            <span class="border px-2 py-1 text-sm">L</span>
            <span class="border px-2 py-1 text-sm">XL</span>
          </div>
        </div>

        <!-- Quantity + Buttons -->
        <div class="flex flex-wrap items-center gap-4 mt-6">
          <div class="flex border rounded">
            <button class="px-4 py-2 border-r">-</button>
            <span class="px-4 py-2 font-semibold">1</span>
            <button class="px-4 py-2 border-l">+</button>
          </div>

          <router-link to="/homepage/error">
            <ButtonComponents label="Buy Now" />
          </router-link>

          <button class="border p-3">
            <img src="/assets/Vector4.png" class="w-5 h-5" />
          </button>
        </div>

        <img src="/assets/Frame 911.png" class="w-full max-w-md mt-6" />
      </div>
    </div>

    <!-- Related Items -->
    <div class="mt-20">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-4 h-8 bg-[#DB4444] rounded"></div>
        <span class="text-[#DB4444] font-semibold text-lg">Related Item</span>
      </div>

      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center"
      >
        <div
          v-for="product in products"
          :key="product.id"
          class="w-full max-w-[270px]"
        >
          <div class="bg-[#F5F5F5] h-[250px] rounded-lg flex items-center justify-center">
            <img
              :src="product.image"
              class="w-[160px] h-[160px] object-contain"
            />
          </div>

          <h3 class="mt-3 font-semibold text-sm text-center lg:text-left">
            {{ product.name }}
          </h3>

          <div class="flex justify-center lg:justify-start gap-3 mt-2">
            <span class="text-[#DB4444] font-bold">${{ product.price }}</span>
            <span v-if="product.originalPrice" class="line-through text-gray-400 text-sm">
              ${{ product.originalPrice }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
