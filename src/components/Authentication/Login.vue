<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
export default {
    name: "Login",
    components: { Header, Footer },
    data() {
        return {
            Email: "aliyuaminu3369@gmail.com",
            Password: "abcd1234",
        };
    },
    methods: {
        handleContinue() {
            if (!this.Email || !this.Password) {
                alert("Please fill all fields before continuing.");
                return;
            }
            if (
                this.Email === "aliyuaminu3369@gmail.com" &&
                this.Password === "abcd1234"
            ) {
                localStorage.setItem("authToken", "sample_token");

                this.$router.push({ name: "HomePage" });
            } else {
                alert("Invalid email or password. Please try again.");
            }
        },
    },
};
</script>
<template>
    <Header />
    <div class="flex space-x-20">
        <div>
            <img src="/assets/dl.beatsnoop 1.png" class="w-[805px] h-[701px] pt-10 pb-10"></img>
        </div>
        <div class="p-9 bg-white w-[490px] h-[410px] mt-20">
            <h1 class="text-[36px] text-black">Log in to Exclusive</h1>
            <h1 class="text-[16px] text-black">Enter your details below</h1>
            <div class="mt-5">
                <h2 class="text-[#6A7E8A] text-[12px]">Email</h2>
                <div class="flex space-x-2">
                    <input v-model="Email" placeholder="Email or Phone Number" type="email"
                        class="text-[#013C61] text-[16px] mt-3 block w-[420px] border-none focus:outline-none" />
                    <img src="" class="w-[11px] h-[12px] mt-4" />
                </div>
                <div class="border-b-2 w-[370px] text-[#000000]/50 mt-1"></div>
            </div>

            <div class="mt-5">
                <h2 class="text-[#6A7E8A] text-[12px]">Password</h2>
                <div class="flex space-x-2">
                    <input v-model="Password" placeholder="Enter your password..." type="password"
                        class="text-[#013C61] text-[16px] mt-3 block w-[420px] border-none focus:outline-none" />
                    <img src="" class="w-[13px] h-[10px] mt-4" />
                </div>
                <div class="border-b-2 w-[370px] text-[#000000]/50 mt-1"></div>
            </div>

            <div class="flex justify-center items-center mt-10 space-x-10">
                <router-link to="/homepage">
                    <button @click="handleContinue"
                    class="bg-[#DB4444] text-white h-[56px] w-[143px] rounded-sm text-[18px] font-normal">
                    Log in
                </button>
                </router-link>
                
                <router-link to=""
                class="text-[#DB4444] text-[16px]">
                Forget Password?
                </router-link>
                
            </div>
        </div>
    </div>
    <Footer />
</template>
