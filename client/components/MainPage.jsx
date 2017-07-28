import React from 'react'
import { Link } from 'react-router-dom'

const MainPage = () => {
  return (
    <div className="flex-container">
      <span><img src={`/images/horoeka.jpg`} className="actual-img" /></span>
      <span><Link to={`/quiz/1`}> <button className="start-button">Start Quiz</button></Link></span>
    </div >
  )
}
export default MainPage

