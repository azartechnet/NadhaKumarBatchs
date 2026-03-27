import React from "react";
import ReactDOM from "react-dom/client";


/*const App=()=>{
    return(
        <>
        <h1>Welcome</h1>
        <h2>Heading-2</h2>
        </>
     
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/

//Dynamic Rendering

/*const Sample=()=>{
    const name="azar";
    const age=20;
    return(
        <div>
            <h1>Hello,{name}</h1>
            <p>Your age is::{age}</p>
            <p>Today Date is::{new Date().toLocaleDateString()}</p>
            <p>Today Time is::{new Date().toLocaleTimeString()}</p>
        </div>
    )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//React List

/*const MyElem=()=>{
    return(
        <div>
            <h1>MyList</h1>
            <ul>
                <li>list1</li>
                <li>list2</li>
                <li>list3</li>
            </ul>
            <ol>
                <li>list1</li>
                <li>list2</li>
                <li>list3</li>
            </ol>
        </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<MyElem/>)*/


//Task Conditional Rendering

/*const x=50
let text="";
if(x>10)
{
    text=`x is greater than ${x}`
}
else
{
    text='x is less than 10'
}
const MyElem=()=>{
    return(
        <div>
            <h1>{text}</h1>
        </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<MyElem/>)

//Nested if else-else if ladder-switch statement*/

//Function Component

/*function Sample()
{
    return(
        <div>
            <h1>This is Function Component</h1>
        </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//class component

/*class Sample extends React.Component
{
    render()
    {
        return(
            <div>
                <h1>This is Heading</h1>
            </div>
        )
    }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//Function Component

/*function Greeting()
{
    const name="azar";
    const age=20;
    return(
        <div>
            <h1>Hello,{name}</h1>
            <p>Your value is::{age}</p>
        </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Greeting/>)*/

//using onclick Event

/*function SimpleButton()
{
    function handleClick()
    {
        alert("Button CLicked")
    }
    return(
        <div>
            <button onClick={handleClick}>ClickMe</button>
        </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<SimpleButton/>)*/

//Using props

/*function Welcome(props)
{
    return(
        <div>
            <h1>Hello,{props.name}</h1>
            <p>Your age is::{props.age}</p>
        </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Welcome name="Azar" age={20}/>)*/

//Component in Component

/*function UserInfo(props)
{
    return(
        <div>
            <h2>UserName::{props.name}</h2>
            <p>UserAge::{props.age}</p>
            <UserProfile/>
        </div>
    )
}
function UserProfile()
{
    return(
        <div>
            <h1>This is UserProfile</h1>
        </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<UserInfo name="azar" age="30"/>)*/

//Styling in React

import './index.css';

function Sample()
{
    const headingStyle={
        color:'blue'
    }
    return(
        <>
        <h1 style={{color:"pink"}}>Heading</h1>
        <h2 style={headingStyle}>Heading-2</h2>
        </>
        
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)