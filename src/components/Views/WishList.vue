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
    <div class="max-w-7xl mx-auto px-4 mt-20">
        <div class="flex justify-between">
            <span class="text-[20px]">WishList (4)</span>
            <ButtonComponents label="Move All To Bag" bgColor="white" textColor="black" height="56px" weight="223px"
                border="1px solid #013C61" class="mt-3 sm:mt-0" />

        </div>

        <!-- Products Grid I-->
        <div
            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8 mt-10 justify-items-center">
            <div v-for="product in wishlist" :key="product.id" class="w-full max-w-[270px] group cursor-pointer">
                <div
                    class="relative bg-[#F5F5F5] h-[250px] rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                    <span v-if="product.discount"
                        class="absolute top-4 left-4 bg-[#DB4444] text-white text-xs font-medium px-3 py-1 rounded z-10">
                        -{{ product.discount }}%
                    </span>
                    <div
                        class="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        <button @click="removeFromWishlist(product.id)"
                        class="w-10 h-10 bg-white rounded-full shadow-lg hover:scale-110 transition">
                            <img src="/assets/icon-delete.png" class="w-5 h-5 mx-auto" alt="Wishlist" />
                        </button>
                    </div>
                    <img :src="product.image" :alt="product.name"
                        class="absolute inset-0 mx-auto my-auto w-[190px] h-[170px] object-contain transition-transform duration-300 group-hover:scale-110" />

                    <button @click.stop="addToCart(product)"
                        class="flex justify-center items-center gap-2 absolute bottom-0 left-0 w-full h-12 bg-black text-white font-medium opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-900 z-10">
                        <img src="/assets/Cart1.png" class="w-8 h-8" />Add To Cart
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
                </div>
            </div>
        </div>
        <div class="flex justify-between mt-10">
            <div class="flex items-center gap-4">
                <div class="w-5 h-10 bg-[#DB4444] rounded"></div>
                <span class="text-[#DB4444] font-semibold text-lg">Just For You</span>
            </div>
            <ButtonComponents label="See All" bgColor="white" textColor="black" height="56px" weight="150px"
                border="1px solid #013C61" class="mt-3 sm:mt-0" />

        </div>
        <!-- Products Grid II -->
        <div
            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8 mt-10 justify-items-center">
            <div v-for="product in wishlist" :key="product.id" class="w-full max-w-[270px] group cursor-pointer">
                <div
                    class="relative bg-[#F5F5F5] h-[250px] rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                    <span v-if="product.discount"
                        class="absolute top-4 left-4 bg-[#DB4444] text-white text-xs font-medium px-3 py-1 rounded z-10">
                        -{{ product.discount }}%
                    </span>
                    <div
                        class="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        <button class="w-10 h-10 bg-white rounded-full shadow-lg hover:scale-110 transition">
                            <img src="/assets/Quick View.png" class="w-5 h-5 mx-auto" alt="Quick View" />
                        </button>
                    </div>
                    <img :src="product.image" :alt="product.name"
                        class="absolute inset-0 mx-auto my-auto w-[190px] h-[170px] object-contain transition-transform duration-300 group-hover:scale-110" />
                    <button @click.stop="addToCart(product)"
                        class="flex justify-center items-center gap-2 absolute bottom-0 left-0 w-full h-12 bg-black text-white font-medium opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-900 z-10">
                        <img src="/assets/Cart1.png" class="w-8 h-8" />Add To Cart
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
    </div>

</template>