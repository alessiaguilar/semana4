import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Message from "./message";
import Header from "./header";
import Main from "./main";
import Form from "./form";
import Footer from "./footer";


const root = createRoot(document.getElementById("root"));
root.render(    
    <StrictMode>
        <Header></Header>
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <Main></Main>
                </div>
                <div className="col-md-4">
                    <Form></Form>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </StrictMode>
);