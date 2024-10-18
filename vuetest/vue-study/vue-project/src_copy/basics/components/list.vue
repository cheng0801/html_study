<script setup>
    import { ref, reactive} from 'vue'
    const items = ref([{ message: 'Foo' },  { message: 'Bar'}])
    const parentMessage = ref('Parent')

    const myObject = reactive({
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
    })
</script>

<template>
   <li v-for="item in items">
    {{ item.message }}
   </li>
   <li v-for="(item, index) in items">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
   </li>
   <li v-for="(item, index) of items">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
   </li>
   <ul>
    <li v-for="value in myObject">{{ value }}</li>
   </ul>
   <ul>
    <li v-for="( value, key, index) in myObject">{{ index }}. {{ key }}: {{ value }}</li>
   </ul>
   <ul>
        <template v-for="item in items">
    <li>{{ item.message }}</li>
    <li class="divider" role="presentation"></li>
        </template>
    </ul>
    <!-- <li v-for="todo in todos" v-if="!todo.isComplete">
         {{ todo.name }}
    </li> 这会抛出一个错误，因为属性 todo 此时
    没有在该实例上定义 -->
    <template v-for="item in items">
        <li v-if="!item.isComplete">
            {{ item.message }}
        </li>
</template>
</template>