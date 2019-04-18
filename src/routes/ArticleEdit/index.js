import React, { Component } from "react";
import SimpleMDE from 'simplemde';
import { connect } from 'dva';
import marked from 'marked';
import highlight from 'highlight.js';
import { Button, Modal, Input, message } from 'antd';
import moment from 'moment';

@connect(({ article }) => ({
  info: article
}))
class ArticleEdit extends Component{
  constructor(props) {
    super(props);
    this.smde = null;
    this.state = {
      innerhtml: '',
      visible: false,
      title: ''
    }
  }

  componentDidMount() {
    //创建一个markdown富文本编辑器
    this.smde = new SimpleMDE({
      element: document.getElementById('editor'),
      autoDownloadFontAwesome: true,
      autofocus: true,
      autosave: true,
      previewRender: function (plainText) {
        return marked(plainText, {
          renderer: new marked.Renderer(),
          gfm: true,
          pedantic: false,
          sanitize: false,
          tables: true,
          breaks: true,
          smartLists: true,
          smartypants: true,
          highlight: function (code) {
            return highlight.highlightAuto(code).value;
          }
        });
      },
    });
     window.addEventListener("drop", (e) => {
       if (e.target.className === "CodeMirror-scroll") {
         e.preventDefault()
       }
     }, false);
     this.smde.codemirror.on('drop', (editor, e) => {
      if (!(e.dataTransfer && e.dataTransfer.files)) {
          alert('不支持该文件！')
          return
      }
      let dataList = e.dataTransfer.files[0];
      let param = new FormData(); //new一个formData
      param.append('file', dataList, dataList.name);//将文件添加到formdata中
      param.append('chunk', '0');
      this.fileUpload(param);
    });
  }

  fileUpload(param) {
    const { dispatch } = this.props;
    let imageName = moment().format('X');
    let config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    dispatch({
      type: 'article/queryArticle',
      payload: {
        imageName,
        param,
        config
      },
      callback: (res) => {
        if (res) {
          if (res !== -1) {
            this.smde.value(this.smde.value() + `![yes](${window.url}${res})\n`);
          } else {
            this.smde.value(this.smde.value() + `图片无法导入`);
          }
        }
      }
    });
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    const { dispatch } = this.props;
    let config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    let data = {
      title: this.state.title,
      auther: 'daodao',
      context: this.smde.value(),
      createDate: moment().format('YYYY-MM-DD HH:mm:ss')
    }
    dispatch({
      type: 'article/queryNewArticle',
      payload: {
        data,
        config
      },
      callback: (res) => {
        if(res[0].data === 1) {
          message.success('成功');
          setTimeout(() => {
            this.props.history.push('/');
          }, 1000);
        }
      }
    });
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }
  
  render() {
    return (
      <section>
        <textarea id="editor"></textarea>
        <Button type="primary" onClick={this.showModal}>保存</Button>
        {/* <div dangerouslySetInnerHTML={{ __html: this.state.innerhtml }}></div> */}
        <Modal
          title="输入标题"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="确认提交"
          cancelText="取消"
        >
          <Input onChange={(e) => {this.setState({title: e.target.value})}} placeholder="输入文章标题" />
        </Modal>
      </section>
    );
  }
}

export default ArticleEdit;