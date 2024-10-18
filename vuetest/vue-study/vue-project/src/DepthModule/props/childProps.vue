<script setup>
import { ref } from 'vue'

const count = ref(0)


const props = defineProps({
    msg: String,
    title: Object
    
})


</script>

<template>
  <div><button @click="count++">You clicked me {{ count }} times.</button></div>

  
    <div> <h2>{{ msg ||' Study Vue3 '}}</h2></div>

    <div><h3>{{ title }}</h3></div>
</template>