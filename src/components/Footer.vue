<template>
  <footer class="bg-black text-white px-6 py-10 mt-10 w-full">
    <div class="max-w-7xl mx-auto">

      <!-- Footer grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10">

        <!-- Brand & Newsletter -->
        <div class="flex flex-col gap-4">
          <p class="text-2xl font-bold">Exclusive</p>
          <p class="text-gray-300">Subscribe</p>
          <p class="text-gray-400 text-sm">Get 10% off your first order</p>

          <div class="relative w-full">
            <input
              type="text"
              placeholder="Enter your email"
              class="border border-gray-600 bg-transparent rounded-sm w-full h-12 px-3 text-sm text-white placeholder-gray-400"
            />
            <img src="/assets/icon-send.png" class="absolute top-3 right-3 w-5 cursor-pointer" />
          </div>
        </div>

        <!-- Support -->
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-bold">Support</p>
          <p class="text-gray-300 text-sm">111 Bijoy Sarani, Dhaka<br />DH 1515, Bangladesh.</p>
          <p class="text-gray-300 text-sm">exclusive@gmail.com</p>
          <p class="text-gray-300 text-sm">+88015-88888-9999</p>
        </div>

        <!-- Account -->
        <div class="flex flex-col gap-2 sm:gap-3">
          <p class="text-2xl font-bold">Account</p>
          <p class="text-gray-300 text-sm">My Account</p>
          <p class="text-gray-300 text-sm">Login / Register</p>
          <p class="text-gray-300 text-sm">Cart</p>
          <p class="text-gray-300 text-sm">Wishlist</p>
          <p class="text-gray-300 text-sm">Shop</p>
        </div>

        <!-- Quick Links -->
        <div class="flex flex-col gap-2 sm:gap-3">
          <p class="text-2xl font-bold">Quick Link</p>
          <p class="text-gray-300 text-sm">Privacy Policy</p>
          <p class="text-gray-300 text-sm">Terms of use</p>
          <p class="text-gray-300 text-sm">FAQ</p>
          <p class="text-gray-300 text-sm">Contact</p>
        </div>

        <!-- App download & Social -->
        <div class="flex flex-col gap-4">
          <p class="text-2xl font-bold">Download App</p>
          <p class="text-sm text-gray-500">Save $3 with App New User Only</p>

          <div class="w-full max-w-[198px] h-auto">
            <img src="/assets/Frame 719.png" class="w-full h-auto" />
          </div>

          <div class="flex space-x-4 mt-2">
            <img src="/assets/Icon-Facebook.png" class="w-6 h-6 cursor-pointer" />
            <img src="/assets/Icon-Twitter.png" class="w-6 h-6 cursor-pointer" />
            <img src="/assets/icon-instagram.png" class="w-6 h-6 cursor-pointer" />
            <img src="/assets/Icon-Linkedin.png" class="w-6 h-6 cursor-pointer" />
          </div>
        </div>

      </div>

      <div class="border-t border-gray-700 my-8"></div>
      <div class="text-center text-gray-400 text-sm">
        © Copyright Rimel 2022. All rights reserved.
      </div>

    </div>
  </footer>
</template>

