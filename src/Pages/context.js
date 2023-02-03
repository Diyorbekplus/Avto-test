import React, { useContext, useReducer} from "react";
import reducer from "./reducer";
import autoQuestions from "./data";
const AppContext = React.createContext();

const initialState = {
    visableQuestions: false,
    visableSelection : false,
    visableEnterBtn: true,
    biletNumber: 1,
    questionNumber: 0,
    allquestions: autoQuestions
}

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const showQuesionsPage = () =>{
        dispatch({type: "Show_Questions"})
    }
    const hideQuesionsPage = () =>{
        dispatch({type: "Hide_Questions"})
    }
    const showSelectionPanel = () =>{
        dispatch({type: "Show_Selection"})
    }
    const hideSelectionPanel = () =>{
        dispatch({type: "Hide_Selection"})
    }
    return (
        <AppContext.Provider
        value={{
            ...state,
            showQuesionsPage,
            hideQuesionsPage,
            showSelectionPanel,
            hideSelectionPanel,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
   
    return useContext(AppContext)
}

export {AppContext, AppProvider};