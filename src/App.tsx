import React, {MouseEventHandler} from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from './site/Body';
import {Footer} from "./site/Footer";
import {NewComponent} from "./newComponent";
import {Button} from "./components/Button";


function App() {
    // const students = [
    //     {id: 1, name: "James", age: 8},
    //     {id: 2, name: "Robert", age: 18},
    //     {id: 3, name: "John", age: 28},
    //     {id: 4, name: "Michael", age: 38},
    //     {id: 5, name: "William", age: 48},
    //     {id: 6, name: "David", age: 58},
    //     {id: 7, name: "Richard", age: 68},
    //     {id: 8, name: "Joseph", age: 78},
    //     {id: 9, name: "Thomas", age: 88},
    //     {id: 10, name: "Charles", age: 98},
    //     {id: 11, name: "Christopher", age: 100},
    // ]

    // const myFirstSubscriber = (e:React.MouseEvent<HTMLButtonElement>) => {
    //     console.log('hello iam victor')
    // }
    // const mySecondSubscriber = (e:React.MouseEvent<HTMLButtonElement>) => {
    //     console.log('hello iam alex')
    // }

    const Button1 = (sub: string, age: number) => {
        console.log(sub + ' ' + age)
    }

    const Button2 = (sub: string, age: number) => {
        console.log(sub + ' ' + age)
    }
    const Button3 = () => {
        console.log('stupid')
    }

    return (
        <div>
            <Button callBack={() => Button1('vysya', 21)} name={'1'}/>
            <Button callBack={() => Button2('alex', 33)} name={'2'}/>
            <Button callBack={Button3} name={'3'}/>
        </div>
    );
}

export default App;
