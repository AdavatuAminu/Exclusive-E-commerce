<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import { mapState, mapGetters, mapActions } from "vuex";
export default {
    name: "HomePage",
    components: { Header, Footer },

    computed: {
        ...mapState(["products", "cart"]),
        ...mapGetters(["cartCount", "cartTotal"]),
    },
    methods: {
        ...mapActions(["addToCart", "removeFromCart"]),
    }
}
</script>
<template>
    <Header />
    <router-view />
    <Footer />
    
</template>