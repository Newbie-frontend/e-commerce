<template>
  <div
    class="d-flex justify-content-center align-items-center flex-wrap flex-column my-3"
  >
    <div
      class="card mb-3"
      style="max-width: 60rem"
      v-for="(item, index) in cart"
      :key="index"
    >
      <div class="row g-0">
        <div class="col-md-4">
          <img
            :src="item.image"
            class="img-fluid rounded-start m-4 ml-5"
            :alt="item.title"
            style="max-width: 10rem"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">
              {{ item.description }}
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['cart']),
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
</style>
