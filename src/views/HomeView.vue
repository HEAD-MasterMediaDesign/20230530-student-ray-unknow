<template>
    <section class="v-home-view" >
        <h1>{{levelData.titre}}</h1>
        <p>{{levelData.description}}</p>

        <div class="v-home-view__questions">
            <div
                v-for="question of levelData.activeQuestions"
                class="v-home-view__questions__question"
                @click="linkOnClick($event, question.url)"
                @contextmenu="linkOnContextMenu($event, question)"
            >{{question.index}} -> {{question.url}}</div>
        </div>

        <div class="v-home-view__questions">
            <div
                v-for="question of levelData.inactiveQuestions"
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

import {data, IDataTypeLevel, IDataTypeQuestionActive} from "@/data";
import router from "../router";
import {useRouter} from "vue-router";

const levelData: IDataTypeLevel = data.levels[router.currentRoute.value.path.substring(1)]

function linkOnClick(e: MouseEvent, url: string) {
    e.preventDefault()

    console.log('open link to: ', url)
}

function linkOnContextMenu(e: MouseEvent, message: IDataTypeQuestionActive) {
    e.preventDefault()
    console.log('-----')
    console.log('open modale window with message: ')
    console.log('positive: ', message.choiceOptimist)
    console.log('negative: ', message.choicePessimist)
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
}
</style>
