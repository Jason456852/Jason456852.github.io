import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/loading.js";
import { Link } from "react-router-dom";

const Homepage = lazy(() => import("./components/homepage/homepage.js"));
const About = lazy(() => import("./components/about/about.js"));
const Contact = lazy(() => import("./components/contact/contact.js"));

const App = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to={`about`}>About</Link>
                </li>
                <li>
                    <Link to={`contact`}>Contact</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<Suspense fallback={<Loading />}><Homepage /></Suspense>}></Route>
                <Route path="/about" element={<Suspense fallback={<Loading />}><About /></Suspense>}></Route>
                <Route path="/contact" element={<Suspense fallback={<Loading />}><Contact /></Suspense>}></Route>
            </Routes>
        </>
    );
};

export default App;