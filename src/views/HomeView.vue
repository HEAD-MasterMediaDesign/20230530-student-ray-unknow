<template>
    <section class="v-home-view" >
        <h1>{{levelData.titre}}</h1>
        <p>{{levelData.description}}</p>

        <div class="v-home-view__questions">
            <div
                v-for="question of levelData.activeQuestions"
                class="v-home-view__questions__question"
                @click="linkOnClick($event, question.url)"
                @contextmenu="linkOnContextMenu($event, question.index)"
            >{{question.index}} -> {{question.url}}</div>
        </div>

        <div class="v-home-view__questions">
            <div
                v-for="question of levelData.inactiveQuestions"
                :class="{
                    'is-active': levelData.questionResolvedCounter >= levelData.activeQuestions.length,
                    'is-resolved': question.isResolved
                }"
                class="v-home-view__questions__question v-home-view__questions__question--inactive"
            >
                {{question.index}} -> {{question.url}}
            </div>
        </div>
    </section>
</template>





<script lang="ts" setup>
// defineProps<{
// }>()

import type {IDataTypeLevel} from "../data";
import router from "../router";
import {useAppStore} from "../stores/counter"

const levelData: IDataTypeLevel = useAppStore().data.levels[router.currentRoute.value.path.substring(1)]

function linkOnClick(e: MouseEvent, url: string) {
    e.preventDefault()

    console.log('open link to: ', url)

    window.open(url, "_blank")
}

function linkOnContextMenu(e: MouseEvent, activeQuestionIndex: number) {
    e.preventDefault()

    useAppStore().modalLevelKey = router.currentRoute.value.path.substring(1)
    useAppStore().modalActiveQuestionIndex = activeQuestionIndex

}

</script>





<style lang="css" scoped >
.v-home-view {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: solid 1px var(--app-color-blue);
    padding-left: 1rem;
    padding-right: 1rem;
}

.v-home-view__questions__question {
    cursor: pointer;
    padding-top: 1rem;
    padding-bottom: 1rem;
}

.v-home-view__questions__question.v-home-view__questions__question--inactive {
    opacity: .5;

    &.is-active {
        opacity: 1;
        color: blue;
    }

    &.is-resolved {
        color: red;
        opacity: 1;
    }
}
</style>
