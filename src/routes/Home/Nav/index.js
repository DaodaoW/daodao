import React, { Component } from "react";
import { connect } from 'dva';
import { Icon } from 'antd';
import { NavMenu, NavMenuItem } from './styled';
import './style.less'
// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;
// const Search = Input.Search;

@connect()
class Nav extends Component{
  state = {
    current: 'home',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  home = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'home/queryBack'
    })
  }

  render() {
      return (
        <NavMenu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
          style={{display: 'flex', justifyContent: 'space-around'}}
        >
          <NavMenuItem onClick={this.home} key="home">
            <Icon type="bars" />我的笔记
          </NavMenuItem>
          <NavMenuItem key="share">
            <Icon type="edit" />有趣有趣
          </NavMenuItem>
          {/* <NavMenuItem key="words">
            <Icon type="form" />留言
          </NavMenuItem>
          <NavMenuItem key="aboutme">
            <Icon type="user" target="_blank" rel="noopener noreferrer"/>关于
          </NavMenuItem> */}
          {/* <Menu.Item key="search">
            <div>
              <Search
                placeholder="搜点啥呢...?"
                onSearch={value => console.log(value)}
                enterButton
              />
            </div>
          </Menu.Item> */}
        </NavMenu>
      );
    }
  }

export default Nav;