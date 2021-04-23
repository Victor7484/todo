import React from "react";
import { Link } from "react-router-dom";

const NavBar = ()=> {
    return (
      <div className="App">
        <Link to="/new">Create Todo</Link>
        <Link to="/">Todos</Link>
        <Link to="/edit/:todoId">Edit Todo</Link>
        <Link to="/:todoId">Todo</Link>
      </div>
    );
  }

  export default NavBar;
  