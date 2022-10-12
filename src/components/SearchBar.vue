<template>
  <div>
    <b-nav-form class="mr-5">
      <b-input-group class="position-relative" style="width: 475px">
        <b-form-input
          class="rounded shadow-none focusInput"
          size="md"
          placeholder="Search Your Product By Name"
          v-model="searchValue"
        ></b-form-input>
        <b-button
          size="sm"
          class="my-2 my-sm-0 bg-transparent border-0 position-absolute shadow-none"
          style="right: 0; top: 12%; z-index: 100"
        >
          <b-icon icon="search" class="text-secondary"></b-icon>
        </b-button>
      </b-input-group>
    </b-nav-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchValue: null,
    }
  },
  computed: {
    updatedInput() {
      return this.$emit('input', this.searchValue)
    },
  },
}
</script>

<style scoped>
.focusInput {
  border: none;
  background-color: #ececec;
}
.focusInput:focus {
  background-color: white;
  border: 1px solid #ececec;
}
</style>
