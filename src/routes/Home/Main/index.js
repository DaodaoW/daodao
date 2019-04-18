import React, { Component } from "react";
import { connect } from 'dva';
import { SectionC, DivC } from './styled.js';
import LastersArticle from './lastestArticle';
import { Col } from 'antd';

// import styles from './style.less';

// import bgone from '../../../assets/Main/bgone.jpg';
// import bgtwo from '../../../assets/Main/bgtwo.jpg';
// import bgthree from '../../../assets/Main/bgthree.jpg';
// import bgfour from '../../../assets/Main/bgfour.jpg';
// import bgfive from '../../../assets/Main/bgfive.jpg';
// import defauleBg from '../../../assets/Music/default_album.jpg'

@connect()
class Main extends Component{
  constructor(props) {
      super(props);
      this.state = {
      };
    }
     
  componentDidMount(){
    this.setState({
      play: true
    })
  }

  submit = () => {
  }

  render(){
    return (
      <SectionC>          
        <DivC>
          <Col span={22} key={1}>
            {/* <CarouselC autoplay>
              <img src={bgone} alt='one' />
              <img src={bgtwo} alt='two'/>
              <img src={bgthree} alt='three'/>
              <img src={bgfour} alt='four'/>
              <img src={bgfive} alt='five'/>
            </CarouselC> */}
            <LastersArticle/>
          </Col>
          {/* <Col span={10} key={2}>
            <div className={styles.rightPanel}>
              <img src={defauleBg} alt='默认音频播放图片' />
            </div>
          </Col> */}
        </DivC>
      </SectionC>
    )
  }
}

export default Main;