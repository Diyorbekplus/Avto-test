const reducer = (state, action) => {
    switch (action.type) {
      case 'OPEN_QUESTIONS':
            return { ...state, 
                visibleSelection: false, 
                visibleQuestions: true };
      case 'CLOSE_QUESTIONS':
        return { ...state, 
            visibleSelection: true, 
            visibleQuestions: false,
            biletNumber: 1,
            questionNumber: 0, 
           };
      case 'SELECT_BILET':
            return { ...state, 
               biletNumber: action.payload};
      case "SELECT_ANSWER":
                const {selectedItem} = action.payload
                return {
                  ...state,
                  selectedItem: selectedItem,
                  radioChecked: true
                };
      case "CHECK_ANSWER":
        if(state.selectedItem === state.trueAnswer) {
          alert("Ofarin, To'g'ri javob tanladingiz");
          return {...state,
                  isAnswerChecked: true,
                }
        }else {
          alert("Afsuski, Nato'g'ri javob tanladingiz")
          return state
        }
      case 'NEXT_QUESTION':
        const isLastQuestion = state.questionNumber === state.allquestions[state.biletNumber].questions.length - 1;
        return {
          ...state,
          questionNumber: isLastQuestion ? 0 : state.questionNumber + 1,
          selectedItem: null,
          radioChecked: false
        };
      case 'PREV_QUESTION':
        const isFirstQuestion = state.questionNumber === 0;
        return {
          ...state,
          questionNumber: isFirstQuestion ? state.allquestions[state.biletNumber].questions.length - 1 : state.questionNumber - 1,
          selectedItem: null,
        };
        case "SET_SELECTED_ANSWER":
          const {selectedValue, trueAnswer} = action.payload;
          return {
            ...state,
            selectedItem: selectedValue,
            trueAnswer: trueAnswer,
            radioChecked: true
          };
          case "SET_IS_ANSWER_CHECKED":
            return {
              ...state,
              isAnswerChecked: action.payload,
            };
          default:
        return state;
    }
  };

  export default reducer