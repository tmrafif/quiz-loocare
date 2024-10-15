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
            <p>
                Question: {questionNr} / {totalQuestions}
            </p>
            <div className="bg-blue-500 text-center p-4 my-9 border-4 border-blue-900">
                <p>{question}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
                {answers.map((answer, index) => (
                    <button
                        key={index}
                        className="bg-blue-500 text-center p-4 border-4 border-blue-900"
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
