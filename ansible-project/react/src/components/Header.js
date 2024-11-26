import React from "react";
import cw from "../assets/cw.svg";
import "./style.css";

const Header = () => {
  return (
    <div>
      <div className="text-center">
        <img src={cw} alt="Mern-Project" className="cw" />
        <h6 className="text-center mt-5">
          This app has been developed by Anonimous Developers.
        </h6>
        <h1 className="text-center mt-5 header-text">Engin Todos</h1>
      </div>
    </div>
  );
};

export default Header;
