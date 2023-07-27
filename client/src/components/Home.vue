<template>
    <div class="container-fluid mt-5">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
          <div class="col mb-4" v-for="card in cards" :key="card._id">
            <RouterLink :to="{ name: 'CardDetail', params: { id: card._id}}" class="text-decoration-none">
              <div class="card shadow h-100">
                  <div class="p-2 h-75">
                    <img :src="serverURL + card.image" :alt="card.title" class="w-100 h-100 object-fit-cover rounded-top">
                  </div>
                  <div class="card-body py-4">
                    <span class="card-subtitle py-1 px-2 rounded-2 border border-2 border-primary text-primary">{{ card.category }}</span>
                    <h2 class="card-title mt-3 mb-4">{{ card.title }}</h2>
                    <p class="card-text text-muted lh-lg">{{ card.content.substring(0, 100) + '...' }}</p>
                  </div>
              </div>
            </RouterLink>
          </div>
      </div>
  </div>
</template>
  
<script setup>
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
// const port = process.env.PORT || 3000;
const serverURL = 'http://localhost:5001/';
const props = defineProps(['search']);
const cards = ref([]);

const urlEndpoint = '/cards';

const response = await fetch(urlEndpoint + '?' + new URLSearchParams({
  title: props.search
}), {
  method: 'GET',
  mode: 'no-cors'
});
cards.value = await response.json();

const cardList = computed(() => {
  return cards.value.map(el => {
    return el.title
  })
})

</script>
  