import React, { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useGlobalContext } from './context';
import { AiOutlineClose } from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

import autoQuestions from "./data";
function Home() {
  const {isQuestionsPageOpen, openQuestionsPage, closeQuestionsPage, isSelectionPanelOpen, closeSelectionPanel, openSelectionPanel, isEnterButton, isShowAnswer, showAnswer, closeAnswer} = useGlobalContext()
  const [biletCount, setBiletCounter] = useState(1);
  const {bilet, questions} = autoQuestions[biletCount];
  const [questionCount, setQuestionCounter] = useState(0)
  const { id, img, question, answers, trueAnswer} = questions[questionCount];

/*   useEffect(()=> {
   return questions
  }, [biletCount]) */

  const checkNumber = (number) => {
    if (number > questions.length - 1) {
      return 0;
    }
    if (number < 0) {
      return questions.length - 1;
    }
    return number;
  };
  const nextQuestion = () => {
    setQuestionCounter((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevQuestion = () => {
    setQuestionCounter((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <div className='home'>
      {/* Enter Btn */}
     <button className={`${isEnterButton ? 'enter-btn show-enter-btn' : 'enter-btn'}`} onClick={openSelectionPanel}>Kirish</button>

       {/* Selection Panel */}
     <div className={` col-10 col-sm-10 col-md-8 col-lg-6 ${isSelectionPanelOpen ?  'selection-panel show-selection-panel' : 'selection-panel'}`}>
      <label className='text-center alert bg-dark text-light'>Bilet Tanlang</label>
      <select className='form-control' value={biletCount} onChange={e => setBiletCounter(e.target.value)}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
        <option>11</option>
        <option>12</option>
        <option>13</option>
        <option>14</option>
        <option>15</option>
        <option>16</option>
        <option>17</option>
        <option>18</option>
        <option>19</option>
        <option>20</option>
        <option>21</option>
        <option>22</option>
        <option>23</option>
        <option>24</option>
        <option>25</option>
        <option>26</option>
        <option>27</option>
        <option>28</option>
        <option>29</option>
        <option>30</option>
      </select>

      <div className='buttons'>
        <button className='btn' onClick={closeSelectionPanel}>Chiqish</button>
        <button className='btn' onClick={openQuestionsPage}>Boshlash</button>
      </div>
     </div>

       {/* QuestionPanel */}
     <div className={`${isQuestionsPageOpen ? 'questions-panel show-questions-panel' : 'questions-panel'}`}>
      <div className='questions-label'>
        <p className='alert bg-light'><span className=''>{id}</span>. {question}</p>
        <ul className='list-group'>
          {answers.map((answer, index) => {
            return <li key={index} className='list-group-item'><span className='keys'>F{index+1}</span>. {answer}</li>
          })}
        </ul>

        {/* Answer */}
        <p>
  <button className="btn show-btn m-1" type="button" data-toggle="collapse" data-target="#answer" aria-expanded="false" aria-controls="answer">
   Javobi
  </button>
</p>
<div className={`${ isShowAnswer ? "answer"  : "answer collapse "}`} id="answer">
  <div className="card card-body">
   {trueAnswer}
  </div>
</div>

      </div>
      <div className='image-label '>
        <div className='header'>
        <button type="button" className="btn btn-light">
       <span className='badge'>{bilet}</span>-Bilet 
        </button>
        <button className='btn btn-danger' onClick={closeQuestionsPage}>{<AiOutlineClose/>}</button>
        </div>
        <img src={img} alt={trueAnswer}/>
        <div className='control-buttons'>
        <button className='btn ' onClick={prevQuestion}>{<FaAngleLeft/>} Oldingi </button>
        <button className='btn ' onClick={nextQuestion}>Keyingi {<FaAngleRight/>}</button>
      </div>
      </div>
     </div>
    </div>
  )
}

export default Home