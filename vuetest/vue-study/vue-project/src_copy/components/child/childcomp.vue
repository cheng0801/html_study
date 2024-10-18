<script setup>
    const props = defineProps({
        msg: String
    })

    const emit = defineEmits(['response'])

    emit('response',"hello from child")
    
</script>

<template>
    <h2>{{ msg || 'No props passed yet' }}</h2>
    <h3>Child component</h3>
    <slot>Fallback content</slot>
    
</template>