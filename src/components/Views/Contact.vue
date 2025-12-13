<script>
import ButtonComponents from './ButtonComponents.vue';

export default {
    name: "Contact",
    components: { ButtonComponents }
}
</script>
<template>
    <div class="pl-10 pt-10">
        <div class="flex items-center space-x-2 text-gray-600 mb-8">
            <span class="font-medium hover:text-black cursor-pointer">Home</span>
            <span>/</span>
            <span class="text-black font-semibold">Contact</span>
        </div>
        <div class="flex gap-10 items-center">
            <div class="flex px-5 py-5 flex-col gap-10 w-[340px] h-[457px] bg-white shadow-lg">
                <div class="flex gap-2 items-center">
                    <img src="/assets/icons-phone.png" class="w-[40px] h-[40px]" />
                    <span class="text-sm">Call to us</span>
                </div>
                <div class="flex flex-col gap-2">
                    <span class="text-sm">We are available 24/7, 7 days a week.</span>
                    <span class="text-sm">Phone: +8801611112222</span>
                </div>
                <div class="border border-gray-600"></div>
                <div class="flex gap-2 items-center">
                    <img src="/assets/icons-mail.png" class="w-[40px] h-[40px]" />
                    <span class="text-sm">Write to us</span>
                </div>
                <div class="flex flex-col gap-2">
                    <span class="text-sm">Fill out our form and we will contact<br /> you within 24 hours.</span>
                    <span class="text-sm">Emails: customer@exclusive.com</span>
                    <span class="text-sm">Emails: support@exclusive.com</span>
                </div>
            </div>
            <div class="w-[800px] h-[457px] bg-white shadow-lg px-5 py-5">
                <div class="flex justify-between">
                    <input type="text" placeholder="Your Name *"
                        class="w-[235px] h-[50px] bg-[#F5F5F5] rounded-sm px-2 py-2"></input>
                    <input type="text" placeholder="Email *"
                        class="w-[235px] h-[50px] bg-[#F5F5F5] rounded-sm px-2 py-2"></input>
                    <input type="text" placeholder="Phone Number *"
                        class="w-[235px] h-[50px] bg-[#F5F5F5] rounded-sm px-2 py-2"></input>
                </div>
                <div class="mt-10">
                    <input type="text" placeholder="Your massage"
                        class="w-full h-[207px] bg-[#F5F5F5] rounded-sm text-start pt-2 pb-40 px-2"></input>
                </div>
                <div class="mt-10 flex justify-end">
                    <router-link to="/homepage/error">
                <ButtonComponents label="Send Message" weight="159px" />
                </router-link>
                </div>
            </div>
        </div>
    </div>
</template>