<template>
  <div class="container col-6">
    <div class="row">
      <ProductCard v-bind="getProduct">
        <input type="number" v-model.number="number">
        <button class="btn btn-primary" @click="addCart(getProduct)">Add To Cart</button>
      </ProductCard>
    </div>
    <hr>
    <h3>Product Info</h3>
    <p>{{ getProduct.desc }}</p>
  </div>
</template>
<script>
import ProductCard from '../components/ProductCard.vue'

export default {
  components: { ProductCard },
  data () {
    return{
      number: 0,
      productsInfo: this.$store.state.productsInfo,
      test: this.$store.getters.test
    }
  },
  methods: {
    addCart: function(product){
      // 判斷存貨
      if(product.quantity - this.number < 0){
        alert('Out of Stock')
        return;
      }
      this.$store.commit('addCart', {
        product: product,
        number: this.number
      })
      alert(`Product Added to Cart`)
    }
  },
  computed:{
    getProduct (){
      return this.$store.getters.getProduct(parseInt(this.$route.params.productId))
    }
  }
}
</script>
