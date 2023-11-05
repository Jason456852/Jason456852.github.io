import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import Loading from './components/loading.js';
import Error from './components/error.js';

const Homepage = lazy(() => import("./components/homepage/homepage.js"));
const About = lazy(() => import("./components/about/about.js"));
const Contact = lazy(() => import("./components/contact/contact.js"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
        errorElement: <Error />,
    },
    {
        path: "about",
        element: <About />,
        errorElement: <Error />,
    },
    {
        path: "contact",
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

