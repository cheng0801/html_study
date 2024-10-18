<script setup>
import { ref } from 'vue';

const count = ref(0)
const name = ref('Vue.js')

function greet(event) {
    alert(`Hello ${name.value}!`)
    // `event` 是 DOM 原生事件
    if (event) {
        alert(event.target.tagName)
    }
}

function say(message) {
    alert(message)
}

function warn(message, event) {
    // 这里可以访问原生事件
    alert(`Hello ${name.value}!`)
    if (event) {
        event.preventDefault()
    }
  alert(message)
}
</script>

<template>
    <button @click="count++">Add 1</button>
    <p>Count is: {{ count }}</p>    
    <button @click="greet">Greet</button>
    <br>
    <button @click="say('hello')">Say hello</button>
    <button @click="say('bye')">Say bye</button>  
    <br>  

    <!-- 使用特殊的 $event 变量 -->
    <button @click="warn('Form cannot be submitted yet.', $event)">
         Submit
    </button>

    <!-- 使用内联箭头函数 -->
    <button @click="(event) => warn('Form cannot be submitted yet.', event)">
         Submit
    </button>
    <br>
    <!-- 单击事件将停止传递 -->
    <a href="# " doThis>test1</a>

    <!-- 提交事件将不再重新加载页面 -->
    <form action="#" @submit.prevent="onSubmit"><button>test2</button></form>

    <!-- 修饰语可以使用链式书写 -->
    <a href="# " @click.stop.prevent="doThat">test3</a>

    <!-- 也可以只有修饰符 -->
    <form action="#" @submit.prevent>test4</form>

    <!-- 仅当 event.target 是元素本身时才会触发事件处理器 -->
    <!-- 例如：事件处理器不来自子元素 -->
    <div @click.self="doThat">test5</div>
    <!-- 仅在 `key` 为 `Enter` 时调用 `submit` -->
    <input @keyup.enter="submit" />
    <!-- 点击事件最多被触发一次 -->
    <a href="https://cn.vuejs.org/tutorial/#step-3" @click.once="doThis">once</a>
    <br>
    <input @keyup.page-down="onPageDown" />
    <br>
    <!-- Alt + Enter -->
    <input @keyup.alt.enter="clear" />


</template>