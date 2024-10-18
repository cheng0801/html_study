<script setup>
    import { ref } from 'vue';
    const docStae = ref('saved')
</script>

<template>
    <span style="margin-right: 20px">Click to cycle through states:</span>
    <br>
    <div class="btn-container">
        <Transition name="slide-up">
            <button v-if="docStae === 'saved'"
                @click="docStae = 'edited'">Edit</button>
            <button v-else-if="docStae === 'edited'"
                @click="docStae = 'editing'">Save</button>
            <button v-else-if="docStae === 'editing'"
                @click="docStae = 'saved'">Cancel</button>    
        </Transition>
    </div>
    <br>
    <span style="margin-right: 20px">Click to cycle through states:</span>
    <br>
    <div class="btn-container">
        <Transition name="out-in">
            <button v-if="docStae === 'saved'"
                @click="docStae = 'edited'">Edit</button>
            <button v-else-if="docStae === 'edited'"
                @click="docStae = 'editing'">Save</button>
            <button v-else-if="docStae === 'editing'"
                @click="docStae = 'saved'">Cancel</button>    
        </Transition>
    </div>
</template>
<style>
    .btn-container {
        display: inline-block;
        position: relative;
        height: 1em;
    }

    button {
        position: absolute;
    }

    .out-in-enter-active,
    .out-in-leave-active {
        transition: all 0.25s ease-out;
    }

    .out-in-enter-from {
        opacity: 0;
        transform: translateY(30px);
    }

    .out-in-leave-to {
        opacity: 0;
        transform: translateY(-30px);
    }

    .out-in-enter-active,
    .out-in-leave-active {
        transition: all 0.25s ease-out;
    }

    .out-in-enter-from {
        opacity: 0;
        transform: translateY(30px);
    }

    .out-in-leave-to {
        opacity: 0;
        transform: translateY(-30px);
    }
</style>