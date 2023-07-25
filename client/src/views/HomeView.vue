<script setup>
import Home from '../components/Home.vue'
</script>


<template>
  <main>
    <Suspense>
      <Home />
      <template #fallback>
        Loading...
      </template>
    </Suspense>
  </main>
</template>
