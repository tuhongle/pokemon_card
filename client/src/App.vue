<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView, useRouter } from 'vue-router'
const searchInput = ref(false);
const Router = useRouter();
const search = ref('');

const searchFunc = () => {
  Router.push({ name: 'home', force: true, state: {input: search.value }})
  window.location.reload();
}
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="navbar shadow">
        <div class="container-fluid justify-content-between">
          <div class="d-flex align-items-center">
            <button class="btn navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu" aria-controls="offcanvasMenu">
              <span class="navbar-toggler-icon"></span>
            </button>
            <a href="/" class="navbar-brand text-secondary ms-4">DCodeMania</a>
          </div>
          <div class="d-flex align-items-center me-4">
            <i class="bi bi-heart-fill text-secondary fs-4 me-4"></i>
            <input v-if="searchInput" type="text" class="form-control shadow-none border-bottom-1 me-4" placeholder="Search..." v-model="search" @keydown.enter="searchFunc">
            <button class="btn bg-transparent shadow-none border-0 p-0" @click="searchInput = !searchInput"><i class="bi bi-search text-secondary fs-4"></i></button>
          </div>
        </div>
      </nav>
      <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasMenu" aria-labelledby="offcanvasMenuLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title ms-3" id="offcanvasMenuLabel">DCodeMania</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item d-flex align-items-center mb-3">
              <i class="ms-3 bi bi-house-heart-fill fs-4 me-4 text-secondary"></i>
              <RouterLink class="nav-link active" aria-current="page" :to="{ name: 'home' }"><span class="lead fw-normal">Home</span></RouterLink>
            </li>
            <li class="nav-item d-flex align-items-center mb-3">
              <i class="ms-3 bi bi-file-earmark-plus-fill fs-4 me-4 text-secondary"></i>
              <RouterLink class="nav-link" :to="{ name: 'addCard' }"><span class="lead fw-normal">Add Card</span></RouterLink>
            </li>
            <li class="nav-item d-flex align-items-center mb-3">
              <i class="ms-3 bi bi-question-diamond-fill fs-4 me-4 text-secondary"></i>
              <RouterLink class="nav-link" :to="{ name: 'about' }"><span class="lead fw-normal">About</span></RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>

<RouterView />

</template>