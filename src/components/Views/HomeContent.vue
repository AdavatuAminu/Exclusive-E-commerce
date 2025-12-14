<script>
import { mapState, mapActions } from 'vuex'
import ButtonComponents from './ButtonComponents.vue';
export default {
  name: 'HomeContent',
  components: { ButtonComponents },
  computed: {
    ...mapState('products', ['items']),
    products() {
      return this.items || []
    },
    ...mapState('countdown', {
      timeLeft: state => state.timeLeft
    })
  },
  methods: {
    ...mapActions('cart', ['addToCart']),
    ...mapActions('wishlist', ['addToWishlist']),
    goToProductsDetail(product) {
      this.$router.push({ name: 'ProductsDetail', params: { id: product.id } });
    }
  },
  async mounted() {
    await this.$store.dispatch('products/fetchProducts');
    this.$store.dispatch('countdown/startCountdown')
  }
}
</script>
<template>
   <!-- Categories & Banner -->
  <div class="flex flex-col lg:flex-row justify-center gap-6 lg:gap-20 px-2 lg:px-0 mt-0">
    <!-- Categories -->
    <div class="flex flex-col space-y-3 text-base sm:text-lg">
      <div class="flex items-center gap-2 hover:text-[#DB4444] transition cursor-pointer mt-5">
        <a>Woman’s Fashion</a>
        <img src="/assets/Vector (3).png" class="w-2 h-3" />
      </div>
      <div class="flex items-center gap-2 hover:text-[#DB4444] transition cursor-pointer">
        <a>Men’s Fashion</a>
        <img src="/assets/Vector (3).png" class="w-2 h-3" />
      </div>
      <a class="hidden lg:block hover:text-[#DB4444] transition">Electronics</a>
      <a class="hidden lg:block hover:text-[#DB4444] transition">Home & Lifestyle</a>
      <a class="hidden lg:block hover:text-[#DB4444] transition">Medicine</a>
      <a class="hidden lg:block hover:text-[#DB4444] transition">Sports & Outdoor</a>
      <a class="hidden lg:block hover:text-[#DB4444] transition">Baby’s & Toys</a>
      <a class="hidden lg:block hover:text-[#DB4444] transition">Groceries & Pets</a>
      <a class="hidden lg:block hover:text-[#DB4444] transition">Health & Beauty</a>
    </div>
    <!-- Divider -->
    <div class="hidden lg:block w-px h-[384px] bg-gray-300"></div>

    <!-- Banner -->
    <div class="mt-0 lg:mt-10 w-full lg:w-auto">
      <img src="/assets/Frame 560.png" class="w-full max-w-[892px] h-auto rounded-lg shadow-lg mx-auto" alt="Banner" />
    </div>
  </div>

  <!-- Flash Sales Section -->
  <div class="max-w-7xl mx-auto px-4 mt-16">
    <div class="flex items-center gap-2">
      <div class="w-4 h-8 bg-[#DB4444] rounded"></div>
      <span class="text-[#DB4444] font-semibold text-base sm:text-lg">Today's</span>
    </div>

    <div class="flex flex-col lg:flex-row lg:items-center justify-between mt-6 gap-6">
      <!-- Timer -->
      <div class="flex flex-col lg:flex-row items-start lg:items-center gap-4">
        <h1 class="text-2xl sm:text-4xl font-bold">Flash Sales</h1>
        <div class="flex items-center gap-2 text-center">
          <div>
            <span class="text-xs text-gray-600 block">Days</span>
            <p class="text-2xl sm:text-3xl font-bold">{{ String(timeLeft.days).padStart(2,'0') }}</p>
          </div>
          <span class="text-[#DB4444] text-2xl sm:text-3xl font-bold">:</span>
          <div>
            <span class="text-xs text-gray-600 block">Hours</span>
            <p class="text-2xl sm:text-3xl font-bold">{{ String(timeLeft.hours).padStart(2,'0') }}</p>
          </div>
          <span class="text-[#DB4444] text-2xl sm:text-3xl font-bold">:</span>
          <div>
            <span class="text-xs text-gray-600 block">Minutes</span>
            <p class="text-2xl sm:text-3xl font-bold">{{ String(timeLeft.minutes).padStart(2,'0') }}</p>
          </div>
          <span class="text-[#DB4444] text-2xl sm:text-3xl font-bold">:</span>
          <div>
            <span class="text-xs text-gray-600 block">Seconds</span>
            <p class="text-2xl sm:text-3xl font-bold">{{ String(timeLeft.seconds).padStart(2,'0') }}</p>
          </div>
        </div>
      </div>
      <!-- Navigation buttons -->
      <div class="flex gap-2 mt-4 lg:mt-0">
        <button class="p-2 sm:p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition">
          <img src="/assets/icons_arrow-left.png" class="w-5 sm:w-6 h-5 sm:h-6" />
        </button>
        <button class="p-2 sm:p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition">
          <img src="/assets/icons arrow-right.png" class="w-5 sm:w-6 h-5 sm:h-6" />
        </button>
      </div>
    </div>

    <!-- Products Grid -->
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8 mt-10 justify-items-center">
      <div v-for="product in products" :key="product.id" class="w-full max-w-[270px] group cursor-pointer" @click="goToProductsDetail(product)">
        <div
          class="relative bg-[#F5F5F5] h-[250px] rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
          <span v-if="product.discount"
            class="absolute top-4 left-4 bg-[#DB4444] text-white text-xs font-medium px-3 py-1 rounded z-10">
            -{{ product.discount }}%
          </span>
          <div
            class="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <button @click.stop="addToWishlist(product)"
              class="w-10 h-10 bg-white rounded-full shadow-lg hover:scale-110 transition">
              <img src="/assets/Vector4.png" class="w-5 h-5 mx-auto" alt="Wishlist" />
            </button>
            <button class="w-10 h-10 bg-white rounded-full shadow-lg hover:scale-110 transition">
              <img src="/assets/Quick View.png" class="w-5 h-5 mx-auto" alt="Quick View" />
            </button>
          </div>
          <img :src="product.image" :alt="product.name"
            class="absolute inset-0 mx-auto my-auto w-[190px] h-[170px] object-contain transition-transform duration-300 group-hover:scale-110" />

          <button @click.stop="addToCart(product)"
            class="absolute bottom-0 left-0 w-full h-12 bg-black text-white font-medium opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-900 z-10">
            Add To Cart
          </button>
        </div>

        <div class="mt-4 text-center lg:text-left">
          <h3 class="font-semibold text-base line-clamp-2">{{ product.name }}</h3>
          <div class="flex items-center justify-center lg:justify-start gap-3 mt-2">
            <span class="text-[#DB4444] font-bold text-lg">${{ product.price }}</span>
            <span v-if="product.originalPrice" class="text-gray-400 line-through text-sm">
              ${{ product.originalPrice }}
            </span>
          </div>
          <div class="flex items-center justify-center lg:justify-start gap-3 mt-2">
            <img src="/assets/Five star.png" class="w-[100px] h-[20px]" alt="Rating" />
            <span class="text-gray-500 text-sm font-semibold">({{ product.reviews || 88 }})</span>
          </div>
        </div>
      </div>
    </div>

    <!-- View All Products -->
    <div class="flex justify-center mt-8">
      <button class="bg-[#DB4444] text-white px-8 sm:px-12 py-3 sm:py-4 rounded hover:bg-red-600 transition text-base sm:text-lg font-medium">
        View All Products
      </button>
    </div>
  </div>
  <!-- Categories Grid -->
  <div class="flex items-center justify-between max-w-7xl mx-auto px-4 mt-20">
    <div>
      <div class="flex items-center gap-4">
        <div class="w-4 h-8 bg-[#DB4444] rounded"></div>
      <span class="text-[#DB4444] font-semibold text-base sm:text-lg">Categories</span>
      </div>
      <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <div class="flex items-center gap-16">
          <h1 class="text-2xl lg:text-4xl lg:mt-5 font-bold">Browse By Category</h1>
        </div>
      </div>
    </div>
    <!-- Navigation buttons -->
      <div class="flex gap-2 mt-8 lg:mt-3">
        <button class="p-2 sm:p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition">
          <img src="/assets/icons_arrow-left.png" class="w-5 sm:w-6 h-5 sm:h-6" />
        </button>
        <button class="p-2 sm:p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition">
          <img src="/assets/icons arrow-right.png" class="w-5 sm:w-6 h-5 sm:h-6" />
        </button>
      </div>
  </div>
  <!-- Categories -->
<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 px-4 py-5 sm:py-10 justify-items-center">
  <div class="flex flex-col items-center justify-center w-full h-[120px] sm:h-[145px] rounded-sm border border-gray-500 hover:bg-[#DB4444] cursor-pointer">
    <img src="/assets/Category-CellPhone.png" class="w-8 h-8 sm:w-12 sm:h-12" />
    <span class="text-sm sm:text-base mt-1 text-center">Phones</span>
  </div>
  <div class="flex flex-col items-center justify-center w-full h-[120px] sm:h-[145px] rounded-sm border border-gray-500 hover:bg-[#DB4444] cursor-pointer">
    <img src="/assets/Category-Computer.png" class="w-8 h-8 sm:w-12 sm:h-12" />
    <span class="text-sm sm:text-base mt-1 text-center">Computers</span>
  </div>
  <div class="flex flex-col items-center justify-center w-full h-[120px] sm:h-[145px] rounded-sm border border-gray-500 hover:bg-[#DB4444] cursor-pointer">
    <img src="/assets/Category-SmartWatch.png" class="w-8 h-8 sm:w-12 sm:h-12" />
    <span class="text-sm sm:text-base mt-1 text-center">SmartWatch</span>
  </div>
  <div class="flex flex-col items-center justify-center w-full h-[120px] sm:h-[145px] rounded-sm border border-gray-500 hover:bg-[#DB4444] cursor-pointer">
    <img src="/assets/Category-Camera.png" class="w-8 h-8 sm:w-12 sm:h-12" />
    <span class="text-sm sm:text-base mt-1 text-center">Camera</span>
  </div>
  <div class="flex flex-col items-center justify-center w-full h-[120px] sm:h-[145px] rounded-sm border border-gray-500 hover:bg-[#DB4444] cursor-pointer">
    <img src="/assets/Category-Headphone.png" class="w-8 h-8 sm:w-12 sm:h-12" />
    <span class="text-sm sm:text-base mt-1 text-center">HeadPhones</span>
  </div>
  <div class="flex flex-col items-center justify-center w-full h-[120px] sm:h-[145px] rounded-sm border border-gray-500 hover:bg-[#DB4444] cursor-pointer">
    <img src="/assets/Category-Gamepad.png" class="w-8 h-8 sm:w-12 sm:h-12" />
    <span class="text-sm sm:text-base mt-1 text-center">Gaming</span>
  </div>
</div>
  <div class="max-w-7xl mx-auto">
    <div class="border-t border-gray-400 w-full"></div>
  </div>
  <!-- Best selling Products -->
  <div class="flex items-center justify-between max-w-7xl mx-auto px-4 mt-20">
    <div>
      <div class="flex items-center gap-4">
        <div class="w-4 h-8 bg-[#DB4444] rounded"></div>
      <span class="text-[#DB4444] font-semibold text-base sm:text-lg">This Month</span>
      </div>
      <div class="flex flex-col lg:flex-row lg:items-center justify-between mt-2 gap-8">
        <div class="flex items-center gap-16">
          <h1 class="text-2xl lg:text-4xl lg:mt-5 font-bold">Best selling Products</h1>
        </div>
      </div>
    </div>
    <ButtonComponents label="View All" weight="159px" />
  </div>
  <!-- Product Grid -->
  <div class="max-w-7xl mx-auto px-4 mt-20">
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8 mt-10 justify-items-center">
      <div v-for="product in products" :key="product.id" class="w-full max-w-[270px] group cursor-pointer" @click="goToProductDetail(product)">
        <div
          class="relative bg-[#F5F5F5] h-[250px] rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
          <div
            class="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <button @click.stop="addToWishlist(product)"
              class="w-10 h-10 bg-white rounded-full shadow-lg hover:scale-110 transition">
              <img src="/assets/Vector4.png" class="w-5 h-5 mx-auto" alt="Wishlist" />
            </button>
            <button class="w-10 h-10 bg-white rounded-full shadow-lg hover:scale-110 transition">
              <img src="/assets/Quick View.png" class="w-5 h-5 mx-auto" alt="Quick View" />
            </button>
          </div>
          <img :src="product.image" :alt="product.name"
            class="absolute inset-0 mx-auto my-auto w-[190px] h-[170px] object-contain transition-transform duration-300 group-hover:scale-110" />

          <button @click.stop="addToCart(product)"
            class="absolute bottom-0 left-0 w-full h-12 bg-black text-white font-medium opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-900 z-10">
            Add To Cart
          </button>
        </div>

        <div class="mt-4 text-center lg:text-left">
          <h3 class="font-semibold text-base line-clamp-2">{{ product.name }}</h3>
          <div class="flex items-center justify-center lg:justify-start gap-3 mt-2">
            <span class="text-[#DB4444] font-bold text-lg">${{ product.price }}</span>
            <span v-if="product.originalPrice" class="text-gray-400 line-through text-sm">
              ${{ product.originalPrice }}
            </span>
          </div>
          <div class="flex items-center justify-center lg:justify-start gap-3 mt-2">
            <img src="/assets/Five star.png" class="w-[100px] h-[20px]" alt="Rating" />
            <span class="text-gray-500 text-sm font-semibold">({{ product.reviews || 88 }})</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col lg:flex-row justify-between items-center w-full max-w-[1170px] mx-auto lg:ml-10 h-auto lg:h-[500px] bg-black p-4 sm:p-10 mt-10 sm:mt-20 gap-4 lg:gap-0">
  <div class="flex flex-col items-center lg:items-start gap-2 text-center lg:text-left">
    <span class="text-[#00FF66] text-xs sm:text-sm">Categories</span>
    <span class="text-2xl sm:text-[48px] text-white font-bold leading-tight">Enhance Your<br class="hidden lg:block"> Music Experience</span>
    <div class="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-4 mt-4">
      <div class="rounded-full w-12 h-12 sm:w-[62px] sm:h-[62px] bg-white items-center justify-center flex flex-col">
        <p class="text-sm sm:text-2xl font-bold">{{ String(timeLeft.hours).padStart(2, '0') }}</p>
        <span class="text-[10px] text-gray-600">Hours</span>
      </div>
      <div class="rounded-full w-12 h-12 sm:w-[62px] sm:h-[62px] bg-white items-center justify-center flex flex-col">
        <p class="text-sm sm:text-2xl font-bold">{{ String(timeLeft.days).padStart(2, '0') }}</p>
        <span class="text-[10px] text-gray-600">Days</span>
      </div>
      <div class="rounded-full w-12 h-12 sm:w-[62px] sm:h-[62px] bg-white items-center justify-center flex flex-col">
        <p class="text-sm sm:text-2xl font-bold">{{ String(timeLeft.minutes).padStart(2, '0') }}</p>
        <span class="text-[10px] text-gray-600">Minutes</span>
      </div>
      <div class="rounded-full w-12 h-12 sm:w-[62px] sm:h-[62px] bg-white items-center justify-center flex flex-col">
        <p class="text-sm sm:text-2xl font-bold">{{ String(timeLeft.seconds).padStart(2, '0') }}</p>
        <span class="text-[10px] text-gray-600">Seconds</span>
      </div>
    </div>
    <button class="bg-[#00FF66] text-white text-xs sm:text-sm w-full sm:w-[171px] h-[40px] sm:h-[56px] rounded-sm hover:bg-[#DB4444] cursor-pointer mt-4">
      Buy Now!
    </button>
  </div>
  <div class="relative w-full lg:w-fit flex justify-center lg:items-center h-auto lg:h-[500px]">
    <img src="/assets/Ellipse 23.png" class="w-full max-w-[568px] h-auto lg:h-[500px] absolute top-[-40px] lg:top-[-80px] left-0 z-0" />
    <img src="/assets/Frame 694.png" class="w-full max-w-[568px] h-auto lg:h-[330px] relative z-10" />
  </div>
</div>
  </div>
  <!-- Our Products Section -->
  <div class="max-w-7xl mx-auto px-4 mt-20">
    <div class="flex items-center justify-between max-w-7xl mx-auto px-4 mt-20">
        <!-- Categories Grid -->
    <div>
      <div class="flex items-center gap-4">
        <div class="w-4 h-8 bg-[#DB4444] rounded"></div>
      <span class="text-[#DB4444] font-semibold text-base sm:text-lg">Our Products</span>
      </div>
      <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <div class="flex items-center gap-16">
          <h1 class="text-2xl lg:text-4xl lg:mt-5 font-bold">Explore Our Products</h1>
        </div>
      </div>
    </div>
    <!-- Navigation buttons -->
      <div class="flex gap-2 mt-8 lg:mt-3">
        <button class="p-2 sm:p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition">
          <img src="/assets/icons_arrow-left.png" class="w-5 sm:w-6 h-5 sm:h-6" />
        </button>
        <button class="p-2 sm:p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition">
          <img src="/assets/icons arrow-right.png" class="w-5 sm:w-6 h-5 sm:h-6" />
        </button>
      </div>
    </div>
    <!-- Products Grid I -->
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8 mt-10 justify-items-center">
      <div v-for="product in products" :key="product.id" class="w-full max-w-[270px] group cursor-pointer" @click="goToProductDetail(product)">
        <div
          class="relative bg-[#F5F5F5] h-[250px] rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
          <div
            class="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <button @click.stop="addToWishlist(product)"
              class="w-10 h-10 bg-white rounded-full shadow-lg hover:scale-110 transition">
              <img src="/assets/Vector4.png" class="w-5 h-5 mx-auto" alt="Wishlist" />
            </button>
            <button class="w-10 h-10 bg-white rounded-full shadow-lg hover:scale-110 transition">
              <img src="/assets/Quick View.png" class="w-5 h-5 mx-auto" alt="Quick View" />
            </button>
          </div>
          <img :src="product.image" :alt="product.name"
            class="absolute inset-0 mx-auto my-auto w-[190px] h-[170px] object-contain transition-transform duration-300 group-hover:scale-110" />

          <button @click.stop="addToCart(product)"
            class="absolute bottom-0 left-0 w-full h-12 bg-black text-white font-medium opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-900 z-10">
            Add To Cart
          </button>
        </div>

        <div class="mt-4 text-center lg:text-left">
          <h3 class="font-semibold text-base line-clamp-2">{{ product.name }}</h3>
          <div class="flex items-center justify-center lg:justify-start gap-3 mt-2">
            <span class="text-[#DB4444] font-bold text-lg">${{ product.price }}</span>
            <span v-if="product.originalPrice" class="text-gray-400 line-through text-sm">
              ${{ product.originalPrice }}
            </span>
          </div>
          <div class="flex items-center justify-center lg:justify-start gap-3 mt-2">
            <img src="/assets/Five star.png" class="w-[100px] h-[20px]" alt="Rating" />
            <span class="text-gray-500 text-sm font-semibold">({{ product.reviews || 88 }})</span>
          </div>
        </div>
      </div>
    </div>
    <!-- Products Grid II -->
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8 mt-10 justify-items-center">
      <div v-for="(product, index) in products" :key="product.id" class="w-full max-w-[270px] group cursor-pointer" @click="goToProductDetail(product)">
        <div
          class="relative bg-[#F5F5F5] h-[250px] rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
          <span v-if="index === 0 || index === 2 || index === 4"
            class="absolute top-4 left-4 bg-[#00FF66] text-white text-xs font-medium px-3 py-1 rounded z-10">
            New
          </span>
          <div
            class="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <button @click.stop="addToWishlist(product)"
              class="w-10 h-10 bg-white rounded-full shadow-lg hover:scale-110 transition">
              <img src="/assets/Vector4.png" class="w-5 h-5 mx-auto" alt="Wishlist" />
            </button>
            <button class="w-10 h-10 bg-white rounded-full shadow-lg hover:scale-110 transition">
              <img src="/assets/Quick View.png" class="w-5 h-5 mx-auto" alt="Quick View" />
            </button>
          </div>
          <img :src="product.image" :alt="product.name"
            class="absolute inset-0 mx-auto my-auto w-[190px] h-[170px] object-contain transition-transform duration-300 group-hover:scale-110" />

          <button @click.stop="addToCart(product)"
            class="absolute bottom-0 left-0 w-full h-12 bg-black text-white font-medium opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-900 z-10">
            Add To Cart
          </button>
        </div>

        <div class="mt-4 text-center lg:text-left">
          <h3 class="font-semibold text-base line-clamp-2">{{ product.name }}</h3>
          <div class="flex items-center justify-center lg:justify-start gap-3 mt-2">
            <span class="text-[#DB4444] font-bold text-lg">${{ product.price }}</span>
            <span v-if="product.originalPrice" class="text-gray-400 line-through text-sm">
              ${{ product.originalPrice }}
            </span>
          </div>
          <div class="flex items-center justify-center lg:justify-start gap-3 mt-2">
            <img src="/assets/Five star.png" class="w-[100px] h-[20px]" alt="Rating" />
            <span class="text-gray-500 text-sm font-semibold">({{ product.reviews || 88 }})</span>
          </div>
          <div v-if="index === 0 || index === 4" class="flex items-center gap-2 mt-4">
            <div class="rounded-full bg-white border border-black w-[18px] h-[18px] items-center justify-center flex">
              <div class="rounded-full bg-[#FB1314] w-[12px] h-[12px] border-black"></div>
            </div>
            <div class="rounded-full bg-[#DB4444] w-[18px] h-[18px] border-black"></div>
          </div>
          <div v-else-if="index === 1" class="flex items-center gap-2 mt-4">
            <div class="rounded-full bg-white border border-black w-[18px] h-[18px] items-center justify-center flex">
              <div class="rounded-full bg-[#EEFF61] w-[12px] h-[12px] border-black"></div>
            </div>
            <div class="rounded-full bg-[#DB4444] w-[18px] h-[18px] border-black"></div>
          </div>
          <div v-else-if="index === 2" class="flex items-center gap-2 mt-4">
            <div class="rounded-full bg-white border border-black w-[18px] h-[18px] items-center justify-center flex">
              <div class="rounded-full bg-black w-[12px] h-[12px] border-black"></div>
            </div>
            <div class="rounded-full bg-[#DB4444] w-[18px] h-[18px] border-black"></div>
          </div>
          <div v-else="index === 3" class="flex items-center gap-2 mt-4">
            <div class="rounded-full bg-white border border-black w-[18px] h-[18px] items-center justify-center flex">
              <div class="rounded-full bg-[#184A48] w-[12px] h-[12px] border-black"></div>
            </div>
            <div class="rounded-full bg-[#DB4444] w-[18px] h-[18px] border-black"></div>
          </div>
        </div>
      </div>
    </div>
   <!-- View All Products -->
    <div class="flex justify-center mt-8">
      <button class="bg-[#DB4444] text-white px-8 sm:px-12 py-3 sm:py-4 rounded hover:bg-red-600 transition text-base sm:text-lg font-medium">
        View All Products
      </button>
    </div>
    <!-- Our Products Section -->
    <div class="flex items-center justify-between max-w-7xl mx-auto px-4 mt-20">
      <div>
      <div class="flex items-center gap-4">
        <div class="w-4 h-8 bg-[#DB4444] rounded"></div>
      <span class="text-[#DB4444] font-semibold text-base sm:text-lg">Featured</span>
      </div>
      <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <div class="flex items-center gap-16">
          <h1 class="text-2xl lg:text-4xl lg:mt-5 font-bold">New Arrival</h1>
        </div>
      </div>
    </div>
    </div>
    <div class="mt-0 lg:mt-10 w-full lg:w-auto flex flex-col gap-5 mt-5 items-center">
      <img src="/assets/Frame 739.png" />
      <img src="/assets/Frame 702.png" class="w-[943px]" />
    </div>
    <div class="flex justify-end">
    <button class="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition">
      <img src="/assets/icons_arrow-up.png" class="w-6 h-6" />
    </button>
    </div>
  </div>
</template>