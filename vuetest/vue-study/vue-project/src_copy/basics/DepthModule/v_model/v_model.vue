<script setup>
import { ref } from 'vue';
import child from './child.vue';
import child1 from './child1.vue';
import argument from './argument.vue';
import bindings from './bindings.vue';
import modifier from './modifier.vue';
import modifier_capitalize from './modifier_capitalize.vue';
import modifiers from './modifiers.vue';

const count = ref(0)
const msg = ref('Hello World')

function foo() {
  count.value++
}

const bookTitle = ref('v-model argument example')
const first = ref('John')
const last = ref('Doe')
const cars = ref('nanbojini')
const myText = ref()

</script>

<template>
<child />
<h1>{{ msg }}</h1>
<child v-model="msg"/>
<child1 
  :modelValue="foo"
  @update:modelValue="$event => (foo = $event)" 
  />
  <argument v-model:title1="bookTitle"/>
<h1>{{ bookTitle }}</h1>
<h1>{{ first }} {{ last }}</h1>
<bindings
  v-model:firstName=" first"
  v-model:last-name="last" 
  />
  <br>
  <modifier class="i1" v-model:falali="cars"/>
  <br>
  <h5>This input capitalizes everything you enter:</h5>
  <div><modifier_capitalize class="i" v-model.capitalize="myText"/></div>
  <modifiers 
 
  v-model:uppercase="cars"
  />
 
</template>
<style>
    .i
    {
      margin: 0% auto;
      background-color: rgb(255, 0, 0);
    }
    .i1
    {
      margin: 0% auto;
      background-color: rgb(0, 38, 255);
    }
</style>