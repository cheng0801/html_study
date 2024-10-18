<script setup>
const greetingMessage = 'hello'
</script>

<template>
<div>
  	<slot :text="greetingMessage" :count="1"></slot>
</div>

<div>
    <slot name="header" message="hello"/>
</div>

</template>