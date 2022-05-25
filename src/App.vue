<template>
  <Navbar />
    <router-view/>
  <Footer />  
</template>

<script>
import Navbar from "./components/navbar.vue"
import Footer from "./components/footer.vue"
import "./assets/scss/main.scss"
  
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>
<style lang="scss">
  @import './assets/scss/main.scss';
</style>