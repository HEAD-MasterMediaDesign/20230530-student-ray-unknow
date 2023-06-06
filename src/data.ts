export interface IDataType {
    levels: {[key: string]: IDataTypeLevel}
}

export interface IDataTypeLevel {
    "titre": string,
    "description": string,
    "activeQuestions": IDataTypeQuestionActive[],
    "inactiveQuestions": IDataTypeQuestionUnactive[],
    questionResolvedCounter: number,
}

export interface IDataTypeQuestionActive {
    "url": string,
    "choicePessimist": string,
    "choiceOptimist": string,
    "index": number,
}

export interface IDataTypeQuestionUnactive {
    "url": string,
    "description": string,
    "pageOfNextLeve": string,
    "index": number,
    "isResolved": boolean,
}
