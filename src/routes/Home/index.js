import React, { Component } from "react";
import { connect } from 'dva';
import Header from '../Home/Header';
import Nav from '../Home/Nav';
import Main from './Main';
import ArticleDetails from '../ArticleDetails'

@connect(({ home }) => ({
  isDetails: home.isDetails
}))
class Home extends Component{
  constructor(props) {
    super(props)
    this.state = {
      // details: false
    }
  }

  render(){
    const { isDetails } = this.props;
    // console.log(isDetails)
    return (
      <section>
        <Header />
        <Nav />
        {
          isDetails ? <ArticleDetails /> : <Main />
        }
        {/* <audio
          style={{display: 'none'}} 
          src={`${window.url}/public/images/youhebuke.mp3`}
          autoPlay={true}
        >
          Your browser does not support the audio element.
        </audio> */}
      </section>
    )
  }
}

export default Home;