<script setup>
import { ref } from 'vue';
import ChildProps from './childProps.vue';

const greet = ref('Study HTML')



</script>

<template>
    
    
   <div><ChildProps :msg='greet' /> </div> 
   <div>
   <ChildProps 
  	    v-for="post in posts"
	    :key="post.id"
  	    :title="post.title"
	></ChildProps>
    </div>
</template>