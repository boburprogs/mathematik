
import { NavLink } from 'react-router-dom'
import React from 'react'

function Start_quiz() {
    return (
        <main className='start_main'>
            <div className='container'>
                <img src="../public/Frame 25.svg" alt="" />
                <h5>Total Questions: <span>05</span></h5>
                <h5>Total Questions: <span>15 min</span></h5>
                <h5>Instructions:</h5>
                <p>The quizzes consists of questions carefully designed to help you self-assess your comprehension of the information presented on the topics covered in the module.
                    After responding to a question, click on the "Next Question" button at the bottom to go to the next questino. <br /><br /> After responding to the 8th question, click on "Close" on the top of the window to exit the quiz. <br /><br />
                    If you select an incorrect response for a question, you can try again until you get the correct response. If you retake the quiz, the questions and their respective responses will be randomized.
                </p>
                <div className='btn'>
                    <button>
                        <span><NavLink style={{color:"black"}} to={"/contact"}>BOSHLASH</NavLink></span>
                    </button>
                   
                </div>
            </div>
        </main>
    )
}

export default Start_quiz