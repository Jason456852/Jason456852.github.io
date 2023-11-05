import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import Loading from './components/loading.js';
import Error from './components/error.js';

const Home = lazy(() => import("./components/homepage/home.js"));
const About = lazy(() => import("./components/about/about.js"));
const Contact = lazy(() => import("./components/contact/contact.js"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
    },
    {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
    },
    {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
    </Suspense>
);

