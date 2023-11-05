import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import Loading from './components/loading.js';
import Error from './components/error.js';

const Root = lazy(() => import("./components/router/root.js"));
const About = lazy(() => import("./components/about/about.js"));
const Contact = lazy(() => import("./components/contact/contact.js"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Suspense fallback={<Loading />}><Root /></Suspense>,
        errorElement: <Error />,
        children: [
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <RouterProvider router={router} />
);

