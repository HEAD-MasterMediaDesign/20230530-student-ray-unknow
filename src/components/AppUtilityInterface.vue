<template>
    <div class="v-app-utility-interface" >
        <div>Utility Interface</div>
    </div>
</template>





<script lang="ts" setup>
defineProps<{
}>()

</script>





<style scoped >
.v-app-utility-interface {
    height: var(--app-header-height);
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    background-color: var(--app-color-secondary);
}
</style>
