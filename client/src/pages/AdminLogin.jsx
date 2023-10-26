import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";

const MainWrapper = styled.div`
  background: rgba(255, 255, 255, 0.2);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 2rem 1rem;
  border-radius: 2rem;
  box-shadow: 0px 0px 8px -5px #000000;
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  border-radius: 3rem;
  border: none;
  padding: 10px 20px;
  text-align: start;
  outline: none;
  margin: 0.5rem;
  width: 90%;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 2px;

  &:hover {
    box-shadow: 0px 0px 8px -5px #000000;
    background: rgb(193, 240, 224);
  }

  &:active {
    box-shadow: 0px 0px 8px -5px #000000;
  }

  &:focus {
    background: rgba(144, 238, 144, 0.577);
  }
`;

const Button = styled.button`
  margin-top: 0.5rem;
  padding: 1rem 2rem;
  background: #1fcea5;
  transition: all 0.3s ease;
  border-radius: 1.5rem;
  color: black;
  font-weight: 600;
  font-size: 1rem;

  &:hover {
    background: #1fcea5b0;
  }
`;

const ErrorMessage = styled.span`
  color: red;
  font-medium: 2rem;
  justify-center;
  margin-bottom: 2rem;
`;

function AdminLogin() {


  const [granted, setGranted] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [typedUsername, setTypedUsername] = useState("");
  const [typedPassword, setTypedPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const username = "check";
  const password = "111";

  const navigate = useNavigate();

  // username and pass verification
  const verification = async () => {
    if (typedUsername === username && typedPassword === password) {
      setSuccess(true);
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setGranted(true);
      localStorage.setItem("Auth", true);
      await new Promise((resolve) => setTimeout(resolve, 800));
      // Redirect to another page (you'll need to use React Router for this)
    } else if (typedUsername === "") {
      setErrorMessage("Please type Username!!");
      setError(true);
    } else if (typedPassword === "") {
      setErrorMessage("Please type Secret key!!");
      setError(true);
    } else if (typedUsername !== username) {
      setErrorMessage("Wrong Username!!");
      setError(true);
      setTypedUsername("");
    } else if (typedPassword !== password) {
      setErrorMessage("Wrong Secret key!!");
      setError(true);
      setTypedPassword("");
    } else {
      setErrorMessage("Something went wrong!");
      setError(true);
      setTypedUsername("");
      setTypedPassword("");
    }
  };

  const clearError = () => {
    setError(false);
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()} hidden={success}>
        <MainWrapper>
          <ImgWrapper>
            <img
              style={{ height: "100px", width: "100px", borderRadius: "50%" }}
              src="/images/logo.png"
              alt="LOGO"
            />
          </ImgWrapper>
          {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <Input
            type="text"
            value={typedUsername}
            onChange={(e) => setTypedUsername(e.target.value)}
            className="input"
            placeholder="User Name"
            onFocus={clearError}
          />
          <Input
            type="password"
            value={typedPassword}
            onChange={(e) => setTypedPassword(e.target.value)}
            className="input"
            placeholder="Secret key"
            onFocus={clearError}
          />
          <Button onClick={verification} type="submit">
            Proceed
          </Button>
        </MainWrapper>
      </form>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {success && !granted && (
          <div>
            <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              Authorizing ...
            </span>
          </div>
        )}
        {granted && navigate("/admin")}
      </div>
    </div>
  );
}

export default AdminLogin;
