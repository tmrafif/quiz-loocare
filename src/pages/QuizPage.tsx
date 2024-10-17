import React from "react";
import QUESTION_DATA, { QuestionData } from "../data/quiz-data";
import QuestionCard from "../components/QuestionCard";

type AnswerObject = {
    question: string;
    answer: string;
    correctAnswer: string;
    correct: boolean;
};

const QuizPage = () => {
    const [questions, setQuestions] =
        React.useState<QuestionData>(QUESTION_DATA);
    const [number, setNumber] = React.useState(0);
    const [userAnswers, setUserAnswers] = React.useState<AnswerObject[]>([]);
    const [score, setScore] = React.useState(0);
    const [gameOver, setGameOver] = React.useState(true);

    const startQuiz = () => {
        setQuestions(QUESTION_DATA);
        setGameOver(false);
        // setScore(0);
        setUserAnswers([]);
        setNumber(0);
    };

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!gameOver) {
            const answer = e.currentTarget.value;
            const correct = questions[number].correct_answer === answer;

            if (correct) {
                setScore((prevScore) => prevScore + 20);
            }

            const answerObject = {
                question: questions[number].question,
                answer,
                correctAnswer: questions[number].correct_answer,
                correct,
            };
            setUserAnswers((prevAnswers) => [...prevAnswers, answerObject]);
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
        <div className="bg-[url('/src/assets/quiz-background.jpg')] w-full h-screen bg-cover bg-top flex justify-center items-center font-['Press_Start_2P']">
            {/* Start Button */}
            {gameOver && (
                <div className="flex flex-col justify-center items-center">
                    {userAnswers.length < number + 1 && (
                        <p className="md:text-3xl text-xl text-violet-900 pb-4">
                            Are you ready?
                        </p>
                    )}
                    {userAnswers.length === number + 1 && (
                        <>
                            <p className="md:text-3xl text-xl text-violet-900 pb-8">
                                Score: {score} / 100
                            </p>
                            <p className="md:text-xl text-lg text-violet-900 pb-4">Try again?</p>
                        </>
                    )}
                    <button className="h-12" onClick={startQuiz}>
                        <img
                            src="/start-button.png"
                            alt="Start"
                            className="h-full hover:brightness-75"
                        />
                    </button>
                </div>
            )}

            {!gameOver && (
                <div className="flex flex-col w-3/4">
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

                    {/* Next Button */}
                    {userAnswers.length === number + 1 &&
                    number !== questions.length ? (
                        <button
                            className="relative h-12 my-4"
                            onClick={nextQuestion}
                        >
                            <img
                                src="/next-button.png"
                                alt="Next"
                                className="absolute top-0 right-0 h-full hover:brightness-75"
                            />
                        </button>
                    ) : null}
                </div>
            )}
        </div>

        // <div className="bg-[url('/src/assets/quiz-background.jpg')] w-full h-screen bg-cover bg-top flex flex-col justify-center items-center font-['Press_Start_2P']">
        //             <h1 className="text-4xl text-violet-900">
        //                 Score: {score} / 100
        //             </h1>
        //             <p className="pt-12 pb-4 text-2xl text-violet-900">Try Again?</p>
        //             <button className="h-12" onClick={startQuiz}>
        //                 <img
        //                     src="/start-button.png"
        //                     alt="Start"
        //                     className="h-full hover:brightness-75"
        //                 />
        //             </button>
        //         </div>
    );
};

export default QuizPage;
