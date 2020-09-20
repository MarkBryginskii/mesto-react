import React from 'react';

const Header = (props) => (
    <header className="header">
      <a href="#"><img className="header__logo" src={props.logo} alt="Место" /></a>
    </header>
  );

export default Header;
