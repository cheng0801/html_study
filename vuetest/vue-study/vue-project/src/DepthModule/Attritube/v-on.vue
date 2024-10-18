<script setup>
import depInherit from './depInherit.vue';
import { ref } from 'vue'
const count = ref(0)

function mySum() {
  count.value++
}

// 阻止透传
defineOptions({
  inheritAttrs: false
})

</script>

<template>
    <depInherit />
    <button @click="mySum" >vOn is:{{ count }}</button>
</template>

<style>
   
</style>