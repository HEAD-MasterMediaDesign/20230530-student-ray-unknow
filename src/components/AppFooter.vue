<template>
    <section class="v-app-footer" >
        <div class="v-app-footer__line" >
          <div>F1: Not Available</div>
          <div>F1: Not Available</div>
          <div>F1: Not Available</div>
          <div>F1: Not Available</div>
        </div>
        <div class="v-app-footer__line" >
            <div>F1: Not Available</div>
            <div>F1: Not Available</div>
            <div>F1: Not Available</div>
            <div>F1: Not Available</div>
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
