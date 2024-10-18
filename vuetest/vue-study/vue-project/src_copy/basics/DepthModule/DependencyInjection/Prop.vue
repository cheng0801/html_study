<script setup>
import child from './child.vue';
import { ref, provide } from 'vue'


const message = ref('hello')
provide('message', message)

const location = ref('North Pole')

function updateLocation() {
  location.value = 'South Pole'
}

provide('location', {
  location,
  updateLocation
})
</script>

<template>
    <input v-model="message">
    <child/>
</template>