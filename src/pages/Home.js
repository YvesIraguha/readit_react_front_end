import React, { Component } from "react";
import NavBar from "../components/common/NavBar";
import { fetchAllArticles } from "../redux/actions/createArticleAction";
import ArticleCard from "../components/common/ArticleCard";
import { connect } from "react-redux";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }
  componentDidMount() {
    const { fetchAllArticles } = this.props;
    fetchAllArticles();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.articles !== this.state.articles) {
      this.setState({ articles: nextProps.articles });
    }
  }
  render() {
    const { articles } = this.state;
    return (
      <div>
        <NavBar />
        <div className="home_container">
          <div className="articles">
            {articles.map(article => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  articles: state.article.articles
});
export default connect(
  mapStateToProps,
  { fetchAllArticles }
)(Home);
