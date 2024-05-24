import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'; // Asegúrate de que este archivo se esté importando
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Basic from "./layout/basic";
import Main from "./main";
import Aside from "./aside";
import Single from './single';

const feather = require('feather-icons');

setTimeout(() => {
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
                element: <Single />
            },
        ],
    }
]);

const root = createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router} />
);
