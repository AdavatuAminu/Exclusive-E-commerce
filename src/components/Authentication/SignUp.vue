<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
export default {
    name: "SignUp",
    components: { Header, Footer },
    data() {
        return {
            Name: "Aliyu Aminu Adavatu",
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

  <!-- Wrapper -->
  <div class="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-10 px-4 py-10">

    <!-- Image (desktop only) -->
    <div class="hidden lg:block">
      <img
        src="/assets/dl.beatsnoop 1.png"
        class="max-w-[800px] w-full h-auto"
        alt="Signup visual"
      />
    </div>

    <!-- Card -->
    <div class="w-full max-w-md p-6 sm:p-8">

      <h1 class="text-2xl sm:text-3xl font-semibold text-black">
        Create an account
      </h1>

      <p class="text-sm text-black mt-1">
        Enter your details below
      </p>

      <!-- Name -->
      <div class="mt-6">
        <label class="text-[#6A7E8A] text-xs">Name</label>
        <input
          v-model="Name"
          placeholder="Name"
          type="text"
          class="mt-2 w-full border-b border-black/50 text-base text-[#013C61] focus:outline-none py-2"
        />
      </div>

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
      <div class="flex flex-col gap-4 mt-10">

        <!-- Create Account -->
        <router-link to="/login">
          <button
            @click="handleContinue"
            class="bg-[#DB4444] text-white h-12 w-full rounded-sm text-base"
          >
            Create Account
          </button>
        </router-link>

        <!-- Google Signup -->
        <button
          class="flex items-center justify-center gap-3 h-12 w-full bg-white border border-gray-400 rounded-sm text-base"
        >
          <img src="/assets/Icon-Google.png" class="h-6 w-6" />
          Sign up with Google
        </button>

        <!-- Login Redirect -->
        <div class="flex justify-center gap-2 mt-4 text-sm">
          <span>Already have account?</span>
          <router-link to="/login" class="underline text-[#DB4444]">
            Log in
          </router-link>
        </div>

      </div>

    </div>
  </div>

  <Footer />
</template>

