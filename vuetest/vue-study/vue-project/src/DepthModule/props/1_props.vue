<script setup>
import { ref, watchEffect } from 'vue';
import ChildProps from './childProps.vue';
import childProps2 from './childProps2.vue';
const greet = ref('Study HTML')

const posts = ref([
  { id: 1, title: 'My journey with Vue',author:{name:'111'} },
  { id: 2, title: 'Blogging with Vue' ,author:{name:'222'} },
  { id: 3, title: 'Why Vue is so fun', author:{name:'333'} }
])

</script>

<template>
    <div>
        <p>Here is a child component</P>
            <ChildProps :msg='greet'/>
            <ChildProps/>
            <ChildProps/> 
        </div>
    
   <div><ChildProps :msg='greet' /> </div> 
   <div>
   <childProps2 
  	    v-for="post in posts"
	    :key="post.id"
  	    :title="post.title"
	></childProps2>
    <childProps2 
        v-for="post in posts" 
        :title="post.title + ' by ' + post.author.name" />
    </div>
</template>