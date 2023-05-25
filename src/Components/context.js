import React, { useContext, useReducer} from "react";
import reducer from "./reducer";
import autoQuestions from "./data";
const AppContext = React.createContext();
const initialState = {
  visibleSelection: true, 
  visibleQuestions: false,
  allquestions: autoQuestions,
  biletNumber: 1, 
  questionNumber: 0, 
  selectedItem: null,
  trueAnswer : null, 
  radioChecked: null
};
const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const openQuestionsPanel = () => {
      dispatch({type: "OPEN_QUESTIONS"})
    }
    const closeQuestionsPanel = () => {
      dispatch({type: "CLOSE_QUESTIONS"})
    }
    const selectBilet = (id) => {
      dispatch({type: "SELECT_BILET", payload: id})
    }
    const NextQuestion = () => {
      dispatch({ type: 'NEXT_QUESTION' });
    };
    const PrevQuestion = () => {
      dispatch({ type: 'PREV_QUESTION' });
    };
    const SelectAnswer = (myValue, trueAnswer) => {
      const selectedValue = myValue;
        dispatch({
          type: "SET_SELECTED_ANSWER",
          payload: {selectedValue, trueAnswer},
        });
    };
    const CheckAnswer = () => {
      dispatch({ type: 'CHECK_ANSWER' });
      dispatch({ type: 'SET_IS_ANSWER_CHECKED', payload: true });
    };
    return (
        <AppContext.Provider
        value={{
            ...state,
            SelectAnswer,
            CheckAnswer,
            NextQuestion,
            PrevQuestion,
            openQuestionsPanel,
            closeQuestionsPanel,
            selectBilet,
        }}>
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = () => {
   
    return useContext(AppContext)
}
export {AppContext, AppProvider};