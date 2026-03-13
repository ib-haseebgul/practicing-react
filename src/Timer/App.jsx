import { useEffect, useState } from "react"

export default function App(){
    const [count,setCount]=useState(0)
   
        useEffect(()=>{
            const timer= setInterval(()=>{
            setCount(count => count+1)
        },1000)
        return ()=> clearInterval(timer)
    },[])
    return(
       <p>Count is: {count}</p>
    )
}