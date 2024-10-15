import React from "react";

type AnswerObject = {
    question: string;
    answer: string;
    correctAnswer: string;
    correct: boolean;
};

type QuestionCardProps = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
};

const QuestionCard: React.FC<QuestionCardProps> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestions,
}) => {
    return (
        <div className="w-full">
            <div className="p-2 bg-violet-300 border-violet-900 border-4 object-fit max-w-60 text-center">
                <p className="text-xs">
                    Question: {questionNr} / {totalQuestions}
                </p>
            </div>
            <div className="bg-violet-300 text-center p-6 my-9 border-4 border-violet-900 h-32">
                <p className="md:text-base text-xs">{question}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                {answers.map((answer, index) => (
                    <button
                        key={index}
                        className={`md:text-base text-xs ${
                            userAnswer
                                ? userAnswer.answer === answer 
                                    ? userAnswer.correct
                                        ? "bg-green-300"
                                        : "bg-red-300"
                                    : userAnswer.correctAnswer === answer
                                        ? "bg-green-300"
                                        : "bg-violet-300"
                                : "bg-violet-300"
                        } text-center p-4 border-4 border-violet-900`}
                        disabled={userAnswer ? true : false}
                        value={answer}
                        onClick={callback}
                    >
                        <p>{answer}</p>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuestionCard;
