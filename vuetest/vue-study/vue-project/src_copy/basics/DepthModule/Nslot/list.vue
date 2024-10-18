<script setup>
    import { ref } from 'vue';

    const props = defineProps(['api-url', 'per-pag'])

    const items = ref([])

    setTimeout(() => {
        items.value = [
            { body: 'Scoped Solts Guide', username: 'Evan You', like:20 },
            { body: 'Vue Tutorial ', username: 'Natalia', like:10 },           
        ]
    },1000)

</script>

<template>
   
    <ul>
        <li v-if="!items.length">
            Loading...
        </li>
        <li v-for="item in items">
            <slot name="item" v-bind="item"></slot>
        </li>
    </ul>
    
</template>
<style>
    
    ul{
        height: 200px;
        width: 200px;
        list-style-type: none;
        padding: 5px;
        background: linear-gradient(315deg, #42d392 25%, blue);
    }
    li{
        padding: 5px 20px;
        margin: 10 px;
        background: white;
    }
</style>