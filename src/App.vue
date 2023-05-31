<template>
    <section class="v-app" >
        <div class="v-app__header-container">
            <app-utility-interface/>
            <app-navigation/>
        </div>

        <div class="v-app__view-container">
            <router-view
                :key="useRouter().currentRoute.value.name"
            />
        </div>

        <div class="v-app__footer-container">
            <app-footer/>
        </div>
    </section>
</template>





<script lang="ts" setup>
// defineProps<{
// }>()

import AppNavigation from "@/components/AppNavigation.vue";
import {useRouter} from "vue-router";
import AppFooter from "@/components/AppFooter.vue";

</script>





<style lang="css" scoped >
.v-app {
}

.v-app__header-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
}

.v-app__view-container {
    position: relative;
    width: 100%;
    padding-top: var(--app-header-height);
    padding-bottom: var(--app-footer-height);
    box-sizing: border-box;
    min-height: 100vh;
}

.v-app__footer-container {
    z-index: 1000;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
}
</style>
