<script setup>
import { ref, reactive,computed } from 'vue';
    const classObject = reactive({
        active: true,
        'text-danger': false
    })

    const isActive = ref(true)
    const error = ref(null)

    const classObject1 = computed(() => ({
        active: isActive.value && !error.value,
        'text-danger': error.value && error.value.type === 'fatal'
}))

    const styleObject = reactive({
        color: 'red',
        fontSize: '30px'
    })
</script>

<template>
    <div :class="classObject">{{ classObject1 }}</div>
    <div :class="classObject1">{{ classObject1 }}</div>
    <!-- <div :class="[isActive ? activeClass : '', errorClass]"></div>    -->
    <div :style="styleObject">Test</div>  
    <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">style-Test</div>
</template>