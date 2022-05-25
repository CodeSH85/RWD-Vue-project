<template>
  <main>
    <section class="container">
      <div v-if="products.length > 0" class="row row-cols-1 row-cols-md-3 g-3 my-5">
        <template  v-for="product in products" :key="product">
          <ProductCard v-bind="product" :has_border="true" >
            <p>Product in cart: {{product.number}}</p>
          </ProductCard>
        </template>
      </div>
      <h1 v-else>No product yet</h1>
    </section>
  </main>
</template>
<script>
import ProductCard from '../components/ProductCard.vue'
export default {
  components: { ProductCard },
  data(){
    return{
      products: this.$store.state.cart
    }
  }
}
</script>
