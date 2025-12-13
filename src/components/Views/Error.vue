<script>
import ButtonComponents from './ButtonComponents.vue';

export default {
    name: "Error",
    components: { ButtonComponents }
}
</script>
<template>
    <div class="pl-10 pt-10">
        <div class="flex items-center space-x-2 text-gray-600 mb-8">
            <span class="font-medium hover:text-black cursor-pointer">Home</span>
            <span>/</span>
            <span class="text-black font-semibold">Error</span>
        </div>
            <div class="px-5 py-5">
                <div class="flex flex-col gap-10 items-center">
                <span class="text-[110px] font-bold">404 Not Found</span>
                <span class="text-[16px]">Your visited page not found. You may go home page.</span>
                </div>
                <div class="mt-10 flex justify-center">
                    <router-link to="/homepage">
                <ButtonComponents label="Back to homepage" weight="159px" />
                </router-link>
                </div>
            </div>
    </div>
</template>