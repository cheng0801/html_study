<script setup>

    const [last, modifier] = defineModel({
        set(value) {
            if(modifier.capitalize){
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
            return value
        }
    })
   
</script>
<template>
   
    <input class="i2222" trpe="text" v-model="last" value="test1">
   
</template>
<style>
     .i2222
    {
      margin: 0% auto;
      background-color: rgb(0, 255, 157);
    }
    .i1
    {
      margin: 0% auto;
      background-color: rgb(0, 38, 255);
    }
</style>
