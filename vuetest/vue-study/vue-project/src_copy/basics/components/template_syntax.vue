<template>
    <div v-bind="objectOfAttrs">Test</div>
    <span>Message: {{  }}</span>
    
</template>

<script setup>
    const objectOfAttrs = {
        id: 'container',
        class: 'wrapper',
        style: 'background-color:lightblue'
    }
    
</script>