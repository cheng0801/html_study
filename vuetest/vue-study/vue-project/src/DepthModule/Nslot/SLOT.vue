<script setup>
    
import contentExport from './ContentExport.vue';
import AwesomeIcon from './AwesomeIcon.vue';
import DefaultContent from './DefaultContent.vue';
import NamedSlot from './NamedSlot.vue';
import ConditionSlot from './conditionSlot.vue';
import scope from './scope.vue';
import List from './list.vue';
import MouseTracker from './mouseTracker.vue';
List
</script>
 
<template>
   
    <contentExport>
       <h2> Click me!</h2><!-- 插槽内容-->
    </contentExport>

    <contentExport>
        <span style="color:cyan">Click me! </span>
        <AwesomeIcon />
    </contentExport>
    <DefaultContent/>
    <DefaultContent>Save</DefaultContent>

    <NamedSlot>
        <template #header> <h1>这是页面标题</h1></template>
        <template #default>
            <p>A paragraph for the main content.</p>
            <p>And another one.</p>
        </template>
        <template #footer>
            <p>Here's some contact info</p>
        </template>
    </NamedSlot>

    <ConditionSlot>
    <template #header>
      <h1>This is the header</h1>
    </template>

    <template #default>
      <p>This is the content</p>
    </template>

    <template #footer>
      <em>This is the footer</em>
    </template>
    </ConditionSlot>
    <scope v-slot="slotProps">
        {{ slotProps.text }} {{ slotProps.count }}
    </scope><scope v-slot="{ text, count}">
        {{ text }} {{ count }}
    </scope>

    <scope>
    <template #header="headerProps">
       {{  headerProps }} {{ headerProps.message }}
    </template>
    </scope>

    <List api-url="url" :per-pag="10">
        <template #item="{body, username, likes }">
            <div class="item">
                <p>{{ body }}</p>
                <p class="meat">by {{ username }} {{ likes }}</p>
            </div>
        </template>
    </List>
    <div>
     <MouseTracker v-slot="{x,y}">
        Mouse is at:{{ x }} {{ y }}
    </MouseTracker>
    </div>
</template>
<style>
    .meat{
        font-size: 0.8em;
        color: aqua;
    }

</style>