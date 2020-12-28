import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [info, setInfo] = useState({
    email: "",
    password: "",
    passwordbis: "",
    name: "",
    lastname: "",
  });
  const [flash, setFlash] = useState({});

  const updateStateInfo = (e) => {
    setInfo((prev) => ({ ...info, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      delete info.passwordbis;
      const { data } = await axios.post("/auth/signup", info);
      setFlash(data.flash);
    } catch (error) {
      setFlash(error.response.data.flash);
    }
  };
  return (
    <>
      <h1>{flash[0] && JSON.stringify(flash, 1, 1)}</h1>
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
