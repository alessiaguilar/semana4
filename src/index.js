import 'bootstrap/dist/css/bootstrap.min.css';
import 'react'
import './style.css';
import { createRoot } from "react-dom/client";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const feather = require('feather-icons');

import Main from "./main";
import Aside from "./aside";

import Single from './single';
import Basic from "./layout/basic";

setTimeout ( () => {
    feather.replace();
}, 1000);
 
const router = createBrowserRouter([
    {
        path: "/",
        element: <Basic />,
        children: [
            {
                path: '',
                element: <>
                    <div className="col-md-8">
                        <Main></Main>
                    </div>
                    <div className="col-md-4">
                        <Aside></Aside>
                    </div>
                </>
            },
            {
                path: "detalle/:slug",
                element: <Single/>
            },
        ],
    }
]);

const root = createRoot(document.getElementById("root"));
    root.render(
    <RouterProvider router={router} />
);