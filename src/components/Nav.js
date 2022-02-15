import React from "react";
import { FaMusic } from "react-icons/fa";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav className="nav-container">
      <h1>Waves</h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        <span>Library</span>
        <FaMusic size="1.6em" />
      </button>
    </nav>
  );
};

export default Nav;
