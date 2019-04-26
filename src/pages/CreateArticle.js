import React, { Component } from 'react';

export default class CreateArticle extends Component {
  render() {
    return (
      <div>
        <div className="create_article">
          <div className="title">
            <p>Add your title</p>
            <hr />
          </div>
          <div>
            <p>Tell story</p>
          </div>
          <button className="btn">Save</button>
        </div>
      </div>
    );
  }
}
