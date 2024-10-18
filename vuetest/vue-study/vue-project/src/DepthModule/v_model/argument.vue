<script setup>
    const title = defineProps( {repuired:true})
</script>

<template>
    <input type="text" v-model="title" />
</template>