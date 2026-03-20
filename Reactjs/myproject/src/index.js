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

const MyElem=()=>{
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
r1.render(<MyElem/>)


//Task Conditional Rendering

