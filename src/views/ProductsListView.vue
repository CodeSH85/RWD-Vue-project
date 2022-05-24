<template>
  <section class="container">
    <div class="row row-cols-1 row-cols-md-3 g-3 my-5">
      <!-- <h1>{{ test }}</h1> -->
      <template v-for="product in productsInfo" key="product.id">
        <ProductCard v-bind="product"></ProductCard>
      </template>
    </div>
  </section>
</template> 
<script>
import axios from 'axios'
import ProductCard from "../components/ProductCard.vue"

export default {
  data () {
    return {
      products: [],
      productsInfo: this.$store.state.productsInfo,
      userId: this.$store.state.userId,
    };
  },
  mounted () {
    axios
      .get(`${this.productsInfo}/products?user_id=${this.userId}`)
      .then( (res) => (this.products = res.data) )
  },
  methods: {
    // getProuductsData() {
    //   fetch("products.json")
    //     .then(response => response.json())
    //     .then(data => (this.products = data));
    // },
    parseImgPath: function (path) {
      return this.$store.state.productsInfo + path;
    }
  },
  computed: {
    // test () {
    //   return this.$store.state.productsInfo
    // }
  },
  components: { ProductCard }
}

</script>
