<template>
    <div class="container-fluid my-5">
        <!-- <h1>{{ id }}</h1> -->
        <div class="row">
            <div class="col-lg-9 col-12 mx-auto">
                <div class="card shadow">
                    <div class="p-2">
                        <img :src="serverURL + card.image" :alt="card.title" class="img-fluid rounded-top">
                    </div>
                    <div class="card-body px-4 py-5">
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="card-subtitle fs-4 py-1 px-3 rounded-2 border border-2 border-primary text-primary">{{ card.category }}</span>
                            <div>
                                <RouterLink :to="{ name: 'EditCard', params: { id: card._id}}"><button class="btn btn-outline-success px-3 me-3">EDIT</button></RouterLink>
                                <button class="btn btn-outline-danger px-3" @click="deleteCard">DELETE</button>
                            </div>
                        </div>
                        <h1 class="card-title my-4">{{ card.title }}</h1>
                        <p class="card-text text-muted lead lh-lg">{{ card.content }}</p>
                    </div>
                    <p class="card-footer bg-transparent mx-4 text-end text-muted pe-2">{{ card.createdAt.substring(0,10) }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps(['id']);

const serverURL = 'http://localhost:5001/';
const card = ref({});
const urlEndpoint = `/cards/${props.id}`;
const result = await fetch(urlEndpoint, {
    method: 'GET',
    mode: 'no-cors'
});
card.value = await result.json();

const deleteCard = async () => {
    const result = await fetch(urlEndpoint, {
        method: 'DELETE'
    });
    const data = await result.json();
    window.location.href = data.redirect;
}
</script>
