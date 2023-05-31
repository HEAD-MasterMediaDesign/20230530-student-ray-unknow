<template>
    <nav class="v-app-navigation" >
        <div
            v-for="route of listOfRoutes"
            class="v-app-navigation__links-container"
        >
            <router-link
                class="v-app-navigation__links-container__link"
                :to="route.path"
            >{{route.name}}</router-link>
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
    height: var(--app-footer-height);
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
}

.v-app-navigation__links-container {
    padding: .5rem;
    background: lightgray;
}

.v-app-navigation__links-container__link {
    display: block;
}
</style>
