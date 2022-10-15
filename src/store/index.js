import Vue from 'vue'
import Vuex from 'vuex'
import MainService from '@/services/MainService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isSignedIn: false,
    signForm: null,
    categories: [],
    product: {},
    products: [],
    page: 1,
    perPage: 4,
    totalProducts: null,
    categ: null,
    favorites: [],
    cart: [],
  },
  getters: {},
  mutations: {
    // SET_ISSIGNEDIN() {
    //   this.isSignedIn = !this.isSignedIn
    // },
    SET_CATEGORIES(state, event) {
      state.categories = event
    },
    SET_PRODUCT(state, product) {
      state.product = product
    },
    SET_PRODUCTS(state, products) {
      state.products = products
    },
    SET_PRODUCTS_TOTAL(state, NumOfProducts) {
      state.totalProducts = NumOfProducts
    },
    SET_CATEGORYSELECTED(state, value) {
      state.categorySelected = value
    },
    ADD_FAVORITE(state, product) {
      state.favorites.push(product)
    },
    REMOVE_FAVORITE(state, index) {
      state.favorites.splice(index, 1)
    },
    ADD_CART(state, product) {
      state.cart.push(product)
    },
    REMOVE_CART(state, index) {
      state.cart.splice(index, 1)
    },
  },
  actions: {
    getCat({ commit }) {
      return MainService.getCategories()
        .then((res) => {
          commit('SET_CATEGORIES', res.data)
        })
        .catch((err) => {
          console.log('error: ', err)
        })
    },
    getProduct({ commit }, id) {
      return MainService.getProduct(id).then((res) => {
        commit('SET_PRODUCT', res.data)
      })
    },
    fetchProducts({ commit, state }, { page }) {
      return MainService.getProducts(state.perPage, page)
        .then((res) => {
          commit('SET_PRODUCTS_TOTAL', parseInt(res.headers['x-total-count']))
          commit('SET_PRODUCTS', res.data)
        })
        .catch((err) => console.log(err))
    },
    fetchByCategory({ commit, state }, { category, page }) {
      return MainService.getProductsByCat(category, state.perPage, page)
        .then((res) => {
          commit('SET_PRODUCTS_TOTAL', parseInt(res.headers['x-total-count']))
          commit('SET_PRODUCTS', res.data)
        })
        .catch((err) => console.log(err))
    },
    toggleFavorite({ commit, state }, product) {
      const isFavorite = state.favorites.find((x) => x == product)
      const favoriteIndex = state.favorites.findIndex((x) => x == product)
      !isFavorite
        ? commit('ADD_FAVORITE', product)
        : commit('REMOVE_FAVORITE', favoriteIndex)
    },
    addToCart({ commit }, product) {
      commit('ADD_CART', product)
    },
    removeFromCart({ commit, state }, product) {
      const cartItem = state.cart.findIndex((x) => x == product)
      console.log(cartItem)
      if (cartItem != -1) {
        commit('REMOVE_CART', cartItem)
      }
    },
  },
  modules: {},
})
