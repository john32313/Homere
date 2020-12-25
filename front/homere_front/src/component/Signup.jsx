import { useState } from "react";

export default function Signup() {
  const [info, setInfo] = useState({
    email: "",
    password: "",
    passwordbis: "",
    name: "",
    lastname: "",
  });

  const updateStateInfo = (e) => {
    setInfo((prev) => ({ ...info, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("A name was submitted: ", info);
  };

  return (
    <>
      <h1>{JSON.stringify(info, 1, 1)}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          name="email"
          autoComplete="off"
          value={info.email}
          onChange={updateStateInfo}
        />
        <label htmlFor="password">Password : </label>
        <input
          type="password"
          name="password"
          autoComplete="new-password"
          value={info.password}
          onChange={updateStateInfo}
        />
        <label htmlFor="passwordbis">Confirm Password: </label>
        <input
          type="password"
          name="passwordbis"
          autoComplete="off"
          value={info.passwordbis}
          onChange={updateStateInfo}
        />
        <label htmlFor="name">Name : </label>
        <input
          type="text"
          name="name"
          value={info.name}
          onChange={updateStateInfo}
        />
        <label htmlFor="lastname">Lastname : </label>
        <input
          type="text"
          name="lastname"
          value={info.lastname}
          onChange={updateStateInfo}
        />

        <input type="submit" value="Soumettre" />
      </form>
    </>
  );
}
