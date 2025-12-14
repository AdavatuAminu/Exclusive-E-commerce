<script>
import ButtonComponents from './ButtonComponents.vue';

export default {
    name: "Error",
    components: { ButtonComponents }
}
</script>
<template>
    <div class="px-4 py-6 sm:px-10 sm:py-10">
        <div class="flex items-center space-x-2 text-gray-600 mb-6 sm:mb-8">
            <span class="font-medium hover:text-black cursor-pointer">Home</span>
            <span>/</span>
            <span class="text-black font-semibold">Error</span>
        </div>
        <div class="flex flex-col items-center text-center px-4 py-5 sm:px-5 sm:py-5">
            <div class="flex flex-col gap-6 sm:gap-10 items-center">
                <span class="text-6xl sm:text-8xl lg:text-[110px] font-bold">404 Not Found</span>
                <span class="text-sm sm:text-base text-center">Your visited page not found. You may go home page.</span>
            </div>
            <div class="mt-6 sm:mt-10 flex justify-center">
                <router-link to="/homepage">
                    <ButtonComponents label="Back to homepage" weight="159px" />
                </router-link>
            </div>
        </div>
    </div>
</template>