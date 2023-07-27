<template>
    <main>
        <div class="container-fluid mt-3">
            <div v-if="cardUpdated" class="row mx-1">
                <div class="col-12 d-flex align-items-center justify-content-between bg-success text-light py-2">
                <p class="lead mb-0">{{ cardUpdated }}</p>
                <button class="btn border-0 btn-transparent text-light" @click="close"><i class="bi bi-x-circle-fill fs-3"></i></button>
                </div>
            </div>
         </div>

        <Suspense>
            <CardDetail :id="id"/>
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

<script setup>
import { ref } from 'vue';
const props = defineProps(['id'])
import CardDetail from '../components/CardDetail.vue'

const cardUpdated = ref('')
cardUpdated.value = window.history.state.msg

const close = () => {
    cardUpdated.value = ''
    window.history.state.msg = ''
}
</script>