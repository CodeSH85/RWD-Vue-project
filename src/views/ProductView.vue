<template>
  <div class="container">
    <div class="row">
      <ProductCard v-bind="getProduct">
        <input type="number" v-model.number="number">
        <button @click="addCart(getProduct)">加入購物車</button>
      </ProductCard>
    </div>
    <hr>
    <h3>商品描述</h3>
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
        alert('存貨不足')
        return;
      }
      this.$store.commit('addCart', {
        product: product,
        number: this.number
      })
      alert('已加入購物車')
    }
  },
  computed:{
    getProduct (){
      return this.$store.getters.getProduct(parseInt(this.$route.params.productId))
    }
  }
}
</script>
