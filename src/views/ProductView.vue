<template>
  <b-container
    class="d-flex border border-top-0 p-3 pb-5 justify-content-center containerStyle align-items-start"
    fluid="xl"
  >
    <div class="imageStyle border rounded mr-2">
      <img
        :src="product.image"
        :alt="product.title"
        class="productImage my-3 p-4"
      />
    </div>
    <div class="detailsStyle border rounded">
      <h6 class="paddingStyle">
        <i>{{ product.category }}</i>
      </h6>
      <h4>{{ product.title }}</h4>
      <div>
        <!-- Via multiple directive modifiers -->
        <b-button
          v-b-toggle.collapse-a
          variant="transparent"
          class="border shadow-sm"
          ><strong
            >More details
            <b-icon icon="chevron-double-down" scale="0.75"></b-icon> </strong
        ></b-button>
        <!-- Elements to collapse -->
        <b-collapse id="collapse-a" class="mt-2">
          <b-card>{{ product.description }}</b-card>
        </b-collapse>
      </div>
      <div class="d-flex align-items-center">
        <b-form-rating
          v-model="product.rating.rate"
          readonly
          class="border-0 bg-transparent"
          style="width: 10rem"
        ></b-form-rating>
        ({{ product.rating.count }})
      </div>
      <h4 class="paddingStyle">Price: ${{ product.price }}</h4>
      <h6 class="paddingStyle">Shipping: ${{ shipping }}</h6>
      <div class="d-flex mt-4">
        <div class="btnClass">
          <BaseButton class="mr-3" buttonClass="-fill-gray">Buy Now</BaseButton>
        </div>
        <div class="btnClass">
          <BaseButton buttonClass="-fill-gray">Add to Cart</BaseButton>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    shipping() {
      return this.product.price >= 30 ? 0 : 5
    },
    ...mapState(['product']),
  },
}
</script>

<style scoped>
.containerStyle h1,
h2,
h3,
h4,
h5 {
  font-family: Impact, Haettenschweiler, 'Arial Narrow', sans-serif;
}
.productImage {
  width: 16rem;
  height: 20rem;
}
.imageStyle {
  display: flex;
  justify-content: center;
  padding: 0.5rem 0 1.5rem;
  width: 20rem;
}
.detailsStyle {
  width: 45rem;
  min-height: 24rem;
  padding: 2rem;
}
.paddingStyle {
  padding-left: 12px;
}
.btnClass {
  width: 10rem;
}
</style>
