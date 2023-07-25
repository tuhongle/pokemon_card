<template>
    <div class="container-fluid mt-5">
        <div class="row">
            <div class="col-12 col-lg-10 mx-auto">
                <div class="card shadow">
                    <div class="card-header pt-4 pb-3 px-4">
                        <h3 class="fw-bold">Edit This Card</h3>
                    </div>
                    <div class="card-body p-4">
                        <form action="/cards" method="POST" enctype="multipart/form-data">
                            <label class="d-flex align-items-center mb-5">
                                <i class="bi bi-file-earmark-fill fs-3 me-3 text-secondary"></i>
                                <input type="text" class="form-control" name="title" v-model="card.title">
                            </label>
                            <label class="d-flex align-items-center mb-5">
                                <i class="bi bi-menu-button-wide fs-3 me-3 text-secondary"></i>
                                <input type="text" class="form-control" name="category" v-model="card.category">
                            </label>
                            <label class="d-flex align-items-start mb-5">
                                <i class="bi bi-file-earmark-plus-fill fs-3 me-3 text-secondary"></i>
                                <textarea type="text" class="form-control" rows="7" name="content">{{ card.content }}</textarea>
                            </label>
                            <label class="d-flex align-items-center mb-5">
                                <i class="bi bi-images fs-3 me-3 text-secondary"></i>
                                <input type="file" class="form-control" name="image" placeholder="File Input">
                            </label>
                            <div class="mb-5">
                                <img :src="serverURL + card.image" :alt="card.title" class="w-25">
                            </div>
                            <button class="btn btn-primary btn-block btn-lg" type="submit">EDIT CARD</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps(['id'])

const serverURL = 'http://localhost:5001/'
const card = ref({})
const urlEndpoint = `/cards/${props.id}`
const result = await fetch(urlEndpoint, {
    method: "GET",
    mode: 'no-cors'
})
card.value = await result.json()
</script>