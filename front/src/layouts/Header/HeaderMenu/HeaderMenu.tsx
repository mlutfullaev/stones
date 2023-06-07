import React, {useEffect} from 'react';

import './headerMenu.scss';


const HeaderMenu = (props: {burger: boolean}) => {
  return (
    <div className={`header-menu${props.burger ? ' active' : ''}`}>
      <div className="content">
        <h1>Hello</h1>
      </div>
    </div>
  );
};

export default HeaderMenu;