import Home from "./Pages/Home/home"
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { AllProjectSection } from "./Pages/AllProject/AllProjectSection";

const App = () => {

    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 800,
            easing: "ease-in-sine",
            delay: 100,
        });
        AOS.refresh();
    }, []);
    return (

        <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="AllProjectSection" element={<AllProjectSection />}></Route>
            </Routes>
        </div>
    );
};

export default App;
