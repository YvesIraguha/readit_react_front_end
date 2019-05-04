import React, { Component } from "react";
import PropTypes from "prop-types";
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
    const {
      history: { push }
    } = this.props;

    return (
      <div className="main-article" onClick={() => push(`/articles/${id}`)}>
        <h1>{title}</h1>
        {ReactHtmlParser(content)}
      </div>
    );
  }
}

ArticleCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  history: PropTypes.shape({}).isRequired
};
export default withRouter(ArticleCard);
