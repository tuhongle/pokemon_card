<template>
  <div class="container-fluid mt-5">
            <div class="row">
                <div class="col-12 col-lg-10 mx-auto">
                    <div class="card shadow">
                        <div class="card-header pt-4 pb-3 px-4">
                            <h3 class="fw-bold">Add New Card</h3>
                        </div>
                        <div class="card-body p-4">
                            <form action="/cards" method="POST" ref="form" enctype="multipart/form-data">
                                <label class="d-flex align-items-center mb-5">
                                    <i class="bi bi-file-earmark-fill fs-3 me-3 text-secondary"></i>
                                    <input type="text" class="form-control" name="title" placeholder="Title" required>
                                </label>
                                <label class="d-flex align-items-center mb-5">
                                    <i class="bi bi-menu-button-wide fs-3 me-3 text-secondary"></i>
                                    <input type="text" class="form-control" name="category" placeholder="Category" required>
                                </label>
                                <label class="d-flex align-items-start mb-5">
                                    <i class="bi bi-file-earmark-plus-fill fs-3 me-3 text-secondary"></i>
                                    <textarea type="text" class="form-control" rows="7" name="content" placeholder="Content" required></textarea>
                                </label>
                                <label class="d-flex align-items-center mb-5">
                                    <i class="bi bi-images fs-3 me-3 text-secondary"></i>
                                    <input type="file" class="form-control" name="image" placeholder="File Input" required>
                                </label>
                                <button class="btn btn-primary btn-block btn-lg" type="submit" @click="onSubmit">ADD CARD</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const Router = useRouter();
const form = ref(null);

const onSubmit = () => {
    Router.push({name: 'home', force: true, state: {msg: "Card Created Successfully"}})
    form.value.submit()
}

</script>