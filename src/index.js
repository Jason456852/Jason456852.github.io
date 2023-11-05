import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import "./index.css";
import Loading from './components/loading.js';

const Home = lazy(() => import("../home/home.js"));
const About = lazy(() => import("../about/about.js"));
const Contact = lazy(() => import("../contact/contact.js"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
    </Suspense>
);

