<script setup>
import { useTemplateRef, onMounted,ref } from 'vue'

// 第一个参数必须与模板中的 ref 值匹配
const input = useTemplateRef('my-input')
const watchEffect = ref('')
onMounted(() => {
  input.value.focus()
})

const list = ref([1,2,3 ])

const itemRefs = useTemplateRef('items')

onMounted(() => console.log(itemRefs.value))
</script>

<template>
  <input ref="my-input" />
    <br>
  <ul>
    <li v-for="item in list" ref="items">
      {{ item }}
    </li>
  </ul>
</template>