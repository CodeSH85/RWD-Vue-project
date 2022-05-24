<template>
  <div class="product-box">
    <template v-for="product in products" :key="product">
      <ProductCard v-bind="product" :has_border="true" >
        <h3>選購數量: {{product.number}}</h3>
      </ProductCard>
    </template>
  </div>
</template>
<script>
import ProductCard from '../components/ProductCard.vue'
export default {
  components: { ProductCard },
  data(){
    return{
      products: this.$store.state.cart,
    }
  }
}
</script>
