<template>
  <main>
    <div
      class=" hero-title container-fluid d-flex justify-content-center my-md-5 py-md-3">
      <div class="row">
        <h1 class="text-center">Bauhaus</h1>
        <p class="text-center">1919 to 1933</p>
      </div>
    </div>
    <div class="carousel-area container-fluid col-10">
      <div class="carousel slide" id="carouselSlide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselSlide"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselSlide"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselSlide"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/6265_Dessau.JPG/2560px-6265_Dessau.JPG"
              class="d-block w-100 carousel-pic"
              alt="pic"
            />
          </div>
          <div class="carousel-item">
            <img
              src="http://open-archive.bauhaus.de/eMuseumPlus?service=DynamicAsset&sp=SU5mxm4Yx%2FVbg9LVP7MZLDqo6z5lhONBxez%2FYx5EhVSCZjU0bcvvsnPxkoLiFJnF9QzRY98OZwV3L%0ATpwyJeR7NMPvp3RRP61q%2FZaOrpMIarVdNS7kRiyLECyJGqnlNVpn&sp=Simage%2Fjpeg"
              class="d-block w-100 carousel-pic"
              alt="pic"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://www.peoplesworld.org/wp-content/uploads/2019/03/pjimage-11.jpg"
              class="d-block w-100 carousel-pic"
              alt="pic"
            />
          </div>
        </div>
      </div>
    </div>
    <section class="about-section">
      <div class="about-title container-fluid col-md-10 d-md-flex my-md-5 py-md-3">
        <div class="row col-md-6">
          <h2 class="h2">About Bauhaus</h2>
          <p>
            The Bauhaus only existed for 14 years: from 1919 to 1933. Despite
            this, it became the twentieth century’s most important college of
            architecture, design and art.
          </p>
        </div>
        <div class="row">
          <img
            class="about-img img-fluid"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b5/WalterGropius-1919.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
    <section class="picwall-section row row-cols-1 row-cols-md-3 g-3 my-5" id="picwallSection">
      <div class="col" v-for="product in products" key="product.id">
        <ProductCard v-bind="product"></ProductCard>
      </div>
    </section>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Launch demo modal
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import ProductCard from "../components/ProductCard.vue"

export default {
  data () {
    return {
      products: [
        {
          "id": 1,
          "title": "OK",
          "img": "https://static.dezeen.com/uploads/2018/10/bauhaus-brno-chair-sq-1.jpg",
          "desc": "just some texts "
        },
        {
          "id": 2,
          "title": "Good",
          "img": "https://static.dezeen.com/uploads/2018/10/bauhaus-barcelona-chair-sq-1.jpg",
          "desc": "just some texts "
        },
        {
          "id": 3,
          "title": "nice",
          "img": "https://static.dezeen.com/uploads/2018/10/bauhaus-wassily-chair-sq-1.jpg",
          "desc": "just some texts "
        },
        {
          "id": 4,
          "title": "damn",
          "img": "https://static.dezeen.com/uploads/2018/10/nesting-tables-albers-sq-1.jpg",
          "desc": "just some texts "
        },
      ],
    }
  },
  computed:{
    test () {
      return this.$store.state.product
    }
  },
  components: {
    ProductCard,
  }
}

</script>