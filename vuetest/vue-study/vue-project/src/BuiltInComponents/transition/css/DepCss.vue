<script setup>
    import { ref } from 'vue';
    const show = ref(true)
</script>
<template>
    <button @click="show = !show">Toggle</button>
    <Transition :duration="550" name="nested">
    <div v-if="show" class="outer">
        <div class="inner"> 
            Hello
        </div>
    </div>
    </Transition>
</template>

<style>
    .outer, .inner {
        background: rgb(13, 16, 65);
        padding: 30px;
        min-height: 100px;
    }

    .inner{
        background: rgb(6, 153, 25);
        text-align: center;

    }

    .nested-entr-active, .nested-leave-active {
        transition-delay: 0.25s;
    }

    .nested-entr-from, .nested-leave-to {
        transform: translate(30px);
        opacity: 0;
    }
    .nested-enter-active .inner,
    .nested-leave-active .inner { 
        transition: all 0.3s ease-in-out;
    }

    .nested-enter-active .inner {
        transition-delay: 0.25s;
    }

    .nested-enter-from .inner,
    .nested-leave-to .inner {
        transform: translateX(30px);
    
        opacity: 0.001;
    }
</style>