import React,  { useCallback, useEffect, useState } from "react"

export default function App(){
    const[count,setCount]=useState(0)

    useEffect(()=>{
        console.log("parent rerendered")
    },[count])

    const hardCalculations=useCallback((n)=>{
        let total=5;
        for(let i=0;i<=2945; i++){
             total=total+i;
        }
        return total;  
        
    },[])
    return(
        <div>
           <button onClick={() => setCount(count=> count + 1)}>Click</button><p>Count is: {count}</p>
           <Child prop={hardCalculations} />
        </div>
    )
}
const Child =React.memo(({prop})=>{
    console.log("child rerendered")
    return(
        <div>
            <p>{prop()}</p>
        </div>
    )
})