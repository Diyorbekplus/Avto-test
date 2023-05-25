import React from 'react'
import Selection from './Selection'
import Questions from './Questions'
import { useGlobalContext } from '../Components/context';

const Test = () => {
  const {visibleSelection, visibleQuestions} = useGlobalContext();

  return (
    <div className='page test'>
      { visibleSelection && <Selection/>}
      { visibleQuestions && <Questions/>}
    </div>
  )
}

export default Test