import React from "react";
import QuestionCard from "./components/QuestionCard";
import QUESTION_DATA from "./data/quiz-data";

const App = () => {
    // const [loading, setLoading] = React.useState(false);
    const [questions, setQuestions] = React.useState(QUESTION_DATA);
    const [number, setNumber] = React.useState(0);
    const [userAnswers, setUserAnswers] = React.useState([]);
    const [score, setScore] = React.useState(0);
    const [gameOver, setGameOver] = React.useState(true);

    const startQuiz = () => {
        setGameOver(false);
        setScore(0);
        setUserAnswers([]);
        setNumber(0);
    };

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!gameOver) {
            const answer = e.currentTarget.value;
            const correct = questions[number].correct_answer === answer;

            if (correct) {
                setScore((prevScore) => prevScore + 1);
            }
            setUserAnswers((prevAnswers) => [...prevAnswers, answer]);
        }
    };

    const nextQuestion = () => {
        const nextQuestion = number + 1;
        if (nextQuestion === questions.length) {
            setGameOver(true);
        } else {
            setNumber(nextQuestion);
        }
    };

    return (
        <div className="bg-[url('/src/assets/quiz-background.jpg')] h-screen bg-cover bg-top flex justify-center items-center px-8">
            {gameOver ? (
                <button className="h-12" onClick={startQuiz}>
                    <img
                        src="/src/assets/start-button.png"
                        alt="Start"
                        className="h-full hover:brightness-75"
                    />
                </button>
            ) : null}

            {!gameOver && (
                <div className="w-3/4 flex flex-col">
                    <p>Score: {score}</p>
                    <QuestionCard
                        questionNr={number + 1}
                        totalQuestions={questions.length}
                        question={questions[number].question}
                        answers={questions[number].answers}
                        userAnswer={
                            userAnswers ? userAnswers[number] : undefined
                        }
                        callback={checkAnswer}
                    />

                    {userAnswers.length === number + 1 &&
                    number !== questions.length - 1 ? (
                        <button className="h-12" onClick={nextQuestion}>
                            <img
                                src="/src/assets/next-button.png"
                                alt="Next"
                                className="h-full hover:brightness-75"
                            />
                        </button>
                    ) : null}
                </div>
            )}
        </div>
    );
};

export default App;
