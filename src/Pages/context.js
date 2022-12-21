import React, {useState, useContext} from "react";
const AppContext = React.createContext()
const AppProvider = ({children}) => {
    const [isQuestionsPageOpen, setQuestionsPage] = useState(false);
    const [isSelectionPanelOpen, setSelectionPanel] = useState(false);
    const [isEnterButton, setEnterButton] = useState(true);
    const [isShowAnswer, setShowAnswer] = useState(false)


    const openQuestionsPage = () => {
        setQuestionsPage(true);
        setSelectionPanel(false)
    }
    const closeQuestionsPage = () => {
        setQuestionsPage(false);
        hideAnswer()
        openEnterButton()
    }

    const openSelectionPanel = () => {
        setSelectionPanel(true);
        setEnterButton(false)
    }
    const closeSelectionPanel = () => {
        setSelectionPanel(false);
        openEnterButton()
    }
 const openEnterButton = () => {
        setEnterButton(true)
    }
    const closeEnterButton = () => {
        setEnterButton(false)
    }

    const showAnswer = () => {
        setShowAnswer(true)
    }
    const hideAnswer = () => {
        setShowAnswer(false)
    }
    return (
        <AppContext.Provider
        value={{
            isQuestionsPageOpen,
            openQuestionsPage,
            closeQuestionsPage,

            isSelectionPanelOpen,
            openSelectionPanel,
            closeSelectionPanel,

            isEnterButton,
            closeEnterButton,

            isShowAnswer,
            showAnswer,
            hideAnswer
            
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
   
    return useContext(AppContext)
}

export {AppContext, AppProvider};