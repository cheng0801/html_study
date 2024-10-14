<script setup>
import { ref } from 'vue'
import childcomp from '../components/child/childcomp.vue'

const greeting = ref('Hello from parent')
const msg = ref('from parent')
</script>

<template>
    <childcomp :msg="greeting" />
    <childcomp @response="(msg) => childMsg = msg" />
    <childcomp>Message: {{ msg }}</ChildComp>
</template>