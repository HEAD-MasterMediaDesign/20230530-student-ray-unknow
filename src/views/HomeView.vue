<template>
    <section class="v-home-view" >
        <h1>{{levelData.titre}}</h1>
        <p>{{levelData.description}}</p>

        <div
            class="v-home-view__questions-container"
        >
            <template
                v-for="question of sortedQuestions"
            >
                <div
                    v-if="question.type === 'questionActive'"
                    class="v-home-view__questions-container__question v-home-view__questions-container__question--active"
                    @click="linkOnClick($event, question.url)"
                    @contextmenu="linkOnContextMenu($event, question.index)"
                >{{ question.index }} -> {{ question.url }}
                </div>

                <div
                    v-if="question.type === 'questionUnactive'"
                    :class="{
                                'is-active': levelData.questionResolvedCounter >= levelData.activeQuestions.length,
                                'is-resolved': question.isResolved
                            }"
                    class="v-home-view__questions-container__question v-home-view__questions-container__question--inactive"
                >
                    {{ question.index }} -> {{ question.url }}
                </div>

                <div
                    class="v-home-view__questions-container__question v-home-view__questions__question--image"
                    v-if="question.type === 'questionImage'"
                    @click="openImageWindow(question)"
                >
                    <img
                        class="v-home-view__questions__question__cover"
                        alt=""
                        :src="question.imageCover"
                    >
                    <div
                        class="v-home-view__questions__question__text"
                    >
                        {{question.text}}
                    </div>

                </div>

                <div
                    class="v-home-view__questions-container__question v-home-view__questions__question--image"
                    v-if="question.type === 'questionVideo'"
                >
                    <img
                        class="v-home-view__questions__question__cover"
                        alt=""
                        :src="question.videoCover"
                    >
                    <div
                        class="v-home-view__questions__question__text"
                    >
                        {{question.text}}
                    </div>
                </div>

            </template>
        </div>


        <div
            class="v-home-view__modal v-home-view__modal--image"
            v-if="imageModalData"
        >
            <div
                class="v-home-view__modal__cache"
                @click="clearModalData()"
            ></div>
            <div
                class="v-home-view__modal__container"
            >
                <img
                    alt=""
                    :src="imageModalData.imageURL"
                />

                <button
                    v-if="imageModalData.choiceOptimist && imageModalData.choicePessimist"
                    @click="openChoiceModal($event, imageModalData.index)"
                >
                    open choice
                </button>
                <button
                    v-else
                    @click="clearModalData()"
                >
                    close
                </button>
            </div>
        </div>

    </section>
</template>





<script lang="ts" setup>
// defineProps<{
// }>()

import type {
    IDataTypeLevel,
    IDataTypeQuestionActive,
    IDataTypeQuestionImage,
    IDataTypeQuestionUnactive,
    IDataTypeQuestionVideo
} from "../data";
import router from "../router";
import {useAppStore} from "../stores/counter"
import {computed, ComputedRef, ref} from "vue";

const levelData: IDataTypeLevel = useAppStore().data.levels[router.currentRoute.value.path.substring(1)]

const imageModalData = ref(null as null | IDataTypeQuestionImage)
const videoModalData = ref(null as null | IDataTypeQuestionVideo)

function clearModalData() {
    imageModalData.value = null
    videoModalData.value = null
}

function openChoiceModal(e: MouseEvent, activeQuestionIndex: number) {
    linkOnContextMenu(e, activeQuestionIndex)
    // clearModalData()
}

function openImageWindow(question: IDataTypeQuestionImage) {
    clearModalData()
    imageModalData.value = question
}

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

const sortedQuestions: ComputedRef<(IDataTypeQuestionActive | IDataTypeQuestionUnactive | IDataTypeQuestionVideo | IDataTypeQuestionImage)[]> = computed(() => {
    return [
        ...levelData.activeQuestions,
        ...levelData.inactiveQuestions,
        ...levelData.videoQuestions,
        ...levelData.imageQuestions
    ].sort((a, b) => {
        if( a.index < b.index ) return -1
        else 1
    })
})

</script>





<style lang="scss" scoped >
.v-home-view {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: solid 1px var(--app-color-blue);
    padding-left: 1rem;
    padding-right: 1rem;
}

.v-home-view__questions-container {
    display: flex;
    flex-wrap: wrap;
}

.v-home-view__questions-container__question {
    cursor: pointer;
    padding-top: 1rem;
    padding-bottom: 1rem;

    &.v-home-view__questions-container__question--active {
        width: 100%;
        box-sizing: border-box;
    }

    &.v-home-view__questions-container__question--inactive {
        width: 100%;
        box-sizing: border-box;
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

    &.v-home-view__questions__question--image {
        width: 20%;
        box-sizing: border-box;
    }

    .v-home-view__questions__question__cover {
        display: block;
        width: 100%;
        height: 80%;
        object-fit: cover;
    }

    .v-home-view__questions__question__text {
        padding-top: 1rem;
    }
}

.v-home-view__modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;

    .v-home-view__modal__cache {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        background: rgba(0, 0, 0, .5);
        cursor: pointer;
    }


    .v-home-view__modal__container {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 1;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        > img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

}

</style>
