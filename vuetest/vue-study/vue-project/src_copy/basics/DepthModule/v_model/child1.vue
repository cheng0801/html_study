<script setup>
const props = defineProps({ required: true })
const emit = defineEmits({ default: 1 })

</script>

<template>
  <input
    :value="{ required: true }"
    @input="emit('{ default: 0 }', $event.target.value)"
  />
</template>