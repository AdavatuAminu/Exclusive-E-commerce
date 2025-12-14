<script>
import ButtonComponents from './ButtonComponents.vue';

export default {
    name: "Contact",
    components: { ButtonComponents }
}
</script>
<template>
    <div class="px-4 py-6 sm:px-10 sm:py-10">
        <div class="flex items-center space-x-2 text-gray-600 mb-6 sm:mb-8">
            <span class="font-medium hover:text-black cursor-pointer">Home</span>
            <span>/</span>
            <span class="text-black font-semibold">Contact</span>
        </div>
        <div class="flex flex-col lg:flex-row gap-4 lg:gap-10 items-start lg:items-center">
            <div class="flex flex-col gap-6 sm:gap-10 w-full lg:w-[340px] h-auto lg:h-[457px] bg-white shadow-lg p-4 sm:p-5">
                <div class="flex gap-2 items-center">
                    <img src="/assets/icons-phone.png" class="w-8 h-8 sm:w-[40px] sm:h-[40px]" />
                    <span class="text-xs sm:text-sm">Call to us</span>
                </div>
                <div class="flex flex-col gap-2">
                    <span class="text-xs sm:text-sm">We are available 24/7, 7 days a week.</span>
                    <span class="text-xs sm:text-sm">Phone: +8801611112222</span>
                </div>
                <div class="border border-gray-600"></div>
                <div class="flex gap-2 items-center">
                    <img src="/assets/icons-mail.png" class="w-8 h-8 sm:w-[40px] sm:h-[40px]" />
                    <span class="text-xs sm:text-sm">Write to us</span>
                </div>
                <div class="flex flex-col gap-2">
                    <span class="text-xs sm:text-sm">Fill out our form and we will contact<br class="hidden sm:block" /> you within 24 hours.</span>
                    <span class="text-xs sm:text-sm">Emails: customer@exclusive.com</span>
                    <span class="text-xs sm:text-sm">Emails: support@exclusive.com</span>
                </div>
            </div>
            <div class="w-full lg:w-[800px] h-auto lg:h-[457px] bg-white shadow-lg p-4 sm:p-5">
                <div class="flex flex-col sm:flex-row gap-4 justify-between">
                    <input type="text" placeholder="Your Name *" class="w-full h-[50px] bg-[#F5F5F5] rounded-sm px-2 py-2 text-sm" />
                    <input type="text" placeholder="Email *" class="w-full h-[50px] bg-[#F5F5F5] rounded-sm px-2 py-2 text-sm" />
                    <input type="text" placeholder="Phone Number *" class="w-full h-[50px] bg-[#F5F5F5] rounded-sm px-2 py-2 text-sm" />
                </div>
                <div class="mt-6 sm:mt-10">
                    <input type="text" placeholder="Your message" class="w-full h-[150px] sm:h-[207px] bg-[#F5F5F5] rounded-sm text-start pt-2 pb-4 px-2 text-sm resize-none" />
                </div>
                <div class="mt-6 sm:mt-10 flex justify-center lg:justify-end">
                    <router-link to="/homepage/error">
                        <ButtonComponents label="Send Message" weight="159px" />
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>