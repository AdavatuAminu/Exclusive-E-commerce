<script>
import { mapGetters } from "vuex";

export default {
  name: "Header",
  data() {
    return {
      showDropdown: false,
      showUserDropdown: false,
      showMenu: false, // Mobile menu toggle
    };
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  methods: {
    toggleDropdown() { this.showDropdown = !this.showDropdown; },
    closeDropdown() { this.showDropdown = false; },
    toggleUserDropdown() { this.showUserDropdown = !this.showUserDropdown; },
    closeUserDropdown() { this.showUserDropdown = false; },
    handleClickOutside(e) {
      if (this.$el && !this.$el.contains(e.target)) {
        this.showDropdown = false;
        this.showUserDropdown = false;
        this.showMenu = false;
      }
    },
    logout() {
      localStorage.removeItem("authToken");
      this.$router.push({ name: "SignIn" });
      this.closeUserDropdown();
    },
    myReviews() {
      this.$router.push({ name: "MyReviews" });
      this.closeUserDropdown();
    },
    myOrders() {
      this.$router.push({ name: "MyOrders" });
      this.closeUserDropdown();
    },
    Spanish() { console.log("Language set to Spanish"); this.closeDropdown(); },
    French() { console.log("Language set to French"); this.closeDropdown(); },
    Chinese() { console.log("Language set to Chinese"); this.closeDropdown(); },
  },
  computed: {
    ...mapGetters("cart", ["cartCount"]),
    ...mapGetters("wishlist", ["wishlistCount"]),
    isAuthPage() { return this.$route.name === "Login" || this.$route.name === "SignUp"; },
    isLoggedIn() { return !!localStorage.getItem("authToken"); },
  },
};
</script>
<template>
  <!-- Top banner -->
  <div class="bg-black text-white py-3 px-4">
    <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 text-sm">
      <div class="text-center sm:text-left">
        <span class="font-medium">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
        <a href="#" class="ml-3 font-bold underline hover:no-underline">Shop Now</a>
      </div>

      <div class="flex items-center gap-2 cursor-pointer" @click.stop="toggleDropdown">
        <span>English</span>
        <img src="/assets/Vector.png" alt="Dropdown" class="w-3 h-2" />
        <div v-if="showDropdown"
          class="absolute top-12 right-4 sm:right-10 mt-2 w-40 bg-white rounded-md shadow-lg border border-gray-200 z-50">
          <ul class="text-gray-700 text-sm">
            <li @click="Spanish" class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Spanish</li>
            <li @click="French" class="px-4 py-2 hover:bg-gray-100 cursor-pointer">French</li>
            <li @click="Chinese" class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Chinese</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- Main header -->
  <header class="bg-white shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">

      <!-- Logo -->
      <h1 class="text-sm sm:text-3xl font-bold text-black">Exclusive</h1>

      <!-- Desktop nav -->
      <nav class="hidden lg:flex gap-10 font-medium">
        <router-link to="/homepage" class="hover:text-[#DB4444] transition">Home</router-link>
        <router-link to="/homepage/contact" class="hover:text-[#DB4444] transition">Contact</router-link>
        <router-link to="/homepage/about" class="hover:text-[#DB4444] transition">About</router-link>
        <router-link to="/signup" class="hover:text-[#DB4444] transition">Sign Up</router-link>
      </nav>

     <!-- Mobile / Desktop flex container for search + icons + hamburger -->
<div class="flex items-center gap-2 sm:gap-4">

  <!-- Search bar -->
  <div class="relative flex-1">
    <input type="text" placeholder="Search..." class="bg-[#F5F5F5] w-full h-9 sm:h-10 pl-3 sm:pl-4 pr-9 sm:pr-12 rounded text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#DB4444]" />
    <img src="/assets/Vector (2).png" class="absolute right-2 sm:right-3 top-2.5 sm:top-3 w-4 h-4 sm:w-5 sm:h-5 cursor-pointer" />
  </div>

  <!-- Auth icons -->
  <div v-if="isLoggedIn && !isAuthPage" class="flex items-center space-x-2 sm:space-x-4 lg:space-x-6">
    <router-link to="homepage/wishlist" class="relative">
      <img src="/assets/Vector (1).png" class="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:scale-110 transition" />
      <span v-if="wishlistCount > 0" class="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-red-600 text-white text-[10px] sm:text-xs font-bold rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center animate-pulse">{{ wishlistCount }}</span>
    </router-link>

    <router-link to="/homepage/cart" class="relative">
      <img src="/assets/Cart.png" class="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer hover:scale-110 transition" />
      <span v-if="cartCount > 0" class="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-red-600 text-white text-[10px] sm:text-xs font-bold rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center animate-pulse">{{ cartCount }}</span>
    </router-link>

    <div class="relative">
      <img src="/assets/user.png" @click.stop="toggleUserDropdown" class="w-6 h-6 sm:w-8 sm:h-8 p-1 bg-[#DB4444] rounded-full cursor-pointer" />
      <div v-if="showUserDropdown" class="absolute top-10 right-0 w-[225px] h-[208px] bg-purple-400 rounded-md shadow-lg z-50">
        <ul class="text-white text-[14px] flex flex-col gap-1.5">
          <li class="hover:bg-black rounded">
            <router-link to="/homepage/account" class="flex items-center gap-2 px-4 py-2 cursor-pointer">
              <img src="/assets/user.png" class="w-5 h-5" /> Manage My Account
            </router-link>
          </li>
          <li @click="myOrders" class="flex items-center gap-2 px-4 py-2 hover:bg-black cursor-pointer rounded">
            <img src="/assets/icon-mallbag.png" class="w-5 h-5" /> My Orders
          </li>
          <li @click="myOrders" class="flex items-center gap-2 px-4 py-2 hover:bg-black cursor-pointer rounded">
            <img src="/assets/icon-cancel.png" class="w-5 h-5" /> My Cancellations
          </li>
          <li @click="myReviews" class="flex items-center gap-2 px-4 py-2 hover:bg-black cursor-pointer rounded">
            <img src="/assets/Icon-Reviews.png" class="w-5 h-5" /> My Reviews
          </li>
          <li @click="logout" class="flex items-center gap-2 px-4 py-2 hover:bg-black cursor-pointer rounded">
            <img src="/assets/Icon-logout.png" class="w-5 h-5" /> Logout
          </li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Hamburger -->
  <button class="lg:hidden" @click.stop="showMenu = !showMenu">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>
</div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="showMenu" class="lg:hidden px-4 pb-4 space-y-4 bg-white shadow-md">
      <router-link @click="showMenu=false" to="/homepage" class="block">Home</router-link>
      <router-link @click="showMenu=false" to="/homepage/contact" class="block">Contact</router-link>
      <router-link @click="showMenu=false" to="/homepage/about" class="block">About</router-link>
      <router-link @click="showMenu=false" to="/signup" class="block">Sign Up</router-link>
    </div>
  </header>
</template>



