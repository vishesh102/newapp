import { Container } from "@mui/system";
import React, { useState } from "react";
import ButtonComponent from "./Button";
import InputComponent from "./InputComponent";

function Form1() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = () => {
    console.log({ name, email, password });
    setname("");
    setemail("");
    setpassword("");
  };

  return (
    <div>
      <Container maxWidth="sm" sx={{ m: 10 }}>
        <h2>Form</h2>
        <form sx={{ m: 2 }}>
          <InputComponent
            value={name}
            placeholder={"name"}
            type={"text"}
            onchange={(e) => {
              setname(e.target.value);
            }}
          />
          <InputComponent
            value={email}
            onchange={(e) => {
              setemail(e.target.value);
            }}
            placeholder={"email"}
            type={"email"}
          />
          <InputComponent
            value={password}
            onchange={(e) => {
              setpassword(e.target.value);
            }}
            placeholder={"password"}
            type={"password"}
          />
          <ButtonComponent
            styles={"contained"}
            text={"submit"}
            onClick={() => handleSubmit()}
          />
        </form>
      </Container>
    </div>
  );
}

export default Form1;
