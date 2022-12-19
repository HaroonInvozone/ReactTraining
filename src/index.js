import React from "react";
import ReactDOM  from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import SHowAll from "./component/counters";
import Calculator from "./component/calculator";
import Layout from "./component/Layout";
import NoPage from "./component/noPage";
import Home from "./component/home";
import CustomHook from "./component/customHook";

// ReactDOM.render(<SHowAll />, document.getElementById('root'));

// ReactDOM.render(<Calculator />, document.getElementById('root'));

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="counter" element={<SHowAll />} />
                <Route path="calculator" element={<Calculator />} />
                <Route path="CustomHook" element={<CustomHook/>} />
                <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);