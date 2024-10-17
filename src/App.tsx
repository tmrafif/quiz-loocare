// import React from "react";
import { Routes, Route } from "react-router-dom"
import routes from "./routes";

const App = () => {
    return (
        <div className="flex flex-col items-center w-full h-screen bg-background">
            <Routes>
                {routes.map(({...route}, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={route.element}
                    />
                ))}
            </Routes>
        </div>
    );
};

export default App;
