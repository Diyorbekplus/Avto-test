import React from 'react'
import "../style/css/Home.css"
import { useGlobalContext } from '../Components/context';
import { Link } from 'react-router-dom';
import leftSideImg from "../Components/Images/home_img.png"
const Home = () => {
    const { visableSelection, visableQuestions  } = useGlobalContext();
  return (
    <div className='page home'>
      <div className="left_side">
        <h1>Yo'l harakati qoidalarini yaxshi bilasizmi?</h1>
        <h4>Bir sinab ko'ring</h4>
        <button><Link className='link' to={"test"}>Testga Marhamat</Link></button>
      </div>
      <div className="right_side">
        <div className="img_box">
          <img src={leftSideImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home