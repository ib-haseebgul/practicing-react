import { useMemo, useState } from "react";

export default function App(){
    const[number, setNumber] =useState("")

    function factoral(n) {
        if(n < 0) return "Invalid number"
        let result =1;
        for( let i=1; i<=n; i++){
            result=result*i;
        }
        return result;
    }
    const result=useMemo(()=> factoral(number),[number])
    return(
        <div>
            <input type="number" value={number} onChange={(e)=> setNumber(number(e.target.value))} />
            <p>{result}</p>
        </div>
    )
}