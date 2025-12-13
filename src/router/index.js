import { createRouter, createWebHistory } from "vue-router";
import SignUp from "@/components/Authentication/SignUp.vue";
import Login from "@/components/Authentication/Login.vue";
import HomePage from "@/components/HomePage.vue";
import HomeContent from "@/components/Views/HomeContent.vue"
import Cart from "@/components/Views/Cart.vue"
import WishList from "@/components/Views/WishList.vue"
import About from "@/components/Views/About.vue"
import Contact from "@/components/Views/Contact.vue"
import Error from "@/components/Views/Error.vue";
import Account from "@/components/Views/Account.vue";
import Checkout from "@/components/Views/Checkout.vue";
import ProductsDetail from "@/components/Views/ProductsDetail.vue";

const routes = [
  { path: "/signup", name: "SignUp", component: SignUp },
  { path: "/login", name: "Login", component: Login },
  { path: "/homepage", 
    name: "HomePage",
    component: HomePage,
    children: [
      { path: "", name: "HomeContent", component: HomeContent },
      { path: "cart", name: "Cart", component: Cart },
      { path: "wishlist", name: "WishList", component: WishList },
      { path: "about", name: "About", component: About },
      { path: "contact", name: "Contact", component: Contact },
      { path: "error", name: "Error", component: Error },
      { path: "account", name: "Account", component: Account },
      { path: "checkout", name: "Checkout", component: Checkout },
      { path: "productdetail", name: "ProductsDetail", component: ProductsDetail },
    ]

   },

  // redirect unknown routes
  { path: "/:pathMatch(.*)*", redirect: "/signup" }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
