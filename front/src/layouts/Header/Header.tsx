import React, {useState} from "react";
import logoWhite from '../../assets/img/logo-white.svg'
import logoGrey from '../../assets/img/logo-grey.svg'

import "./header.scss";
import HeaderNav from "./HeaderNav";
import HeaderItems from "./HeaderItems";

const Header = ({logo}: {logo?: string}) => {
  const [burber, setBurber] = useState<boolean>(false);
  return (
    <header>
      <div className="container">
        <div className="header">
          <a href="#" className="logo">
            <img src={logo === 'white' ? logoWhite : logoGrey} alt="logo"/>
          </a>
          <HeaderNav />
          <HeaderItems />
        </div>
      </div>
    </header>
  );
};

export default Header;