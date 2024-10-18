<script setup>
const model = defineModel()

function update() {
  model.value++
}

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div>Parent bound v-model is: {{ model }}</div>
  <button @click="update">Increment</button>

  <span>My inpun</span> <input v-model="model">

  <input 
  :value="modelValue"
  @input="emit('update:modelValue', $event.target.value)"
  />
</template>