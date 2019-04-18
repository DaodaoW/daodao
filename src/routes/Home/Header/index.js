import React, { Component } from "react";

import { HomeImg } from './styled';

import theme from '../../../assets/Home/theme.jpg';

class Header extends Component{
  render(){
    return (<section>
              <HomeImg src={theme} alt="header_image"/>
            </section>)
  }
}

export default Header;