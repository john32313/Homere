import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");

  const updateEmailField = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <h1>{email}</h1>
      <input
        type="email"
        name="email"
        value={email}
        onChange={updateEmailField}
      />
    </>
  );
}
