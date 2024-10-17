import HomePage from "../pages/HomePage";
import InfoPage from "../pages/InfoPage";
import QuizPage from "../pages/QuizPage";

const routes = [
    { path: "/", element: <HomePage /> },
    { path: "/info", element: <InfoPage /> },
    { path: "/quiz", element: <QuizPage /> },
];

export default routes;
