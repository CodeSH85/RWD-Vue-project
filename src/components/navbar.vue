<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid col-md-10">
        <a class="navbar-brand">
          <router-link class="navbar-brand" to="/">Home</router-link>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" aria-current="page">
                <router-link class="nav-link" to="/products">products</router-link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <router-link class="nav-link" to="/fav">fav</router-link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <router-link class="nav-link" to="/login">login</router-link>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  name: 'NavbarComponent'
}
</script>
