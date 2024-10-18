<script setup>
    import { ref } from 'vue';
    const awesome = ref(true)
    const type = ref("A")//ref('d')=>Not A/B/C
    const ok = ref('0')
</script>

<template>
    <button @click="awesome = !awesome">toggle</button>

    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>

    <div v-show="type === 'A'">A</div>
    <div v-if="type === 'A'">A</div>
    <div v-else-if="type === 'B'">B</div>
    <div v-else-if="type === 'C'">C</div>
    <div v-else>Not A/B/C</div>
    <h1 v-show="ok">Hello!</h1>
</template>