import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
//import { useState } from "react";
//import CardListUI from "./CardList";
import { GlobalProvider } from "./GlobalContext";
import Toggle from "./Toggle";
import Asignment3 from "./Asignment3"

function App() {
    //const [globalCount, setGlobalCount] = useState(0);
    //const [globalUserObject, setGlobalUserObject] = useState({});

    return (
        <GlobalProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Toggle />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/product" element={<Asignment3 />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </BrowserRouter>
        </GlobalProvider>
    );
}

export default App;
