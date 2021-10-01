import React from "react";
import { useHistory } from "react-router";
const Home = () => {
  const history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem("tokenUser");
    history.push("/login");
  };
  return (
    <div>
      <h1>Home component</h1>
      <button onClick={handleLogout} type="button" class="btn btn-danger">
        Logout
      </button>
    </div>
  );
};

export default Home;
