<script setup>
    import { ref } from 'vue'
    const message = ref('')
    const text = ref('')
    const checked = ref('true')
    const checkedNames = ref([])
    const picked = ref('One')
    const selected1 = ref()
    const selected = ref([])
    const selected3 = ref()
    const toggle = ref()


    const options = ref([
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
    ])
</script>

<template>
    <input
        :value="text"
        @input="event => text = event.target.value">
        <br><br><br>
    <input v-model="text">
    <br><br><br>
    <p>Message is: {{ message }}</p>
    <input v-model="message" placeholder="edit me" />
    <br><br><br>
    <span>Multiline message is:</span>
    <p style="white-space: pre-line;">{{ message }}</p>
    <textarea v-model="message" placeholder="add multiple lines"></textarea>
    <br>
    <input type="checkbox" id="checkbox" v-model="checked"/>
    <label for="cheskbox">{{ checked }}</label>

    <div>Checked names: {{ checkedNames }}</div>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames" />
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
    <label for="mike">Mike</label>
    <br>
    <div>Picked: {{ picked }}</div>
    <input type="radio" id="one" value="One" v-model="picked" />
    <label for="one">One</label>
    <input type="radio" id="two" value="Two" v-model="picked" />
    <label for="two">Two</label>
    <br>
    <div>Selected: {{ selected }}</div>
    <select v-model="selected">
    <option disabled value="">Please select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
    </select>
    <br>
    <div>Selected: {{ selected }}</div>
    <select v-model="selected" multiple>
        <option>A</option>
        <option>B</option>
        <option>C</option>
    </select>
    <br>
    <select v-model="selected3">
        <option v-for="option in options" :value="option.value">{{ option.text }}</option>
    </select>
    <div>Selected: {{ selected3 }}</div>

    <!-- `picked` 在被选择时是字符串 "a" -->
    <input type="radio" v-model="picked" value="a" />
    <div>{{ picked }}</div>
    <!-- `toggle` 只会为 true 或 false -->
    <input type="checkbox" v-model="toggle" />
    <div>{{ toggle }}</div>
    <!-- `selected` 在第一项被选中时为字符串 "abc" -->
    <select v-model="selected1">
    <option value="abc">ABC</option>
    {{ selected1 }}
    </select>
</template>