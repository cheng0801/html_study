<script setup>
import Modal from './Modal.vue';
import { ref } from 'vue';

const showModal = ref(false)

</script>

<template>
    <button id="show-modal" @click="showModal = true">Show MOdel</button>
    <Teleport to="body">
        <modal :show="showModal" @close="showModal = false">
            <template #header>
                <h3>Custom Header</h3>
            </template>
        </modal>
    </Teleport>
</template>

<style scoped>
.modal {
    position: fixed;
    z-index: 999;
    top: 20%;
    left: 50%;
    width: 300px;
    margin-left: -150px;
}




</style>