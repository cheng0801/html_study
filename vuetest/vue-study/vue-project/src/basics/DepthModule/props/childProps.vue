<script setup>
import { ref } from 'vue'

const count = ref(0)
const posts = ref([
    { id: 1, title: 'My journey with Vue' },
    { id: 2, title: 'Blogging with Vue' },
    { id: 3, title: 'Why Vue is so fun' }
])
</script>

<template>
  <div><button @click="count++">You clicked me {{ count }} times.</button></div>

  <div 
    v-for="post in posts"
    :key="post.id"
    :tilte="post.title" ></div>
</template>