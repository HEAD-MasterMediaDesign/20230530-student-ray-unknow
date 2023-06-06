<template>
    <section class="v-app" >

        <div
            class="v-app__modal"
            v-if="useAppStore().modalLevelKey.length > 0 && useAppStore().modalActiveQuestionIndex > -1"
        >
            <div
                @click.stop="closeModal()"
                class="v-app__modal__close"
            >

            </div>
            <div
                class="v-app__modal-container"
            >
                <app-modal/>
            </div>
        </div>

        <div class="v-app__header-container">
            <app-utility-interface/>
            <app-navigation/>
        </div>

        <div class="v-app__view-container">
            <router-view
                :key="useRouter().currentRoute.value.name || '00'"
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

import AppNavigation from "./components/AppNavigation.vue";
import {useRouter} from "vue-router";
import AppFooter from "./components/AppFooter.vue";
import AppUtilityInterface from "./components/AppUtilityInterface.vue";
import AppModal from "./components/AppModal.vue"
import {useAppStore} from "./stores/counter"

function closeModal() {
    useAppStore().modalLevelKey = ''
    useAppStore().modalActiveQuestionIndex = -1
}

</script>





<style lang="css" scoped >
.v-app {
    background: var(--app-color-gray);
    box-sizing: border-box;
    padding: 1rem;
    position: relative;
    height: 100%;
}

.v-app__modal {
    z-index: 1000000;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.v-app__modal__close {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
}

.v-app__modal-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100%/5*3);
    background: white;
    box-sizing: border-box;
    box-shadow: 0 0 0 20px white;
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
    padding-top: calc( var(--app-header-height) * 2 );
    padding-bottom: var(--app-footer-height);
    box-sizing: border-box;
    height: 100%;
}

.v-app__footer-container {
    z-index: 1000;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
}
</style>
