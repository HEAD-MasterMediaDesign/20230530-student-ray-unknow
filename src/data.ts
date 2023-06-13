export interface IDataType {
    levels: {[key: string]: IDataTypeLevel}
}

export interface IDataTypeLevel {
    "titre": string,
    "description": string,
    "activeQuestions": IDataTypeQuestionActive[],
    "inactiveQuestions": IDataTypeQuestionUnactive[],
    "videoQuestions":    IDataTypeQuestionVideo[],
    "imageQuestions":       IDataTypeQuestionImage[],
    questionResolvedCounter: number,
}

export interface IDataTypeQuestion {
    type: 'questionActive' | 'questionUnactive' | 'questionVideo' | 'questionImage',
    "index": number,
}

export interface IDataTypeQuestionActive extends IDataTypeQuestion {
    type: 'questionActive',
    "url": string,
    "choicePessimist": string,
    "choiceOptimist": string,
}

export interface IDataTypeQuestionUnactive extends IDataTypeQuestion {
    type: 'questionUnactive',
    "url": string,
    "description": string,
    "pageOfNextLeve": string,
    "isResolved": boolean,
}

export interface IDataTypeQuestionVideo extends IDataTypeQuestion {
    type: 'questionVideo',
    videoURL: string,
    text: string,
    videoCover: string,
}
export interface IDataTypeQuestionImage extends IDataTypeQuestion {
    type: 'questionImage',
    imageURL: string,
    text: string,
    imageCover: string,
    "choicePessimist"?: string,
    "choiceOptimist"?: string,
}
