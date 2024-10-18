<script setup>
import KA from './KeepAlive/KeepAlive.vue';
import Teleport from './Teleport/Teleport.vue';
import Animation from './transition/css/animation .vue';
import CSS from './transition/css/CSS.vue';
import DepCss from './transition/css/DepCss.vue';
import Dynami from './transition/Dynami.vue';
import IntercomponentTransition from './transition/IntercomponentTransition/IntercomponentTransition.vue';
import JSHook from './transition/JSHook.vue';
import Reusable from './transition/Reusable.vue';
import Transtion from './transition/Transtion.vue';
import DelayList from './transitionGroup/DelayList.vue';
import List from './transitionGroup/list.vue';

    
</script>

<template>
<div class="ss"><Transtion/>  </div>
<div class="ss"> <CSS/> </div>
<br>
<div class="ss"> <Animation/> </div>
<br><br><br><br>
<div class="ss1"><DepCss/>  </div>
<br>
<div class="ss"> <JSHook/> </div>
<div class="ss"> <Reusable/> </div>

<div class="ss"> <div><IntercomponentTransition/></div> </div>
<div class="sss"> <Dynami/> </div>

<div class="ss1"> <List/> </div>
<br>
<DelayList/>
<br>
<KA/><br>
<Teleport/>




<!--</></></><Teleport/> -->
</template>
<style>
.ss {
    height: 150px;
    width: 500px;
}

.ss1 {
    height: 250x;
    width: 500px;
}

.sss {
    height: 200px;
    width: 800px;
}


</style>