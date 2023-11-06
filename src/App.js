import { Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage/homepage";
import About from "./components/about/about";
import Contact from "./components/contact/contact";

// const Homepage = lazy(() => import("./components/homepage/homepage.js"));
// const About = lazy(() => import("./components/about/about.js"));
// const Contact = lazy(() => import("./components/contact/contact.js"));


const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
            </Routes>
        </>
    );
};

export default App;