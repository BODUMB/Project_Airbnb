import React from "react"
import memesData from "../memesData.js"

export default function Meme(){
    
    function myfunc(){
        console.log("I was clicked");
    }

    
    const [MemeImage,setMemeImage] = React.useState("")
    
    
    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }

    
    
    function greeting(name){
        const date = new Date();
    const hours = date.getHours();
    let g
    if(hours >= 4 && hours <=11){
        g = "Afternoon"
    }
        return(`Good Afternoon ${g}, ${name}`)
        
    }
    console.log(greeting("bob"));
    const [isImportant,setIsImportant] = React.useState("Yes")
    console.log(isImportant)
    const [n,y] = React.useState(0)
    console.log(n);
    
    function click(){
        y(newCount => newCount+1)
    }
    
    function handleClick(){
        setIsImportant("No")
    }
    const [isGoingOut,setIsGoingOut] = React.useState(true)
    
    function boolClick(){
        setIsGoingOut(prevState => !prevState)
    }
    
    const [thingsArray,setThingsArray] = React.useState(["thing 1","thing 2"]) 
    const thingsElements = thingsArray.map(thing => <p key = {thing}>{thing}</p>)

    function addItem(){
        // const newThingsText = `Thing ${thingsArray.length + 1}`
        // thingsArray.push(newThingsText)
        // console.log(newThingsText)
        setThingsArray(prevThingsArray => 
            [...prevThingsArray,`Thing ${prevThingsArray.length + 1}`] )
            console.log(thingsArray)
    }
    
    return(
        <main className="main">
            <div className="form">
                <input type="text"
                placeholder="Top Text"
                className="form--input"/>
                <input type="text"
                placeholder="Bottom Text"
                className="form--input"/>
                <button className="form--button" onClick={getMemeImage}>Get a new meme image</button>
                <button onClick={addItem}>ADD-ITEM</button>
                {thingsElements}
                {/* <h1 onClick={click}>{n}</h1> */}
                <img src = {MemeImage} className = "meme--image"/>
                <h1 onClick={boolClick}>{isGoingOut ? "YES" : "NO"}</h1>
            </div>
        </main>
    )
}