<script setup>
    
import { reactive, ref, watch } from 'vue'

const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')
const loading = ref(false)

// 可以直接侦听一个 ref
watch(question, async (newQuestion, oldQuestion) => {
    if (newQuestion.includes('?')) {
        loading.value = true
        answer.value = 'Thinking...'
    try {
        const res = await fetch('https://yesno.wtf/api')
            answer.value = (await res.json()).answer
    }   catch (error) {
                answer.value = 'Error! Could not reach the API. ' + error
        }   finally {
                loading.value = false
            }
    }
})

    const x = ref(1)
    const y = ref(2)
    //单个 ref
    watch(x, (newX) => {
        console.log(`x is ${newX}`)
    })
    //getter 函数
    watch(
        () => x.value + y.value,
        (sum) => {
            console.log(`sum of x + y is: ${sum}`)
        }
    )
    //多个来源组成的数组
    watch([x, () => y.value], ([newX, newY]) => {
        console.log(`x is ${newX} and y is ${newY} `)
    })

    const obj = reactive({ count: 12})
    watch(
        () =>obj.count, 
        (count) => {
        console.log(`Count is: ${count}`)
    })
</script>

<template>
    <p>
    Ask a yes/no question:
    <input v-model="question" :disabled="loading" />
    </p>
    <p>{{ answer }}</p>
    <div><input v-model="x"/>{{ x }} - {{ y }}</div>
    <div> Count is: {{ obj.value }}</div>
    <br>
</template>
