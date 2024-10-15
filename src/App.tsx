import React from "react";
import QuestionCard from "./components/QuestionCard";
import QUESTION_DATA, { QuestionData } from "./data/quiz-data";

type AnswerObject = {
    question: string;
    answer: string;
    correctAnswer: string;
    correct: boolean;
};

const App = () => {
    // const [loading, setLoading] = React.useState(false);
    const [page, setPage] = React.useState("home");
    const [questions, setQuestions] = React.useState<QuestionData>([]);
    const [number, setNumber] = React.useState(0);
    const [userAnswers, setUserAnswers] = React.useState<AnswerObject[]>([]);
    const [score, setScore] = React.useState(0);
    const [gameOver, setGameOver] = React.useState(true);

    const startQuiz = () => {
        setQuestions(QUESTION_DATA);
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

    console.log(page);
    return (
        <div className="bg-background w-full h-screen flex flex-col items-center">
            {page == "home" && (
                <>
                    <div className="flex bg-secondary h-full">
                        <div className="w-1/2 p-12 flex flex-col justify-center">
                            <h1 className="text-5xl font-semibold py-4 max-w-lg">
                                Welcome to Our Website!
                            </h1>
                            <p className="text-lg py-4 leading-relaxed">
                                Halo semuanya! Website ini bertujuan untuk
                                membagikan informasi kepada kalian mengenai
                                pentingnya memiliki toilet yang bersih, cara
                                menjaga kebersihan toilet, dan bahayanya toilet
                                yang kotor. Selain itu, di dalam website ini
                                terdapat sebuah mini-game yang asik dan dapat
                                kalian coba, lho.
                            </p>
                            <button
                                className="bg-primary rounded-md w-32 h-12 text-lg hover:brightness-75 mt-4"
                                onClick={() => setPage("info")}
                            >
                                More
                            </button>
                        </div>

                        <div className="w-1/2">
                            <img
                                src="/home-background.jpg"
                                alt="Home"
                                className="overflow-hidden object-cover h-full"
                            />
                        </div>
                    </div>
                </>
            )}

            {page == "info" && (
                <>
                    {/* First Section */}
                    <div className="flex bg-secondary max-h-[500px]">
                        <div className="w-2/5 p-12 flex flex-col justify-center">
                            <h2 className="text-4xl font-semibold pt-4 max-w-lg">
                                Toilet Bersih
                            </h2>
                            <p className="text-lg py-4 leading-relaxed">
                                Toilet bersih merupakan salah satu fasilitas
                                terpenting yang harus dimiliki oleh setiap
                                sekolah. Apabila sekolah memiliki toilet yang
                                bersih, maka seluruh siswa dan warga sekolah
                                akan nyaman serta produktivitas mereka akan
                                meningkat
                            </p>

                            <a
                                href="https://www.vanguardsv.com/2024/06/the-importance-of-clean-toilets-in-schools/"
                                target="_blank"
                            >
                                <button className="bg-primary rounded-md w-32 h-12 text-lg hover:brightness-75 mt-4">
                                    More
                                </button>
                            </a>
                        </div>
                        <div className="w-3/5">
                            <img
                                src="/bathroom.jpg"
                                alt="Home"
                                className="object-cover max-h-[500px] w-full"
                            />
                        </div>
                    </div>
                    {/* Second Section */}
                    <div className="flex bg-background max-h-[500px]">
                        <div className="w-2/5">
                            <img
                                src="/streptococcus.jpg"
                                alt="Streptococcus"
                                className="object-cover h-full w-full"
                            />
                        </div>
                        <div className="w-3/5 p-12 flex flex-col justify-center">
                            <h2 className="text-4xl font-semibold pt-4 max-w-lg">
                                Pentingnya Toilet Bersih
                            </h2>
                            <p className="text-lg py-4 leading-relaxed">
                                Berdasarkan beberapa sumber dan jurnal ilmiah,
                                memiliki toilet bersih dapat meningkatkan
                                kemampuan produktivitas seluruh siswa dan warga
                                sekolah. Selain itu, seluruh warga sekolah dapat
                                melakukan aktivitas, seperti BAB/BAK, dengan
                                aman dan nyaman.
                            </p>
                            <p className="text-lg leading-relaxed">
                                Toilet yang bersih juga menghindari kita dari
                                beberapa virus seperti{" "}
                                <span className="italic">streptococcus</span>,
                                <span className="italic">staphylococcus</span>,{" "}
                                <span className="italic">E. coli</span> dan{" "}
                                <span className="italic">shigella</span>, virus
                                hepatitis A, virus flu biasa, dan berbagai
                                organisme yang ditularkan melalui hubungan
                                seksual. Oleh karena itu, jika kita memiliki
                                toilet yang bersih kita dapat terhindar dari
                                bakteri dan virus tersebut.
                            </p>
                        </div>
                    </div>
                    {/* Third Section */}
                    <div className="flex bg-secondary max-h-[500px]">
                        <div className="w-2/5 p-12 flex flex-col justify-center">
                            <h2 className="text-4xl font-semibold pt-4 max-w-lg">
                                Toilet Tidak Bersih dan dampaknya
                            </h2>
                            <p className="text-lg py-4 leading-relaxed">
                                Toilet tidak bersih memiliki beberapa dampak
                                negative bagi kesehatan tubuh kita. Selain,
                                menimbulkan rasa rishi dan tidak nyaman. Apabila
                                kita menggunakan toilet yang tidak bersih, kita
                                akan mudah terpapar beberapa virus dan bakteri.
                                Berikut beberapa penyakit yang dapat ditimbulkan
                                oleh toilet yang tidak bersih:
                            </p>
                            <ul className="list-disc list-inside">
                                <li>Penyakit demam tifoid</li>
                                <li>Disentri</li>
                                <li>Hepatitis</li>
                                <li>Kolera</li>
                                <li>Kanker Serviks</li>
                            </ul>
                        </div>
                        <div className="w-3/5">
                            <img
                                src="/bathroom.jpg"
                                alt="Home"
                                className="object-cover max-h-[500px] w-full"
                            />
                        </div>
                    </div>
                    {/* Fourth Section */}
                    <div className="flex bg-background">
                        <div className="w-full p-12 flex flex-col justify-center items-center">
                            <h2 className="text-4xl font-semibold pt-4 max-w-lg">
                                Cara Merawat Toilet
                            </h2>
                            <p className="text-base py-4 leading-relaxed">
                                Berikut merupakan langkah-langkah yang dapat
                                dilakukan agar kita memiliki toilet yang bersih.
                            </p>
                            <ul className="list-disc ml-4 flex flex-col gap-2">
                                <li>
                                    Menyiram semua kotoran hingga bersih setelah
                                    menggunakan toilet
                                </li>
                                <li>
                                    Menyediakan pengharum ruangan dan/ kapur
                                    barus di toilet
                                </li>
                                <li>Memiliki aliran air bersih yang cukup </li>
                                <li>
                                    Setiap hari toilet dibersihkan oleh Cleaning
                                    Services atau pihak terkait.
                                </li>
                                <li>
                                    Menyediakan sabun dan/ karbol agar toilet
                                    tetap wangi
                                </li>
                                <li>
                                    Tidak Membuang kotoran baik BAK/BAB secara
                                    sembarangan
                                </li>
                                <li>
                                    Pastikan tidak ada genangan air/ toilet
                                    tetap kering.
                                </li>
                            </ul>
                        </div>
                    </div>
                </>
            )}

            {page == "quiz" && (
                <div className="bg-[url('/src/assets/quiz-background.jpg')] h-screen bg-cover bg-top flex justify-center items-center">
                    {/* {gameOver ? (
                <button className="h-12" onClick={startQuiz}>
                    <img
                    src="/start-button.png"
                        alt="Start"
                        className="h-full hover:brightness-75"
                        />
                        </button>
            ) : null} */}

                    {!gameOver && (
                        <div className="w-3/4 flex flex-col">
                            <p>Score: {score}</p>
                            <QuestionCard
                                questionNr={number + 1}
                                totalQuestions={questions.length}
                                question={questions[number].question}
                                answers={questions[number].answers}
                                userAnswer={
                                    userAnswers
                                        ? userAnswers[number]
                                        : undefined
                                }
                                callback={checkAnswer}
                            />

                            {userAnswers.length === number + 1 &&
                            number !== questions.length - 1 ? (
                                <button
                                    className="h-12 my-4 relative"
                                    onClick={nextQuestion}
                                >
                                    <img
                                        src="/next-button.png"
                                        alt="Next"
                                        className="absolute h-full hover:brightness-75 right-0 top-0"
                                    />
                                </button>
                            ) : null}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default App;
