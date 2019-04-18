import styled from 'styled-components';
import { keyframes } from 'styled-components'
import { Menu } from 'antd';

const rotate360 = keyframes`
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(360deg);
    }
`

export const NavMenu = styled(Menu) `
  display: flex;
  background: #56d0c9 !important;
  justify-content: space-around;
  width: 100%;
  min-width: 1440px;
`

export const NavMenuItem = styled(Menu.Item) `
  color: white;
  font-size: 18px;
  font-family: 'STFangsong';
  font-weight: 1000;
  &:hover{
    border-bottom: 2px solid rgb(225, 243, 246) !important;
    color: #FFF !important;
    animation: ${rotate360} 1s alternate forwards;
    background: #46BDD1 !important;
  }
`

