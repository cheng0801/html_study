<script setup>
    const car1 = defineModel('falali')

</script>
<template>
    <input  class="s" type="text" v-model.capitalize="car1" />
</template>
<style>
    .s
    {
        margin-top: 10px;
	background-color: rgb(76, 209, 76);
	padding: 10px;
	box-shadow: 0 0 10px black;
	border-radius: 10px;
    }
    .s1
    {
        margin-top: 10px;
	background-color: rgb(209, 76, 105);
	padding: 10px;
	box-shadow: 0 0 10px black;
	border-radius: 10px;
    }
</style>