<script setup>
const props = defineProps(['id'])
import EditCard from '../components/EditCard.vue'
</script>

<template>
    <main>
        <Suspense>
            <EditCard :id="id"/>
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