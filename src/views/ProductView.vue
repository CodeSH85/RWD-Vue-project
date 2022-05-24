<template>
  <div class="container">
    <div class="row">
      <!-- <h1>{{test}}</h1> -->
      <ProductCard v-bind="productInfo">
        <input type="number" v-model.number="number">
        <button @click="addCart(product)">加入購物車</button>
      </ProductCard>
    </div>
    <hr>
    <h3>商品描述</h3>
    <p>{{ desc }}</p>
  </div>
</template>
<script>
import axios from 'axios'
import ProductCard from '../components/ProductCard.vue'

export default {
  components: { ProductCard },
  data () {
    return{
      number: 0,
      product: '',
      productsInfo: this.$store.state.productsInfo,
    }
  },
  mounted () {
      axios.get(`${this.productsInfo}/products/${this.$route.params.productId}`)
           .then(res => this.product = res.data);
    //   axios.get('https://jsonplaceholder.typicode.com/users')
    // .then(res => console.log(res.data))
    // .catch(err => console.log(err))
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
    },
  },
  computed:{
    
  }
}
</script>
