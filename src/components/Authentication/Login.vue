<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
export default {
    name: "Login",
    components: { Header, Footer },
    data() {
        return {
            Email: "",
            Password: "",
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

  <!-- Wrapper -->
  <div class="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-10 px-4 py-10">

    <!-- Image (hidden on mobile) -->
    <div class="hidden lg:block">
      <img
        src="/assets/dl.beatsnoop 1.png"
        class="max-w-[800px] w-full h-auto"
        alt="Login visual"
      />
    </div>

    <!-- Login Card -->
    <div class="w-full max-w-md p-6 sm:p-8">

      <h1 class="text-2xl sm:text-3xl font-semibold text-black">
        Log in to Exclusive
      </h1>

      <p class="text-sm text-black mt-1">
        Enter your details below
      </p>

      <!-- Email -->
      <div class="mt-6">
        <label class="text-[#6A7E8A] text-xs">Email</label>
        <input
          v-model="Email"
          placeholder="Email or Phone Number"
          type="email"
          class="mt-2 w-full border-b border-black/50 text-base text-[#013C61] focus:outline-none py-2"
        />
      </div>

      <!-- Password -->
      <div class="mt-6">
        <label class="text-[#6A7E8A] text-xs">Password</label>
        <input
          v-model="Password"
          placeholder="Enter your password..."
          type="password"
          class="mt-2 w-full border-b border-black/50 text-base text-[#013C61] focus:outline-none py-2"
        />
      </div>

      <!-- Actions -->
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-10">

        <router-link to="/homepage">
          <button
            @click="handleContinue"
            class="bg-[#DB4444] text-white h-12 px-10 rounded-sm text-base w-full sm:w-auto"
          >
            Log in
          </button>
        </router-link>

        <router-link
          to=""
          class="text-[#DB4444] text-sm text-center sm:text-left"
        >
          Forget Password?
        </router-link>

      </div>

    </div>
  </div>

  <Footer />
</template>

