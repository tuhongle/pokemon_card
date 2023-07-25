<template>
    <main>
        <Suspense>
            <CardDetail :id="id"/>
            <template #fallback>
                Loading...
            </template>
        </Suspense>
    </main>
</template>

<script setup>
const props = defineProps(['id'])
import CardDetail from '../components/CardDetail.vue'
</script>