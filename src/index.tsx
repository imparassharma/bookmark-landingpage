import React from "react";
import {createRoot} from 'react-dom/client';
import Main from "./Main";
const rootElement = document.getElementById('root');

if(rootElement){
    const Root = createRoot(rootElement);
    Root.render(<Main/>);
}