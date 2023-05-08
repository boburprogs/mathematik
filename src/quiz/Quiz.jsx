import { useState } from "react";

// const tests = [
//     {
//         question: "600 ni kinonik yoyilmasini toping.",
//         a: "2**3*5**2",
//         b: "8*75",
//         c: "8*3*5**2",
//         d: "2**6*3*5",
//         correct: "c",
//     },
//     {
//         question: "60 dan 70 gacha tub sonlaar nechta?",
//         a: "1",
//         b: "4",
//         c: "2",
//         d: "3",
//         correct: "c",
//     },
//     {
//         question: "70 dan 90 gacha tub sonlaar nechta?",
//         a: "8",
//         b: "7",
//         c: "6",
//         d: "5",
//         correct: "d",
//     },
//     {
//         question: "80 dan 100 gacha tub sonlaar nechta?",
//         a: "4",
//         b: "5",
//         c: "2",
//         d: "3",
//         correct: "d",
//     },
//     {
//         question: "1; 21; 27; 35; 37; 43; 361 sonlar ketma-ketligida nechta tub son bor?",
//         a: "1",
//         b: "4",
//         c: "2",
//         d: "3",
//         correct: "c",
//     },
//     {
//         question: "2; 9; 27; 57; 59; 63; 169 sonlar ketma-ketligida nechta tub son bor?",
//         a: "2",
//         b: "5",
//         c: "3",
//         d: "4",
//         correct: "a",
//     },
//     {
//         question: "7; 17; 57; 59; 93; 169 sonlar ketma-ketligida nechta tub son bor?",
//         a: "3",
//         b: "6",
//         c: "4",
//         d: "5",
//         correct: "a",
//     },
//     {
//         question: "480 ni tub ko'paytuvchilarga ajratilgan javobini toping.",
//         a: "4*2**3*3*5",
//         b: "4**3*3*5",
//         c: "2**5*3*5",
//         d: "2**6*3*5",
//         correct: "c",
//     },
//     {
//         question: "620 ni tub ko'paytuvchilarga ajratilgan javobini toping.",
//         a: "2**2*5*31",
//         b: "4*155*5",
//         c: "2**5*155",
//         d: "4*155",
//         correct: "a",
//     },
//     {
//         question: "420 ni tub ko'paytuvchilarga ajratilgan javobini toping.",
//         a: "2**2*5*7",
//         b: "3*4*7*5",
//         c: "2**2*105",
//         d: "2**2*3*7*5",
//         correct: "d",
//     },
// ]




// let shuffled = tests
//     .map(value => ({ value, sort: Math.random() }))
//     .sort((a, b) => a.sort - b.sort)
//     .map(({ value }) => value)



function Quiz() {

    // const [count, setCount] = useState(0)
    // const submit = () => {
    //     setCount(count + 1)
    //     console.log(input.value);
    // }
    // let shart = shuffled[count].question
    // let a = shuffled[count].a
    // let b = shuffled[count].b
    // let c = shuffled[count].c
    // let d = shuffled[count].d
    // let correct = shuffled[count].correct

    // return (
    //     <div className="quiz_main">
    //         <div className=" container">
    //             <div className="row quiz_sektion ">
    //                 <div className="col-sm-12 col-md-9 col-lg-7 sektion_ul">
    //                     <h1>{shart}</h1>
    //                     <h6></h6>
    //                     <h4><span>0</span>/10</h4>
    //                     <div className="form">
    //                         <input type="radio" id="01" name="r" value={1} defaultChecked="1" />
    //                         <label for="01">{a}</label>

    //                         <input type="radio" id="02" name="r" value={2} defaultChecked="2" />
    //                         <label for="02">{b}</label>

    //                         <input type="radio" id="03" name="r" value={3} defaultChecked="3" />
    //                         <label for="03">{c}</label>

    //                         <input type="radio" id="04" name="r" value={4} defaultChecked="4" />
    //                         <label for="04">{d}</label>
    //                     </div>
    //                     <div className="btn">
    //                         <button onClick={submit}>
    //                             <span> Button </span>
    //                         </button>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>

    // )






    const questions = [
        {
            questionText: "15+15",
            answerOptions: [
                { answerText: "30", isCorrect: true },
                { answerText: "25", isCorrect: false },
                { answerText: "31", isCorrect: false },
                { answerText: "29", isCorrect: false },
            ],
        },
        {
            questionText: "45+10-(5*2)",
            answerOptions: [
                { answerText: "30", isCorrect: false },
                { answerText: "55", isCorrect: false },
                { answerText: "45", isCorrect: true },
                { answerText: "35", isCorrect: false },
            ],
        },
        {
            questionText: "(12-5)*2-10",
            answerOptions: [
                { answerText: "5", isCorrect: false },
                { answerText: "15", isCorrect: false },
                { answerText: "8", isCorrect: false },
                { answerText: "4", isCorrect: true },
            ],
        },
        {
            questionText: "10+(10*2)-10",
            answerOptions: [
                { answerText: "20", isCorrect: true },
                { answerText: "10", isCorrect: false },
                { answerText: "15", isCorrect: false },
                { answerText: "25", isCorrect: false },
            ],
        },
        {
            questionText: "(10 / 2) + (38+12)",
            answerOptions: [
                { answerText: "35", isCorrect: false },
                { answerText: "55", isCorrect: true },
                { answerText: "70", isCorrect: false },
                { answerText: "75", isCorrect: false },
            ],
        },
        {
            questionText: "(50 / 5) + (5 * 5)",
            answerOptions: [
                { answerText: "35", isCorrect: true },
                { answerText: "43", isCorrect: false },
                { answerText: "32", isCorrect: false },
                { answerText: "58", isCorrect: false },
            ],
        },
        {
            questionText: "(50 / 5) + (5 * 5) - 10",
            answerOptions: [
                { answerText: "35", isCorrect: false },
                { answerText: "43", isCorrect: false },
                { answerText: "32", isCorrect: false },
                { answerText: "25", isCorrect: true },
            ],
        },
        {
            questionText: "10 - (50 / 5) + (5 * 5)",
            answerOptions: [
                { answerText: "25", isCorrect: true },
                { answerText: "43", isCorrect: false },
                { answerText: "32", isCorrect: false },
                { answerText: "54", isCorrect: false },
            ],
        }
    ];


    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;

        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };


    const refresh = () => {
        setCurrentQuestion(0)
        setScore(0)
        setShowScore(false)
    }





    return (<div className="question_cover">
        <div className="app">
            {
                showScore
                    ? <div className="section_score">
                        <div>Correct answers {score} / {questions.length}</div>
                        <button onClick={refresh} className="refresh_btn">Repeat the test</button>
                    </div> : <div className="quizz">
                        <div className="question_section">
                            <div className="question_count">
                                <span>Question {currentQuestion + 1} </span> / {questions.length}
                            </div>
                            <div className="question_text">
                                {questions[currentQuestion].questionText}
                            </div>
                        </div>
                        <div className="answer_section">
                            {questions[currentQuestion].answerOptions.map((item) => (
                                <button className="btn_tests" onClick={() => handleAnswerOptionClick(item.isCorrect)}>
                                    {item.answerText}
                                </button>
                            ))}
                        </div>
                    </div>
            }
        </div>
    </div>
    );
}

export default Quiz