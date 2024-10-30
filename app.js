import React from "react";
import { createRoot, ReactDOM } from "react-dom/client";
const jsxHeader = <h1>jsx is html like syntax used to createreact elements </h1>
const num=1234;
const ReactComponent = () =>{
    return ( <div><InnerComponent/><h1> i am an react component {num*5}  i will retun the jsx</h1></div> )
}
const InnerComponent = () =>(<h1>I am inner component</h1>)
const root = createRoot(document.getElementById("root"));
root.render(<ReactComponent/>); 