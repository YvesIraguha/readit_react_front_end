/* eslint-disable no-shadow */
import React, { Component } from "react";
import NavBar from "../components/common/NavBar";
import {
  fetchingArticle,
  deleteArticle,
  updatedArticle
} from "../redux/actions/createArticleAction";
import { connect } from "react-redux";
import ReactHtmlParser from "react-html-parser";

class ReadArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: "",
      article: {
        title: "",
        content: ""
      }
    };
  }
  componentDidMount() {
    const {
      fetchingArticle,
      match: {
        params: { slug }
      }
    } = this.props;
    this.setState({ slug });
    fetchingArticle(slug);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.article.article.post !== this.state.article) {
      this.setState({ article: { ...nextProps.article.article.post } });
    }
  }

  render() {
    const {
      article: { title, content }
    } = this.state;

    return (
      <div>
        <NavBar />
        <div className="article">
          <div className="article_text">
            <h1>{title}</h1>
            <div>{ReactHtmlParser(content)}</div>
            {/* <button onClick={() => deleteArticle(slug)}>Delete</button> */}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  article: state.article
});
export default connect(
  mapStateToProps,
  { fetchingArticle, deleteArticle }
)(ReadArticle);
