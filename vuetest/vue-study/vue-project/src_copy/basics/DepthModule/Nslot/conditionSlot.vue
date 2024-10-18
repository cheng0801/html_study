<script setup>

</script>
<template>
    <div class="card">
        <div v-if="$slots.header" class="card-header">
            <slot name="header"></slot>           
        </div>
        <div v-if="$slots.default" class="card-content">
            <slot></slot>           
        </div>
        <div v-if="$slots.footer" class="card-footer">
            <slot name="footer"></slot>           
        </div>
        
    </div>
</template>

<style>

.card{
    border: 1px solid rgb(27, 201, 21);
    padding: 5px;
}
.card-header{
    background-color: blue;
}
.card-content{
    padding: 5px;
}
.card-footer{
    background-color: gray;
    padding: 4px;
}
</style>