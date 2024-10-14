<script setup>
import ChildProps from './childProps.vue';
import { ref, watchEffect } from 'vue';

const { foo } = defineProps(['foo'])
watchEffect(() => {
    console.log(foo)
})


</script>

<template>
    <div>
        <p>Here is a child component</P>
            <ChildProps/>
            <ChildProps/>
            <ChildProps/> 
        </div>
        
    
</template>