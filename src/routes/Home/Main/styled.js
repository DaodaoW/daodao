import styled from 'styled-components';
import { Carousel } from 'antd';

export const SectionC = styled.section `
  width: 100%;
  display: flex;
  justify-content: center;
  background: rgb(225, 243, 246);
  min-height: 100vh;
  min-width: 1440px;
`

export const DivC = styled.div `
  width: 80%;
  background: #FFF;
  min-height: 90vh;
  min-width: 900px;
`

export const CarouselC = styled(Carousel)`
  width: 100%;
  height: 57vh;
  min-height: 420px;
  padding-top: 10px;
  min-width: 670px;
  padding-left: 15px;
`
export const ArticleP = styled.p `
  font-size: 20px;
  font-weight: 600;
  border-bottom: 4px solid #56D0C9;
  min-width: 670px;
  padding-top: 20px;
  margin-top: 20px;
`
export const SectionS = styled.section `
  padding-top: 15px;
  display: flex;
  padding-bottom: 25px;
  border-bottom: 0.5px solid #c5ecea;
  color: #000000;
  &:hover{
    background: #E1F3F6;
  }
  img{
    min-width: 200px;
    cursor: pointer;
    height: 140px;
  }
`
export const DivS = styled.div `
  margin-left: 15px;
  width: 100%;
  cursor: pointer;
  div{
    min-height: 80px;
    font-size: 12px;
  }
`
export const SpanS = styled.span `
  display: flex;
  justify-content: space-between;
`
