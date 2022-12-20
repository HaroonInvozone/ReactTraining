import React from "react";
import ReactDOM  from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import SHowAll from "./Pages/counters";
import Calculator from "./Pages/calculator";
import Layout from "./component/Layout";
import NoPage from "./Pages/noPage";
import Home from "./component/home";
import FetchDummyData from "./component/fetchDummyData";

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
                <Route path="CustomHook" element={<FetchDummyData/>} />
                <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);