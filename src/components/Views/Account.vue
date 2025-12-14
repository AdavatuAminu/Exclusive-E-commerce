<script>
import ButtonComponents from './ButtonComponents.vue';

export default {
    name: "Account",
    components: { ButtonComponents }
}
</script>
<template>
  <div class="max-w-7xl mx-auto px-4 py-8">

    <!-- Top Bar -->
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
      <div class="flex flex-wrap items-center gap-2 text-gray-600 text-sm">
        <span class="hover:text-black cursor-pointer">Home</span> /
        <span class="text-black font-semibold">Account</span>
      </div>

      <div class="flex items-center gap-2 text-sm">
        <span>Welcome!</span>
        <span class="text-[#DB4444] font-semibold">Guest</span>
      </div>
    </div>

    <!-- Main Layout -->
    <div class="flex flex-col lg:flex-row gap-8">

      <!-- Sidebar -->
      <div class="w-full lg:w-[300px] bg-white border rounded p-6 space-y-8">

        <div>
          <h3 class="font-bold mb-3">Manage My Account</h3>
          <div class="pl-4 space-y-2 text-sm">
            <span class="block text-[#DB4444] cursor-pointer">My Profile</span>
            <span class="block text-gray-500">Address Book</span>
            <span class="block text-gray-500">My Payment Options</span>
          </div>
        </div>

        <div>
          <h3 class="font-bold mb-3">My Orders</h3>
          <div class="pl-4 space-y-2 text-sm">
            <span class="block text-gray-500">My Returns</span>
            <span class="block text-gray-500">My Cancellations</span>
          </div>
        </div>

        <div>
          <h3 class="font-bold">My Wishlist</h3>
        </div>

      </div>

      <!-- Content -->
      <div class="flex-1 bg-white shadow-lg rounded p-6 sm:p-10">

        <span class="text-[#DB4444] font-semibold block mb-6">
          Edit Your Profile
        </span>

        <!-- Profile Fields -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label class="text-sm block mb-1">First Name</label>
            <input
              type="text"
              placeholder="Aliyu"
              class="w-full h-[50px] bg-[#F5F5F5] rounded px-3"
            />
          </div>

          <div>
            <label class="text-sm block mb-1">Last Name</label>
            <input
              type="text"
              placeholder="Aminu"
              class="w-full h-[50px] bg-[#F5F5F5] rounded px-3"
            />
          </div>

          <div>
            <label class="text-sm block mb-1">Email</label>
            <input
              type="email"
              placeholder="aliyuaminu3369@gmail.com"
              class="w-full h-[50px] bg-[#F5F5F5] rounded px-3"
            />
          </div>

          <div>
            <label class="text-sm block mb-1">Address</label>
            <input
              type="text"
              placeholder="No 22 Kaduna"
              class="w-full h-[50px] bg-[#F5F5F5] rounded px-3"
            />
          </div>
        </div>

        <!-- Password -->
        <div class="mt-8 space-y-4">
          <label class="text-sm block">Password Changes</label>

          <input
            type="password"
            placeholder="Current Password"
            class="w-full h-[50px] bg-[#F5F5F5] rounded px-3"
          />
          <input
            type="password"
            placeholder="New Password"
            class="w-full h-[50px] bg-[#F5F5F5] rounded px-3"
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            class="w-full h-[50px] bg-[#F5F5F5] rounded px-3"
          />
        </div>

        <!-- Actions -->
        <div class="flex flex-col sm:flex-row items-center justify-end gap-4 mt-10">
          <span class="cursor-pointer">Cancel</span>
          <router-link to="/homepage/error">
            <ButtonComponents label="Save Changes" weight="159px" />
          </router-link>
        </div>

      </div>

    </div>
  </div>
</template>
