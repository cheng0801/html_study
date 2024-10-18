<script setup>
import inherit from './inherit.vue';
import vOn from './v-on.vue';

function test() {
    alert('working')
}

</script>

<template>
    <inherit />
    <vOn  class="i" @click="test"
    />
</template>

<style>
     .i
    {
        color: rgb(5, 5, 5);
        margin: 0% auto;
        background-color: rgb(21, 216, 216);
    }
</style>