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

/*import './index.css';

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
r1.render(<Sample/>)*/

//constructor using super
/*class Sample extends React.Component
{
    constructor()
    {
        super();
        this.state={name:"Azar",age:20}
    }
    render()
    {
        return(
            <div>
                <h1>Name::{this.state.name}</h1>
                <p>Age::{this.state.age}</p>
            </div>
        )
    }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

/*class Counter extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={count:0}
    }
    increment=()=>{
        this.setState({count:this.state.count+1})
    }
    decrement=()=>{
        this.setState({count:this.state.count-1})
    }
    render()
    {
        return(
            <div>
                <h1>Counter App</h1>
                <h2>Count::{this.state.count}</h2>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Counter/>)*/

//React Hooks useState
import { useState } from "react";
/*function Counter()
{
    const [count,setCount]=useState(0);
    return(
        <div>
            <h1>Counter App</h1>   
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <h2>Count::{count}</h2>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
        </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Counter/>)*/

//useEffect Hook
/*import { useEffect } from "react";
function Timer()    
{
    const [time,setTime]=useState(new Date().toLocaleTimeString());
    useEffect(()=>{
        const timer=setInterval(()=>{
            setTime(new Date().toLocaleTimeString())
        }
        ,1000);
        return()=>{
            clearInterval(timer);
        }
    },[])
    return(
        <div>
            <h1>Timer App</h1>
            <h2>Time::{time}</h2>
        </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Timer/>)*/

//React without useContext

/*function Component1()
{
    const [user,setUser]=useState("Azar");
    return(
        <div>
            <h1>Component 1</h1>
            <p>User::{user}</p>
            <Component2 user={user}/>
        </div>
    )
}
function Component2(props)
{
    return(
        <div>
            <h1>Component 2</h1>
            <p>User::{props.user}</p>
        </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Component1/>)*/

//React with useContext
import { createContext } from "react";
const UserContext=createContext();
function Component1()
{
    const [user,setUser]=useState("Azar");
    return(
        <UserContext.Provider value={user}>
        <div>
            <h1>Component 1</h1>
            <p>User::{user}</p>
            <Component2/>
        </div>
        </UserContext.Provider>
    )
}
function Component2()
{
    const user=useContext(UserContext);
    return(
        <div>
            <h1>Component 2</h1>
            <p>User::{user}</p>
        </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Component1/>)