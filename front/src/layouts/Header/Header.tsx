import React, {useState} from "react";

import "./header.scss";
import HeaderNav from "./HeaderNav";
import HeaderItems from "./HeaderItems";

const Header = ({logo}: {logo: string}) => {
  const [burber, setBurber] = useState<boolean>(false);
  return (
    <header>
      <div className="container">
        <div className="header">
          <a href="#" className="logo">
            <img src={logo} alt="logo"/>
          </a>
          <HeaderNav />
          <HeaderItems />
        </div>
      </div>
    </header>
  );
};

export default Header;