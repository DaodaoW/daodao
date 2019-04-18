import React, { Component } from "react";
import { connect } from 'dva';
import { Icon } from 'antd';
import moment from 'moment';
import { ArticleP, SectionS, DivS, SpanS } from './styled.js';
// import bgthree from '../../../assets/Main/bgthree.jpg';

@connect(({ article }) => ({
  info: article.info
}))

class LastersArticle extends Component{
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount () {
    const { dispatch } = this.props;
    let config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    let data = {
      page: 0,
      pageNum: 5
    }
    dispatch({
      type: 'article/queryGetArticle',
      payload: {
        data,
        config
      }
    });
  }

  getDetails = (articleId) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'home/queryShowDetails',
      payload: {
        id: articleId
      }
    })
  }
  
  render(){
    const data = this.props.info[0] ? this.props.info[0].data : null;
    return (
      <section style={{paddingLeft: 15}}>
        <ArticleP>看看最新的</ArticleP>
        {
          data ? data.map((item, index) => {
            return (
              <SectionS onClick={() => {this.getDetails(item.id)}} key={index}>
                <img src={item.coverImage} alt={item.title}/>
                <DivS>
                  <p>{item.title}</p>
                  <div>{item.title}</div>
                  <SpanS>
                    <section>
                      <Icon type="clock-circle" theme="outlined" />
                      {moment(item.createDate).format('YYYY-MM-DD HH:mm')}
                    </section>
                    <section>
                      <Icon type="message" theme="outlined" />
                      评论(999+)
                    </section>
                    <section>
                      <Icon type="read" theme="outlined" />
                      浏览(999+)
                    </section>
                    <section>
                      <Icon type="star" theme="outlined" />
                      (999+)
                    </section>
                  </SpanS>
                </DivS>
              </SectionS>
            )
          }) : null
        }
      </section>
    )
  }
}

export default LastersArticle;