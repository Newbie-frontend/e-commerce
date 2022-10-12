<template>
  <div
    class="card position-relative d-flex justify-content-between cart-style m-2"
  >
    <button
      class="position-absolute start-100 favorite-but bg-transparent border rounded-circle p-0"
      @click="toggleFavorite(product)"
    >
      <BaseIcon name="heart" class="p-1" :style="{ color: color }"></BaseIcon>
    </button>
    <img
      :src="product.image"
      class="card-img-top image-style"
      :alt="product.title"
    />
    <div class="card-body overflow-hidden" style="height: 5.1rem">
      <h6 class="card-title">{{ product.title }}</h6>
    </div>

    <div class="d-flex align-items-center">
      <b-form-rating
        v-model="valueOfRate"
        readonly
        class="border-0 bg-transparent"
        style="width: 10rem"
      ></b-form-rating>
      ({{ product.rating.count }})
    </div>
    <div class="card-body py-0 price-font">${{ product.price }}</div>
    <b-link :to="{ name: 'product', params: { id: product.id } }">
      <div class="card-body">
        <BaseButton buttonClass="-fill-gray">Go to Details</BaseButton>
      </div>
    </b-link>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  props: {
    product: {
      type: Object,
      requierd: true,
    },
  },
  computed: {
    valueOfRate() {
      return this.product.rating.rate
    },
    color() {
      return this.favorites.find((x) => x == this.product) ? 'red' : 'grey'
    },
    ...mapState(['favorites']),
  },
  methods: {
    ...mapActions(['toggleFavorite']),
  },
}
</script>

<style scoped>
.favorite-but {
  z-index: 10;
  right: 5%;
  top: 3%;
}
.cart-style {
  width: 16.5rem;
}
.image-style {
  margin-left: auto;
  margin-right: auto;
  height: 12rem;
  width: 10rem;
  margin-top: 15px;
}
.price-font {
  font-weight: 700;
}
a:hover {
  text-decoration: none;
}
.activeFav {
  color: red;
}
</style>
