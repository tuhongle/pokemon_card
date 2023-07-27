<script setup>
import { ref, watchEffect } from 'vue'
import Home from '../components/Home.vue'

const cardCreated = ref('')
const cardDeleted = ref('')
cardCreated.value = window.history.state.msg
cardDeleted.value = window.history.state.delmsg
const close = () => {
  cardCreated.value = ''
  cardDeleted.value = ''
  window.history.state.msg = ''
}

const input = ref('')
watchEffect(() => {
  input.value = window.history.state.input
}, window.history.state.input)

</script>


<template>
  <main>
    <div class="container-fluid mt-3">
      <div v-if="cardCreated" class="row mx-1">
        <div class="col-12 d-flex align-items-center justify-content-between bg-success text-light py-2">
          <p class="lead mb-0">{{ cardCreated }}</p>
          <button class="btn border-0 btn-transparent text-light" @click="close"><i class="bi bi-x-circle-fill fs-3"></i></button>
        </div>
      </div>
    </div>

    <div class="container-fluid mt-3">
      <div v-if="cardDeleted" class="row mx-1">
        <div class="col-12 d-flex align-items-center justify-content-between bg-success text-light py-2">
          <p class="lead mb-0">{{ cardDeleted }}</p>
          <button class="btn border-0 btn-transparent text-light" @click="close"><i class="bi bi-x-circle-fill fs-3"></i></button>
        </div>
      </div>
    </div>

    <Suspense>
      <Home :search="input" />
      <template #fallback>
        <div class="d-flex justify-content-center align-items-center vh-100 vw-100">
          <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </template>
    </Suspense>
  </main>
</template>
