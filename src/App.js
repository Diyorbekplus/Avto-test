import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useGlobalContext } from './Pages/context';
import { AiOutlineClose } from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import "./style/css/style.css"
function Home() {
  const {visableQuestions,showQuesionsPage, hideQuesionsPage,visableSelection, showSelectionPanel, hideSelectionPanel, visableEnterBtn, allquestions, biletNumber} = useGlobalContext();
  const [biletCount, setBiletCounter] = useState(biletNumber);
  const { questions, bilet} = allquestions[biletCount];
  const [questionNumber, setQuestionNumber] = useState(0)
  const {id, img, question, answers, trueAnswer} = questions[questionNumber];

  useEffect(() => {
    setQuestionNumber(0)
  }, [biletCount])
  
  const prevQuestion = () => {
    setQuestionNumber((item) => {
      let newNumber = item - 1;
     return checkNumber(newNumber)
    })
  }
  const nextQuestion = () => {
    setQuestionNumber((item) => {
      let newNumber = item + 1;
     return checkNumber(newNumber)
    })
  }
  $(".next").click(function(){
    $(".list-groups-item").css({"background": "none"})
  })
  const checkNumber = (number) => {
    if(number < 0) {
      return questions.length - 1
    }
    if(number > questions.length - 1) {
      return 0
    }
    return number
  }
  const checkAnswer = (e) => {
    if(e.target.textContent === trueAnswer) {
        return e.target.style.backgroundColor = "green"
    }
    if(e.target.textContent !== trueAnswer) {
        return e.target.style.backgroundColor = "red"
    }
}
  return (
    <div className='home '>
      {
        visableEnterBtn ?
        <button className="enter-btn" onClick={showSelectionPanel}>Kirish</button>
        : 
        ""
      }
       {
        visableSelection ? 
        (
          <div className={`selection-panel col-10 col-sm-10 col-md-8 col-lg-6`}>
          <label className='text-center alert text-light'>Bilet Tanlang</label>
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
            <button className='btn' onClick={hideSelectionPanel}>Chiqish</button>
            <button className='btn' onClick={showQuesionsPage}>Boshlash</button>
          </div>
         </div>
        ) 
        :
         ""
       }

       {
        visableQuestions ? 
        (
          <div className="questions-panel">
          <div className='questions-label'>
          <p className='alert'><span className=''>{id}</span>. {question}</p>
          <ul className='list-groups'>
              { answers.map((answer, index) => {
              return (<li key={index} className='list-groups-item' onClick={checkAnswer}>{answer}</li>)
              })}
          </ul>
          </div>
          <div className='image-label '>
          <div className='header'>
          <button type="button" className="btn btn-light bilet">
          <span className='badge'>{bilet}</span>- Bilet 
          </button>
          <button className='btn btn-danger hide_question_btn' onClick={hideQuesionsPage}>{<AiOutlineClose/>}</button>
          </div>
      
          <img src={img} alt={trueAnswer}/>
          <div className='control-buttons'>
          <button className='btn control-btn prev' onClick={prevQuestion}>{<FaAngleLeft/>} Oldingi </button>
          <button className='btn control-btn next' onClick={nextQuestion}>Keyingi {<FaAngleRight/>}</button>
          </div>
          </div>
          </div>
        )
        : 
        ""
       }
    </div>
  )
}

export default Home 