const reducer = (state, action) => {
    if(action.type === "Show_Questions") {
        return {
            ...state,
            visableQuestions: true,
            visableSelection: false
        }
    }
    if(action.type === "Hide_Questions") {
        return {
            ...state,
            visableQuestions: false,
            visableEnterBtn: true,
            biletNumber: 1,
            questionNumber: 0
        }
    }
    if(action.type === "Show_Selection") {
        return {
            ...state,
            visableSelection: true,
            visableEnterBtn: false
        }
    }
    if(action.type === "Hide_Selection") {
        return {
            ...state,
            visableSelection: false,
            visableEnterBtn: true
        }
    }
}

export default reducer