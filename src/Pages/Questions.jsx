import React from 'react';
import "../style/css/questions.css";
import { useGlobalContext } from '../Components/context';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { AiOutlineClose } from "react-icons/ai";

const Questions = () => {
  const {
    closeQuestionsPanel, 
    allquestions, 
    questionNumber,
    PrevQuestion, 
    NextQuestion, 
    biletNumber, 
    CheckAnswer, 
    SelectAnswer,
    selectedItem
  } = useGlobalContext();
  const { questions, bilet, } = allquestions[biletNumber];
  const {id, img, question, answers, trueAnswer} = questions[questionNumber];

  const handleNextQuestion = () => {
    NextQuestion();
    SelectAnswer(null, null); // Clear the selected answer
  };

  const handlePrevQuestion = () => {
    PrevQuestion();
    SelectAnswer(null, null); // Clear the selected answer
  };

  return (
    <section className="questions_layout">
      <div className="container">
      <div className='image-label '>
        <div className='header'>
          <div className="bilet">
            <span className='question_index'>{bilet}</span> - Bilet 
          </div>
          <button className='hide_question_btn' onClick={closeQuestionsPanel}>
            {<AiOutlineClose/>}
          </button>
        </div>
        <div className="img_box">
          <img src={img} alt={trueAnswer}/>
        </div>
      </div>
      <div className='questions-label'>
        <p className='alert'><span className=''>{id}. </span>{question}</p>
        <div className='answers-list'>
          {answers.map((answer, index) => (
            <div className={`answer_item`} key={index}>
              <input
                type="radio"
                name={`answer-${questionNumber}`}
                value={answer}
                onChange={(e) => SelectAnswer(e.target.value, trueAnswer)}
                checked={selectedItem === answer}
              />
              <label htmlFor="answer" className='answer'>{answer}</label>
            </div>
          ))}
        </div>
        <div className='control-buttons'>
          <button className='control-btn prev' onClick={handlePrevQuestion}>
            <span className="icon">{<FaAngleLeft/>}</span> <span className="btn_title">Oldingi</span> 
          </button>
          <button className='check_answer_btn' onClick={CheckAnswer}>Tasdiqlash</button>
          <button className='control-btn next' onClick={handleNextQuestion}>
            <span className="btn_title">Keyingi </span>
            <span className='icon'>{<FaAngleRight/>}</span>
          </button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Questions;
