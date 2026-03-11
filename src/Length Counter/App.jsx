import { useState } from "react"

export default function App(){
  const [input, setInput] =useState("")
  
  return(
    <div>
        <input onChange={(e)=> setInput(e.target.value) }type="text" value={input}/>
        <p>Calculating Characters ... : {input}</p>
        <p  style={{color: input.length >=100 ? "red": "black"}}>Characters Length is :{input.length}</p>
       
    </div>
  )
}