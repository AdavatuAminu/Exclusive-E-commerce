export const products = {
  namespaced: true,
  state: () => ({
    items: []
  }),
  mutations: {
    setProducts(state, products) {
      state.items = products;
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        const mappedProducts = data.map(product => ({
          id: product.id,
          name: product.title,
          price: Math.round(product.price * 100) / 100,
          originalPrice: null,
          discount: 0,
          image: product.image,
          reviews: product.rating?.count || 0
        }));
        commit('setProducts', mappedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
  },
  getters: {
    allProducts: (state) => state.items
  }
};