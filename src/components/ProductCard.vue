<template>
  <div class="col">
    <div class="card h-100">
      <img class="card-img-top" :src="img" alt="picture">
      <div class="card-body">
        <h4 class="card-title">{{ title }}</h4>
        <p class="card-text">{{ desc }}</p>
        <p class="card-text">${{ price }}</p>
        <p class="card-text">
        </p>
      </div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    'id': Number,
    'title': String,
    'img': String,
    'desc': String,
    'price': Number
  },
  methods: {
    redirectProduct: function(id){
      this.$router.push(`/products/${id}`)
    },
    parseImgPath: function(){
      return this.$store.state.productsInfo.img
    }
  }
}
</script>
