<template>
    <div>{{ count }}</div>
    <button @click="increment">
    {{ count }}
    </button>
   
</template>

<script setup>
import { ref } from 'vue';

const count = ref(1);
console.log(count); // { value: 0 }
console.log(count.value); // 0

count.value++
console.log(count.value);// 1

function increment() {
    count.value++
}

const obj = ref({
  nested: { count: 0 },
  arr: ['foo', 'bar']
})

function mutateDeeply() {
  // 以下都会按照期望工作
  obj.value.nested.count++
  obj.value.arr.push('baz')
}



</script>