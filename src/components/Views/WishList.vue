<script>
import { mapState, mapActions, mapGetters } from "vuex";
import ButtonComponents from "@/components/Views/ButtonComponents.vue";

export default {
  name: "WishList",
  components: { ButtonComponents },

  computed: {
    ...mapState("products", ["items"]),
    ...mapGetters("wishlist", ["wishlistItems"]),

    wishlist() {
      return this.wishlistItems; 
    },
  },

  methods: {
      ...mapActions('cart', ['addToCart']),
    ...mapActions("wishlist", ["updateQuantity", "removeFromWishlist"])
  },
};
</script>



<template>
    <div class="max-w-7xl mx-auto px-4 mt-10 sm:mt-20">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <span class="text-lg sm:text-[20px]">WishList (4)</span>
            <ButtonComponents label="Move All To Bag" bgColor="white" textColor="black" height="56px" weight="159px" border="1px solid #013C61" class="w-full sm:w-auto" />
        </div>

        <!-- Products Grid I-->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-10 justify-items-center">
            <div v-for="product in wishlist" :key="product.id" class="w-full max-w-[270px] group cursor-pointer">
                <div class="relative bg-[#F5F5F5] h-[200px] sm:h-[250px] rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                    <span v-if="product.discount" class="absolute top-2 sm:top-4 left-2 sm:left-4 bg-[#DB4444] text-white text-xs font-medium px-2 sm:px-3 py-1 rounded z-10">
                        -{{ product.discount }}%
                    </span>
                    <div class="absolute top-2 sm:top-4 right-2 sm:right-4 flex flex-col gap-2 sm:gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        <button @click="removeFromWishlist(product.id)" class="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full shadow-lg hover:scale-110 transition">
                            <img src="/assets/icon-delete.png" class="w-4 h-4 sm:w-5 sm:h-5 mx-auto" alt="Delete" />
                        </button>
                    </div>
                    <img :src="product.image" :alt="product.name" class="absolute inset-0 mx-auto my-auto w-[150px] sm:w-[190px] h-[130px] sm:h-[170px] object-contain transition-transform duration-300 group-hover:scale-110" />
                    <button @click.stop="addToCart(product)" class="flex justify-center items-center gap-1 sm:gap-2 absolute bottom-0 left-0 w-full h-10 sm:h-12 bg-black text-white font-medium text-xs sm:text-base opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-900 z-10">
                        <img src="/assets/Cart1.png" class="w-6 h-6 sm:w-8 sm:h-8" />Add To Cart
                    </button>
                </div>
                <div class="mt-3 sm:mt-4 text-center lg:text-left">
                    <h3 class="font-semibold text-sm sm:text-base line-clamp-2">{{ product.name }}</h3>
                    <div class="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mt-2">
                        <span class="text-[#DB4444] font-bold text-base sm:text-lg">${{ product.price }}</span>
                        <span v-if="product.originalPrice" class="text-gray-400 line-through text-xs sm:text-sm">${{ product.originalPrice }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-8 sm:mt-10">
            <div class="flex items-center gap-2 sm:gap-4">
                <div class="w-4 h-8 sm:w-5 sm:h-10 bg-[#DB4444] rounded"></div>
                <span class="text-[#DB4444] font-semibold text-base sm:text-lg">Just For You</span>
            </div>
            <ButtonComponents label="See All" bgColor="white" textColor="black" height="56px" weight="150px" border="1px solid #013C61" class="w-full sm:w-auto" />
        </div>
        <!-- Products Grid II -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-10 justify-items-center">
            <div v-for="product in wishlist" :key="product.id" class="w-full max-w-[270px] group cursor-pointer">
                <div class="relative bg-[#F5F5F5] h-[200px] sm:h-[250px] rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                    <span v-if="product.discount" class="absolute top-2 sm:top-4 left-2 sm:left-4 bg-[#DB4444] text-white text-xs font-medium px-2 sm:px-3 py-1 rounded z-10">
                        -{{ product.discount }}%
                    </span>
                    <div class="absolute top-2 sm:top-4 right-2 sm:right-4 flex flex-col gap-2 sm:gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        <button class="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full shadow-lg hover:scale-110 transition">
                            <img src="/assets/Quick View.png" class="w-4 h-4 sm:w-5 sm:h-5 mx-auto" alt="Quick View" />
                        </button>
                    </div>
                    <img :src="product.image" :alt="product.name" class="absolute inset-0 mx-auto my-auto w-[150px] sm:w-[190px] h-[130px] sm:h-[170px] object-contain transition-transform duration-300 group-hover:scale-110" />
                    <button @click.stop="addToCart(product)" class="flex justify-center items-center gap-1 sm:gap-2 absolute bottom-0 left-0 w-full h-10 sm:h-12 bg-black text-white font-medium text-xs sm:text-base opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-900 z-10">
                        <img src="/assets/Cart1.png" class="w-6 h-6 sm:w-8 sm:h-8" />Add To Cart
                    </button>
                </div>
                <div class="mt-3 sm:mt-4 text-center lg:text-left">
                    <h3 class="font-semibold text-sm sm:text-base line-clamp-2">{{ product.name }}</h3>
                    <div class="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mt-2">
                        <span class="text-[#DB4444] font-bold text-base sm:text-lg">${{ product.price }}</span>
                        <span v-if="product.originalPrice" class="text-gray-400 line-through text-xs sm:text-sm">${{ product.originalPrice }}</span>
                    </div>
                    <div class="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mt-2">
                        <img src="/assets/Five star.png" class="w-[80px] h-[16px] sm:w-[100px] sm:h-[20px]" alt="Rating" />
                        <span class="text-gray-500 text-xs sm:text-sm font-semibold">({{ product.reviews || 88 }})</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>