import React, { Component } from 'react';
import NavBar from '../components/common/NavBar';
import ArticleCard from '../components/common/ArticleCard';
export default class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="home_container">
          <div className="articles">
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
          </div>
          <div className="articles">
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
          </div>
          <div className="articles">
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
          </div>
          <div className="articles">
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
          </div>
        </div>
      </div>
    );
  }
}
