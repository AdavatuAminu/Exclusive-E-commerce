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
    <div class="pl-10 pt-10">
        <div class="flex justify-between">
            <div class="flex items-center space-x-2 text-gray-600 mb-8">
                <span class="font-medium hover:text-black cursor-pointer">Account</span>
                <span>/</span>
                <span class="font-semibold">Gaming</span>
                <span>/</span>
                <span class="text-black font-semibold">Havic HV G-92 Gamepad</span>
            </div>
        </div>
    </div>
    <div class="max-w-7xl mx-auto px-4 mt-20">
        <div class="flex items-center justify-between max-w-7xl mx-auto px-4 mt-20">
        </div>
        <div class="flex gap-5 px-5 py-2">
            <div class="flex px-5 py-5 flex-col gap-10 w-[770px] h-[457px]">
                <!-- Right Side -->
                <div class="flex items-start gap-4">
                    <div class="flex flex-col items-start gap-4">
                        <img src="/assets/Frame 895.png" class="w-[170px] h-[138px]" />
                        <img src="/assets/Frame 896.png" class="w-[170px] h-[138px]" />
                        <img src="/assets/Frame 897.png" class="w-[170px] h-[138px]" />
                        <img src="/assets/Frame 919.png" class="w-[170px] h-[138px]" />
                    </div>
                    <img src="/assets/Frame 894.png" class="w-[500px] h-[600px]" />
                </div>
            </div>
            <!-- Left Side -->
            <div class="w-[410px] h-[630px] px-5 py-5">
                <div class="flex flex-col gap-3 items-left">
                    <span class="text-[24px] font-bold">Havic HV G-92 Gamepad</span>
                    <div class="flex gap-2">
                        <img src="/assets/Five star.png" class="w-[100px] h-[20px]" alt="Rating" />
                        <span class="text-gray-500 text-sm font-semibold">(150 reviews)</span>
                        <span class="text-black text-sm font-semibold">|</span>
                        <span class="text-[#00FF66] text-sm font-semibold">In Stocks</span>
                    </div>
                    <span class="text-black text-2xl">$192.00</span>
                    <span class="text-black text-sm">PlayStation 5 Controller Skin High quality vinyl with air <br />
                        channel adhesive for easy bubble free install & mess<br />
                        free removal Pressure sensitive.</span>
                    <div class="border border-gray-500 w-[399px] mt-3 mb-3"></div>
                    <div class="flex gap-3 items-center">
                        <span class="text-black text-2xl">Colours:</span>
                        <img src="/assets/Colour Chnage.png" class="w-[48x] h-[20px]" alt="Rating" />
                    </div>
                    <div class="flex gap-3 items-center">
                    <span class="text-black text-2xl">Size:</span>
                    <div class="flex gap-4">
                    <div class="border border-black rounded-sm px-1 py-1 text-center w-[32px] h-[32px]">
                        <span class="text-md font-bold">XS</span>
                    </div>
                    <div class="border border-black rounded-sm px-1 py-1 text-center w-[32px] h-[32px]">
                        <span class="text-md font-bold">S</span>
                    </div>
                    <div class="bg-[#DB4444] rounded-sm px-1 py-1 text-center w-[32px] h-[32px]">
                        <span class="text-md font-bold text-white">M</span>
                    </div>
                    <div class="border border-black rounded-sm px-1 py-1 text-center w-[32px] h-[32px]">
                        <span class="text-md font-bold">L</span>
                    </div>
                    <div class="border border-black rounded-sm px-1 py-1 text-center w-[32px] h-[32px]">
                        <span class="text-md font-bold">XL</span>
                    </div>
                    </div>
                 </div>
                </div>
                <div class="flex items-center gap-2 mt-10 justify-center mb-5">
                    <!-- Counter here -->
                    <div class="border border-black rounded-sm flex items-center overflow-hidden h-[40px]">
                        <button 
                            @click="decreaseQuantity" 
                            class="border-r border-black p-2 flex items-center justify-center w-[40px] h-[40px] text-lg font-bold hover:bg-[#DB4444] hover:text-white transition-colors"
                            :disabled="quantity <= 1"
                        >
                            -
                        </button>
                        <span class="border-r border-black px-4 py-2 text-xl font-bold min-w-[40px] text-center">{{ quantity }}</span>
                        <button 
                            @click="increaseQuantity" 
                            class="p-2 flex items-center justify-center w-[40px] h-[40px] text-lg font-bold hover:bg-[#DB4444] hover:text-white transition-colors"
                        >
                            +
                        </button>
                    </div>
                    <!-- Counter here -->
                    <router-link to="/homepage/error">
                        <ButtonComponents label="Buy Now" weight="159px" />
                    </router-link>
                    <div class="border border-black rounded-sm p-2 items-center w-[40px] h-[40px]">
                        <img src="/assets/Vector4.png" class="w-5 h-5"/>
                    </div>
                </div>
                <div class="flex gap-3 items-center">
                    <img src="/assets/Frame 911.png" class="w-[399x] h-[180px]" alt="Like" />
                </div>
            </div>
        </div>
        <div>
            <div class="flex items-center gap-4">
                <div class="w-5 h-10 bg-[#DB4444] rounded"></div>
                <span class="text-[#DB4444] font-semibold text-lg">Related Item</span>
            </div>
        </div>
        <!-- Products Grid I -->
        <div
            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8 mt-10 justify-items-center">
            <div v-for="product in products" :key="product.id" class="w-full max-w-[270px] group cursor-pointer">
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
    </div>
</template>