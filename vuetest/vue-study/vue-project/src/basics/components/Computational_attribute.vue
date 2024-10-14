<script setup>
    import { ref, reactive, computed } from 'vue';
    
    const author = reactive({
        name: 'John Doe',
        books: [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
        ]
    })

    const publishedBooksMessage = computed(() => {
        return author.books.length > 0 ? 'Yes' : 'No'
    }) 

    
        const firstName = ref('John')
        const lastName = ref('Doe')

        const fullName = computed({
        // getter
        get() {
             return firstName.value + ' ' + lastName.value
        },
        
        // setter
        set(newValue) {
        // 注意：我们这里使用的是解构赋值语法
            [firstName.value, lastName.value] = newValue.split(' ')
        }
        })
        console.log(fullName.value);
        
</script>

<template>
    <p>Has published books :</p>
    <span>
        {{ publishedBooksMessage }}
    </span>
   
</template>