import React from 'react';
import './App.css';
import OnOff from "./OnOff/OnOff";
import Accordion from "./Accordion/Accordion";
import Rating from "./Rating/Rating";

function App() {
    return (
        <div className={'App'}>
            <OnOff />
            <Accordion titleValue={'Мenu'}/>
            <Rating/>


        </div>
    );
}

export default App
