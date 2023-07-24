<template>
    <main>
        <div class="container-fluid mt-5">
            <div class="row">
                <div class="col">
                    <div class="card">
                        <div class="card-header pt-4 pb-3 px-4">
                            <h3 class="fw-bold">Add New Card</h3>
                        </div>
                        <div class="card-body py-4 px-4">
                            <form action="" method="POST">
                                <label class="d-flex align-items-center mb-4">
                                    <i class="bi bi-file-earmark-fill fs-3 me-3 text-secondary"></i>
                                    <input type="text" class="form-control" name="title" placeholder="Title">
                                </label>
                                <label class="d-flex align-items-center mb-4">
                                    <i class="bi bi-menu-button-wide fs-3 me-3 text-secondary"></i>
                                    <input type="text" class="form-control" name="category" placeholder="Category">
                                </label>
                                <label class="d-flex align-items-start mb-4">
                                    <i class="bi bi-file-earmark-plus-fill fs-3 me-3 text-secondary"></i>
                                    <textarea type="text" class="form-control" rows="5" name="content" placeholder="Content"></textarea>
                                </label>
                                <label class="d-flex align-items-center mb-4">
                                    <i class="bi bi-images fs-3 me-3 text-secondary"></i>
                                    <input type="file" class="form-control" name="image" placeholder="File Input">
                                </label>
                                <button class="btn btn-primary btn-block btn-lg" type="submit">ADD CARD</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>

</script>