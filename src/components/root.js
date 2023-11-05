import { Route, Switch, Link } from "react-router-dom";
import React, { Suspense, lazy } from 'react';

const Homepage = lazy(() => import("./homepage/homepage.js"));
const About = lazy(() => import("./about/about.js"));
const Contact = lazy(() => import("./contact/contact.js"));

const Root = () => {
    return (<>
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/about"}>About</Link>
                </li>
                <li>
                    <Link to={"/contact"}>Contact</Link>
                </li>
            </ul>
        </nav>
        <Switch>
            <Route exact path="/">
                <Homepage />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
        </Switch>
    </>);
}

export default Root;