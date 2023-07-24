<script setup>
import { RouterLink, RouterView } from 'vue-router'
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
            <i class="bi bi-heart-fill text-secondary me-4"></i>
            <input v-if="false" type="text" class="form-control shadow-none border-bottom-1 me-4" placeholder="Search...">
            <i class="bi bi-search text-secondary"></i>
          </div>
        </div>
      </nav>
      <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasMenu" aria-labelledby="offcanvasMenuLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasMenuLabel">DCodeMania</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item d-flex align-items-center mb-3 ms-3">
              <i class="bi bi-house-heart-fill me-4"></i>
              <RouterLink class="nav-link active" aria-current="page" :to="{ name: 'home' }">Home</RouterLink>
            </li>
            <li class="nav-item d-flex align-items-center mb-3 ms-3">
              <i class="bi bi-file-earmark-plus-fill me-4"></i>
              <RouterLink class="nav-link" :to="{ name: 'addCard' }">Add Card</RouterLink>
            </li>
            <li class="nav-item d-flex align-items-center mb-3 ms-3">
              <i class="bi bi-question-diamond-fill me-4"></i>
              <RouterLink class="nav-link" :to="{ name: 'about' }">About</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>

  <RouterView />
</template>