import { useState } from "react";

export default function App(){
    const[search, setSearch]=useState("")
    const items =["Apple","Banana","Orange"]
    const filterItems=items.filter(items=> items.toLowerCase().includes(search.toLowerCase()))
    
    return(
        <div>
            <input onChange={(e)=> setSearch(e.target.value)}type="text" placeholder="Search" />
            <ul>{filterItems.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}</ul>
            {filterItems.length === 0 && <p>No items found 😕</p>}
        </div>
    )
   
}