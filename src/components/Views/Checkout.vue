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
    <div class="px-10 py-8">
        <div class="flex items-center space-x-2 text-gray-600 mb-8">
            <span class="font-medium hover:text-black cursor-pointer">Account</span>
            <span>/</span>
            <span class="font-medium hover:text-black cursor-pointer">My Account</span>
            <span>/</span>
            <span class="font-medium hover:text-black cursor-pointer">Product</span>
            <span>/</span>
            <span class="font-medium hover:text-black cursor-pointer">View Cart</span>
            <span>/</span>
            <span class="text-black font-semibold">Checkout</span>
        </div>
        <span class="text-[36px] font-bold">Billing Details</span>
    </div>
    <div class="flex justify-between px-10 py-10">
        <div class="flex px-5 py-5 flex-col gap-10 w-[340px] h-[457px]">
            <!-- Right Side -->
            <div class="flex flex-col gap-3 mt-2">
                <div>
                    <span class="text-[16px] text-gray-500">First Name</span>
                    <input type="text" class="w-[470px] h-[50px] bg-[#F5F5F5] rounded-sm px-2 py-2"></input>
                </div>
                <div>
                    <span class="text-[16px] text-gray-500">Company Name</span>
                    <input type="text" class="w-[470px] h-[50px] bg-[#F5F5F5] rounded-sm px-2 py-2"></input>
                </div>
                <div>
                    <span class="text-[16px] text-gray-500">Street Address</span>
                    <input type="text" class="w-[470px] h-[50px] bg-[#F5F5F5] rounded-sm px-2 py-2"></input>
                </div>
                <div>
                    <span class="text-[16px] text-gray-500">Apartment, floor, etc. (optional)</span>
                    <input type="text" class="w-[470px] h-[50px] bg-[#F5F5F5] rounded-sm px-2 py-2"></input>
                </div>
                <div>
                    <span class="text-[16px] text-gray-500">Town/City</span>
                    <input type="text" class="w-[470px] h-[50px] bg-[#F5F5F5] rounded-sm px-2 py-2"></input>
                </div>
                <div>
                    <span class="text-[16px] text-gray-500">Phone Number</span>
                    <input type="text" class="w-[470px] h-[50px] bg-[#F5F5F5] rounded-sm px-2 py-2"></input>
                </div>
                <div>
                    <span class="text-[16px] text-gray-500">Email Address</span>
                    <input type="text" class="w-[470px] h-[50px] bg-[#F5F5F5] rounded-sm px-2 py-2"></input>
                </div>
            </div>
            
        </div>
        <!-- Left Side -->
        <div class="w-[527px] h-[630px] px-10 py-10">
            <table class="flex gap-40 items-center">
                <tbody>
                    <tr v-for="item in cart" :key="item.id" class="flex justify-between items-center">
                        <td class="flex items-center gap-5 mb-4">
                            <img :src="item.image" class="w-[54px] h-[54px]" />
                            <span class="text-md">{{ item.name }}</span>
                        </td>
                        <td>
                            <span class="text-md">${{ item.price }}</span>
                        </td>
                    </tr>
                    <tr class="flex justify-between items-center">
                        <td>
                            <span>SubTotal:</span>
                        </td>
                        <td>
                            <span>${{ cartTotal.toFixed(2) }}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="border border-gray-500 w-[422px] mt-3 mb-3"></div>
                        </td>
                    </tr>
                    <tr class="flex justify-between items-center">
                        <td>
                            <span>Shipping:</span>
                        </td>
                        <td>
                            <span>Free</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="border border-gray-500 w-[422px] mt-3 mb-3"></div>
                        </td>
                    </tr>
                    <tr class="flex justify-between items-center">
                        <td>
                            <span>Total:</span>
                        </td>
                        <td>
                            <span>${{ cartTotal }}</span>
                        </td>
                    </tr>
                    <tr class="flex justify-between items-center mt-10">
                        <td class="flex items-center gap-5">
                            <div
                                class="rounded-full bg-white border border-black w-[18px] h-[18px] items-center justify-center flex">
                                <div class="rounded-full w-[12px] h-[12px] border-black"></div>
                            </div>
                            <span>Bank</span>
                        </td>
                        <td>
                            <img src="/assets/Frame 834.png" class="w-[192px] h-[28px]" />
                        </td>
                    </tr>
                    <tr class="flex justify-between items-center mt-10">
                        <td class="flex items-center gap-5">
                            <div
                                class="rounded-full bg-white border border-black w-[18px] h-[18px] items-center justify-center flex">
                                <div class="rounded-full bg-black w-[12px] h-[12px] border-black"></div>
                            </div>
                            <span>Cash on delivery</span>
                        </td>
                    </tr>


                </tbody>
            </table>

            <div class="flex items-center gap-5 mt-10 justify-center mb-5">
                <input placeholder="Coupon Code" class="rounded border border-black w-[300px] h-[56px] px-3"></input>
                <router-link to="/homepage/error">
                    <ButtonComponents label="Apply Coupons" weight="159px" />
                </router-link>
            </div>
            <div>
                <ButtonComponents label="Place order" weight="159px" />
            </div>
        </div>
    </div>
      <div class="flex items-center gap-2 px-15">
                    <div class="bg-[#DB4444] w-8 h-8 rounded-sm p-2 flex items-center">
                    <img src="/assets/check.png" />
                    </div>
                <span class="text-[16px]">Save this information for faster check-out next time</span>
            </div>
</template>