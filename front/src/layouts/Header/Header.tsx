import React, {useEffect, useState} from "react";
import logoWhite from "../../assets/img/logo-white.svg";
import logoGrey from "../../assets/img/logo-grey.svg";

import "./header.scss";
import HeaderNav from "./HeaderNav/HeaderNav";
import HeaderItems from "./HeaderItems/HeaderItems";
import {Link} from "react-router-dom";
import HeaderMenu from "./HeaderMenu/HeaderMenu";

const Header = ({logo}: {logo?: string}) => {
  const [burger, setBurger] = useState<boolean>(false);

  useEffect(() => {
    if (burger) {
      document.body.classList.add('menu-active')
    } else {
      document.body.classList.remove('menu-active')
    }
    const burgerCloser = (e: MouseEvent) => {
      const target = e.target as HTMLDivElement;

      if (target.classList.contains('header-menu')) {
        setBurger(false)
      }
    }
    document.addEventListener('click', burgerCloser)

    return () => {
      document.removeEventListener('click', burgerCloser)
    }
  }, [burger]);

  return (
    <header>
      <div className="container">
        <div className="header">
          <Link to="/" className="logo">
            <img src={logo === "white" ? logoWhite : logoGrey} alt="logo"/>
          </Link>
          <HeaderNav />
          <HeaderItems burger={burger} setBurger={setBurger} />
        </div>
      </div>
      <HeaderMenu burger={burger} />
    </header>
  );
};

export default Header;