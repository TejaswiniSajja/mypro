import React, { createContext, useState } from "react";
import Navigation from "./Navigation";
import LoginForm from "./LoginForm";

export const UserContext = createContext();

function Home() {
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = () => {
    setIsLogin(true);
  };

  return (
    <UserContext.Provider value={{ isLogin, setIsLogin }}>
      <div>
        {isLogin ? (
          <>
          <Navigation />
          <div style={{textAlign:"left",marginTop:"20px", fontSize:"24px"}}>Hello, Welcome to e-commerce</div>
          </>
        ) : (
          <LoginForm handleLogin={handleLogin} />
        )}
      </div>
    </UserContext.Provider>
  );
}

export default Home;
