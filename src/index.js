import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import {
    createHashRouter,
    RouterProvider,
} from "react-router-dom";
import Loading from './components/loading.js';
import Error from './components/error.js';
import Homepage from './components/homepage/homepage.js';
import About from './components/about/about.js';
import Contact from './components/contact/contact.js';

// const Homepage = lazy(() => import("./components/homepage/homepage.js"));
// const About = lazy(() => import("./components/about/about.js"));
// const Contact = lazy(() => import("./components/contact/contact.js"));

const router = createHashRouter([
    {
        path: "/",
        element: <Homepage />,
        errorElement: <Error />,
        children: [
            {
                path: "about",
                element: <About />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
        ]
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

