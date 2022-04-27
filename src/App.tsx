import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./site/Header";
import {Body} from './site/Body';
import {Footer} from "./site/Footer";

function App() {
    return (
        <div>
            <Header title={'NEW Header'}/>
            <Body titleForBody={'NEW Body'}/>
            <Footer titleForFooter={'NEW Footer'}/>
        </div>
    );
}

export default App;
