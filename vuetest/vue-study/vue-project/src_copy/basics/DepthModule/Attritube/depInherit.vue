<script setup>

import { ref } from 'vue'
const count = ref(0)

function mySum() {
  count.value--
}

defineOptions({
  inheritAttrs: false
})
</script>

<template>
 
  <button @click="mySum" >depInherit is:{{ count }}</button>
</template>

<style>
   
</style>