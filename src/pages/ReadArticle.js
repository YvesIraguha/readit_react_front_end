import React, { Component } from 'react';
import NavBar from '../components/common/NavBar';
import {
  fetchingArticle,
  deleteArticle,
  updatedArticle
} from '../redux/actions/createArticleAction';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';

class ReadArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: '',
      article: {
        title: '',
        content: ''
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
      slug,
      article: { title, content }
    } = this.state;
    const { deleteArticle } = this.props;
    return (
      <div>
        <NavBar />
        <div className="article">
          <div className="article_text">
            <h1>{title}</h1>
            <div>{ReactHtmlParser(content)}</div>
            <button onClick={() => deleteArticle(slug)}>Delete</button>
          </div>
          <div className="article_comments">
            <div className="new_comment">
              <div className="avatar">
                <img
                  src={require('../assets/images/user.png')}
                  alt="User"
                  className="icon"
                />
                <p>Joe Doe</p>
              </div>
              <div>
                <p>Add comment here</p>
                <button className="btn">Save</button>
              </div>
              <hr />
            </div>
            <div className="comment">
              <div className="avatar">
                <img
                  src={require('../assets/images/user.png')}
                  alt="user"
                  className="icon"
                />
                <p>Joe Doe</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet,
              </p>
              <hr />
            </div>
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
