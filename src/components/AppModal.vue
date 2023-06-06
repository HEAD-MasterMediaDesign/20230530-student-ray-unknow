<template>
    <section class="v-app-modal" >
        <header>
            <div>THOUGHT PROCESS {{useAppStore().data.levels[useAppStore().modalLevelKey].questionResolvedCounter}}</div>
        </header>
        <div
            class="v-app-modal__body"
        >
            <div
                class="v-app-modal__body__coll"
                v-if="getChoicesByIndex.choicePessimist.length > 0"
            >
                <p>{{ getChoicesByIndex.choicePessimist }}</p>
                <div
                    class="v-app-modal__body__coll__choice"
                    @click="useAppStore().data.levels[useAppStore().modalLevelKey].questionResolvedCounter++"
                >[ choose ]</div>
            </div>
            <div
                class="v-app-modal__body__coll"
                v-if="getChoicesByIndex.choiceOptimist.length > 0"
            >
                <p>{{  getChoicesByIndex.choiceOptimist }}</p>
                <div
                    class="v-app-modal__body__coll__choice"
                    @click="useAppStore().data.levels[useAppStore().modalLevelKey].questionResolvedCounter++"
                >[ choose ]</div>
            </div>
        </div>
    </section>
</template>





<script lang="ts" setup>
import {computed} from "vue"
import {useAppStore} from "../stores/counter"
import type {IDataTypeQuestionActive} from "@/data"

// defineProps<{
// }>()


const getChoicesByIndex = computed((): IDataTypeQuestionActive => {

    const arrayOfActiveQuestions = useAppStore().data.levels[useAppStore().modalLevelKey].activeQuestions

    return arrayOfActiveQuestions.find(value => {
        return value.index === useAppStore().modalActiveQuestionIndex
    })
})



</script>





<style scoped lang="scss">
.v-app-modal {
    color: var(--app-color-blue);
    border: solid 1px;
    width: 100%;
}

header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    height: 2rem;
    text-align: center;
    border-bottom: solid 1px;
}

.v-app-modal__body {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: nowrap;
}

.v-app-modal__body__coll {
    position: relative;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 2rem;
    width: 100%;
    box-sizing: border-box;

    &:first-child {
        border-right: solid 1px;
    }
}

.v-app-modal__body__coll__choice {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    user-select: none;
    cursor: pointer;

    &:hover {
        background: black;
        color: white;
    }
}
</style>
