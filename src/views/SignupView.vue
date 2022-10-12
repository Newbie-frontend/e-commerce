<template>
  <div style="background-color: #f6f6f6" class="py-4 text-center">
    <div class="d-inline-flex flex-column justify-content-center div-width">
      <h1>Hello</h1>
      <p>Sign In or Sign Up to your account</p>
      <b-nav tabs fill>
        <b-nav-item to="/SignIn">Sign In</b-nav-item>
        <b-nav-item to="/SignUp" active>Sign Up</b-nav-item>
      </b-nav>
      <b-container class="border border-top-0 bg-white pb-3">
        <b-form @submit.prevent="onSubmit" class="m-3">
          <b-form-group
            id="input-group-1"
            label="First name:"
            label-for="input-1"
          >
            <b-form-input v-model="form.firstName"></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-2"
            label="Last name:"
            label-for="input-2"
          >
            <b-form-input v-model="form.lastName"></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-3"
            label="Phone Number:"
            label-for="input-3"
          >
            <b-form-input v-model="form.phoneNumber"></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-4"
            label="Email address:"
            label-for="input-4"
          >
            <b-form-input v-model="form.email"></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-5"
            label="Password:"
            label-for="input-5"
          >
            <b-form-input v-model="form.password"></b-form-input>
          </b-form-group>
          <BaseButton type="submit" class="mt-5" buttonClass="-fill-gray"
            >Login</BaseButton
          >
        </b-form>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: this.createFreshForm(),
    }
  },
  methods: {
    onSubmit() {
      console.log(this.form)
      this.$store.state.signForm = this.form
      this.form = this.createFreshForm()
      this.form.firstName = ''
      this.form.lastName = ''
      this.form.phoneNumber = ''
      this.form.email = ''
      this.form.password = ''
    },
    createFreshForm() {
      return {
        status: 'signup',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        password: '',
      }
    },
  },
}
</script>

<style scoped>
.div-width {
  width: 400px;
}
p,
h1 {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
</style>
