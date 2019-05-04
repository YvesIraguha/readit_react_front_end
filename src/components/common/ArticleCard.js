import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import { withRouter } from "react-router-dom";
export class ArticleCard extends Component {
  constructor(props) {
    super(props);
    const { id, title, content } = this.props;
    this.state = {
      id,
      title,
      content
    };
  }
  render() {
    const { id, title, content } = this.state;

    return (
      <div
        className="main-article"
        onClick={() => this.props.history.push(`/articles/${id}`)}
      >
        <h1>{title}</h1>
        {ReactHtmlParser(content)}
      </div>
    );
  }
}

export default withRouter(ArticleCard);
