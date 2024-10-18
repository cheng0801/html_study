<script setup>
import ASYNC from './combinedFun/Async.vue';
import CombinedFunction from './combinedFun/CombinedFunction.vue';
import { useMouse } from '@/js/plugIns/mouse';
const {x, y} = useMouse()
</script>

<template>
    <CombinedFunction/>
    Mouse position is at:{{ x }},{{ y }}
    <br>
    <ASYNC/>
</template>