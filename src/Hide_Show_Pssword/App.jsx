import { useState } from "react"

export default function App(){
    const [password, setPassword] = useState("")
    const [show ,setShow] = useState(false)
    return(
        <div>
            <input onChange={(e)=> setPassword(e.target.value)} type={show ? "text" : "password"} placeholder="Enter Password"
            value={password} maxLength={8} />
            <button disabled={!password} onClick={()=> setShow(!show)}>{show ? "Hide🙈" : "Show👁️"}</button>
        </div>
    )
}