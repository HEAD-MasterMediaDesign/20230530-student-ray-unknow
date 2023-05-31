<template>
    <nav class="v-app-navigation" >
        <div class="v-app-navigation__container">
        <template
            v-for="route of listOfRoutes"
        >
            <div
                class="v-app-navigation__links-container"
                :class="{
                    'is-active': useRouter().currentRoute.value.name === route.name,
                }"
                v-if="route.name !== 'home'"
            >
                <router-link
                    class="v-app-navigation__links-container__link"
                    :to="route.path"
                >{{route.name}}</router-link>
            </div>
        </template>
        </div>
        <div
            class="v-app-navigation__container"
        >
            <div class="v-app-navigation__links-container">
                <div class="v-app-navigation__links-container__link" >USB</div>
            </div>
        </div>
    </nav>
</template>





<script lang="ts" setup>
// defineProps<{
// }>()

import {useRouter} from "vue-router";

const listOfRoutes = useRouter().getRoutes()

</script>





<style lang="css" scoped >
.v-app-navigation {
    height: var(--app-header-height);
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: normal;
    color: var(--app-color-gray);
    background: var(--app-color-blue);
}

.v-app-navigation__container {
    display: flex;
}

.v-app-navigation__links-container {
    display: flex;
    align-items: center;
    padding-left: 1rem;
    padding-right: 1rem;
}
.v-app-navigation__links-container.is-active {
    background: var(--app-color-gray);
    color: var(--app-color-blue);
}

.v-app-navigation__links-container__link {
    display: block;
    color: inherit;
}
</style>
