<script setup>
    import { inject } from 'vue';
    const message = inject('message')

    const { location, updateLocation } = inject('location')
</script>
<template>
    <p>Msssage to grand child:{{ message }}</p>

    <button @click="updateLocation">{{ location }}</button>
</template>