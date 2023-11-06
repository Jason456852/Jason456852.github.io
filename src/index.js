import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Loading from './components/loading.js';
import Error from './components/error.js';

const Homepage = lazy(() => import("./components/homepage/homepage.js"));
const About = lazy(() => import("./components/about/about.js"));
const Contact = lazy(() => import("./components/contact/contact.js"));

const router = createBrowserRouter([
    {
        path: "/*",
        element: <Suspense fallback={<Loading />}><Homepage /></Suspense>,
        errorElement: <Error />,
        children: [
            {
                path: "/about",
                element: <Suspense fallback={<Loading />}><About /></Suspense>,
            },
            {
                path: "/contact",
                element: <Suspense fallback={<Loading />}><Contact /></Suspense>,
            },
        ]
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

