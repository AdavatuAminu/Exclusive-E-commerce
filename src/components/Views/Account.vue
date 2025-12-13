<script>
import ButtonComponents from './ButtonComponents.vue';

export default {
    name: "Account",
    components: { ButtonComponents }
}
</script>
<template>
    <div class="pl-10 pt-10">
        <div class="flex justify-between">
            <div class="flex items-center space-x-2 text-gray-600 mb-8">
                <span class="font-medium hover:text-black cursor-pointer">Home</span>
                <span>/</span>
                <span class="text-black font-semibold">Account</span>
            </div>
            <div class="flex px-30 gap-2">
                <span>Welcome!</span>
                <span class="text-[#DB4444]">Guest</span>
            </div>
        </div>
        <div class="flex gap-10">
            <div class="flex px-5 py-5 flex-col gap-10 w-[340px] h-[457px]">
                <div class="flex flex-col items-left gap-2">
                    <span class="text-md font-bold">Manage My Account</span>
                    <div class="flex flex-col items-left px-5">
                        <span class="text-md text-[#DB4444] hover:text-gray-300 cursor-pointer">My Profile</span>
                        <span class="text-md text-gray-500">Address Book</span>
                        <span class="text-md text-gray-500">My Payment Options</span>
                    </div>
                </div>
                <div class="flex flex-col items-left gap-2">
                    <span class="text-md font-bold">My Orders</span>
                    <div class="flex flex-col items-left px-5">
                        <span class="text-md text-gray-500">My returns</span>
                        <span class="text-md text-gray-500">My Cancellations</span>
                    </div>
                </div>
                <div class="flex flex-col items-left gap-2">
                    <span class="text-md font-bold">My Wishlist</span>
                </div>
            </div>
            <div class="w-[800px] h-[630px] bg-white shadow-lg px-10 py-10">
                <span class="text-md text-[#DB4444]">Edit Your Profile</span>
                <div>
                <div class="flex gap-10 mt-2">
                    <div>
                        <span class="text-[16px]">First Name</span>
                        <input type="text" placeholder="Aliyu"
                            class="w-[330px] h-[50px] bg-[#F5F5F5] rounded-sm px-2 py-2"></input>
                    </div>
                    <div>
                        <span class="text-[16px]">Last Name</span>
                        <input type="text" placeholder="Aminu"
                            class="w-[330px] h-[50px] bg-[#F5F5F5] rounded-sm px-2 py-2"></input>
                    </div>
                </div>
                <div class="flex gap-10 mt-2">
                    <div>
                        <span class="text-[16px]">Email</span>
                        <input type="text" placeholder="aliyuaminu3369@gmail.com"
                            class="w-[330px] h-[50px] bg-[#F5F5F5] rounded-sm px-2 py-2"></input>
                    </div>
                    <div class="ml-2">
                        <span class="text-[16px]">Address</span>
                        <input type="text" placeholder="No 22 Kaduna"
                            class="w-[330px] h-[50px] bg-[#F5F5F5] rounded-sm px-2 py-2"></input>
                    </div>
                </div>
                </div>
                <div class="mt-2">
                    <span class="text-[16px]">Password Changes</span>
                    <input type="text" placeholder="Current Password"
                        class="w-[710px] h-[50px] bg-[#F5F5F5] rounded-sm px-2"></input>
                </div>
                <div class="mt-2">
                    <input type="text" placeholder="Current Password"
                        class="w-[710px] h-[50px] bg-[#F5F5F5] rounded-sm px-2"></input>
                </div>
                <div class="mt-2">
                    <input type="text" placeholder="Current Password"
                        class="w-[710px] h-[50px] bg-[#F5F5F5] rounded-sm px-2"></input>
                </div>
                <div class="flex items-center gap-5 mt-10 justify-end">
                    <span>Cancel</span>
                    <router-link to="/homepage/error">
                        <ButtonComponents label="Save Changes" weight="159px" />
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>