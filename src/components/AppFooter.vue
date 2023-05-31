<template>
    <section class="v-app-footer" >
        <div class="v-app-footer__line" >
          <div class="footer-white">F1:<span class="red">Not Available</span></div>
          <div class="footer-white">LMB:<span class="red">CLICK</span></div>
          <div class="footer-white">ESC:<span class="red">Not Available</span></div>
          <div class="footer-white">ENTER:<span class="red">Not Available</span></div>
        </div>
        <div class="v-app-footer__line" >
            <div class="footer-white">A:<span class="red">Not Available</span></div>
            <div class="footer-white">RMB:<span class="red">INSPECT</span></div>
            <div class="footer-white">W:<span class="red">Not Available</span></div>
            <div class="footer-white">D:<span class="red">Not Available</span></div>
        </div>
    </section>
</template>


<script lang="ts" setup>
defineProps<{
}>()

</script>





<style lang="css" scoped >
.v-app-footer {
    height: var(--app-footer-height);
    width: 100%;
    background: var(--app-color-secondary);
    display: flex;
    flex-direction: column;
    justify-content: center;
}


.v-app-footer__line {
    display: flex;
    justify-content: space-between;
}
</style>
