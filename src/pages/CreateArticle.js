import React, { Component } from 'react';
import RichTextEditor from 'react-rte';
import { createArticle } from '../redux/actions/createArticleAction';
import Input from '../components/common/Input';
import { connect } from 'react-redux';

class CreateArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: RichTextEditor.createEmptyValue()
    };
  }

  onInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  onEditorChange = value => {
    this.setState({ value });
  };

  submitArticle = () => {
    const { title, value } = this.state;
    const { createArticle } = this.props;
    createArticle({ title, content: value.toString('html') });
  };
  render() {
    return (
      <div>
        <div className="create_article">
          <div className="title">
            <Input
              type="title"
              name="title"
              placeholder="Title here..."
              onChange={e => this.onInputChange(e)}
            />
            <hr />
          </div>
          <div>
            <RichTextEditor
              value={this.state.value}
              onChange={e => this.onEditorChange(e)}
            />
          </div>
          <button className="btn" onClick={() => this.submitArticle()}>
            Save
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { createArticle }
)(CreateArticle);
