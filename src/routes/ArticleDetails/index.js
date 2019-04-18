import React, { Component } from 'react';
import { connect } from 'dva';
import SimpleMDE from 'simplemde';
import { SectionC, DivC } from './styled'

@connect(({home}) => ({
  details: home.details
}))
class ArticleDetails extends Component{
  constructor(props) {
    super(props);
    this.smde = null;
    this.state = {
      html: null
    }
  }

  componentDidMount() {
    const { details } = this.props;
    const simplemde = new SimpleMDE({
      element: document.getElementById("details"),
      spellChecker: false,
      autofocus: true
    });
    const html = simplemde.markdown(details.context);
    console.log(html)
    this.setState({
      html
    })
  }

  render() {
    return(
      <SectionC>
        <DivC>
          <div style={{ width: '100%'}} dangerouslySetInnerHTML={{ __html: this.state.html }}></div>
        </DivC>
      </SectionC>
    )
  }
}

export default ArticleDetails;