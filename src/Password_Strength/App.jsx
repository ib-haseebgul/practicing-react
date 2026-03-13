import { useState } from "react";

export default function App() {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  // Determine strength
  let strength = "";
  let color = "";

  if (password.length === 0) {
    strength = "";
  } else if (password.length < 6) {
    strength = "Weak Password";
    color = "red";
  } else if (password.length <= 12) {
    strength = "Medium Password";
    color = "orange";
  } else {
    strength = "Strong Password";
    color = "green";
  }

  return (
    <div>
      <input
        onChange={(e) => setPassword(e.target.value)}
        type={show ? "text" : "password"}
        placeholder="Enter Password"
        value={password}
      />
      <button onClick={() => setShow(!show)}>
        {show ? "Hide🙈" : "Show👁️"}
      </button>

      {strength && <p style={{ color }}>{strength}</p>}
    </div>
  );
}