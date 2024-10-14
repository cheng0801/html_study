<script setup>
    import { ref } from 'vue'
    //给每个todo 对象一个唯一的id
    let id = 0


    const newTodo = ref('')
    const todos = ref([
        { id: id++, text: 'Learn HTML' },
        { id: id++, text: 'Learn Javascript' },
        { id: id++, text: 'Learn Vue' }
    ])

    function addTodo( ) {
        todos.value.push({ id: id++, text: newTodo.value })
         newTodo.value = ''
    }

    function removueTodo(todo) {
        todos.value = todos.value.filter((t) => t !== todo)
    }

</script>

<template>
    <form @submit.prevent='addTodo'>
        <input v-model='newTodo' required placehoder='new todo'>
        <button>Add Todo</button>
    </form>
    <ul>
        <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
        <button @click="removueTodo(todo)">X</button>
    </li>
    </ul>
</template>