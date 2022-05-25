import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import "@/scss/custom.scss"
// import "bootstrap/dist/js/bootstrap.js"
// import "bootstrap/dist/js/bootstrap.min.js"

// import "bootstrap/dist/js/bootstrap.esm.js"
// import "bootstrap/dist/js/bootstrap.esm.min.js"

// import "bootstrap/dist/js/bootstrap.bundle.js"
// import "bootstrap/dist/js/bootstrap.bundle.min.js"
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/scss/bootstrap.scss"
import "bootstrap"
// import 'bootstrap/js/dist/carousel';
// import 'bootstrap/js/dist/collapse';

createApp(App).use(store).use(router).mount('#app')
