<script setup>
const props = defineProps(['id'])
import EditCard from '../components/EditCard.vue'
</script>

<template>
    <main>
        <Suspense>
            <EditCard :id="id"/>
            <template #fallback>
                Loading...
            </template>
        </Suspense>
    </main>
</template>