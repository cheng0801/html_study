<script setup>
import { ref,watch } from 'vue';
const count = ref(0)
function greet(event) {
  alert(`Hello vue.js!`)
  // `event` is the native DOM event
  if (event) {
    alert(event.target.tagName)
  }
}
    
</script>

<template>
    
    <button @click="greet">Click Me{{ count }}</button>
</template>