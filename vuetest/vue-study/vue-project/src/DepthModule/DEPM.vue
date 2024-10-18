<template>
    <div><props/></div>
    <div><event/></div>
    <br>
    <div><v_model/></div>
    <br>
    <div><attritube/></div>
    <div><SLOT/></div>
    <div><DI/></div>
    <div><LogicReuse/></div>
</template>

<script setup>
    import props from './props/1_props.vue';
    import event from './event/event.vue';
    import v_model from './v_model/v_model.vue';
    import Attritube from './Attritube/Attritube.vue';
    import attritube from './Attritube/Attritube.vue';
    
    import SLOT from './Nslot/SLOT.vue';
    import DI from './DependencyInjection/DI.vue';
    import LogicReuse from './LogicReuse/LogicReuse.vue';
    
    
    
</script>