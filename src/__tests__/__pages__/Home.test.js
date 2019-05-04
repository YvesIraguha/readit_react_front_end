import React from "react";
import { shallow } from "enzyme";

import { Home, mapStateToProps } from "../../pages/Home";

const props = {
  fetchAllArticles: jest.fn(() => {
    [
      {
        id: "hello",
        title: "hello world",
        content: "Hello world"
      }
    ];
  })
};
describe("Home page", () => {
  test("should render the home page component", () => {
    const wrapper = shallow(<Home {...props} />);
    expect(wrapper.find(".articles")).toHaveLength(1);
  });

  test("should trigger component did mount method", () => {
    const wrapper = shallow(<Home {...props} />);
    wrapper.instance().componentDidMount();
    expect(props.fetchAllArticles).toHaveBeenCalled();
  });
  test("should trigger component will receive props", () => {
    const wrapper = shallow(<Home {...props} />);
    const articles = [
      {
        id: "hello",
        title: "hello world",
        content: "Hello world"
      }
    ];
    wrapper.instance().componentWillReceiveProps({
      articles
    });
    expect(wrapper.state().articles).toEqual(articles);
    wrapper.instance().componentWillReceiveProps({
      articles
    });
    expect(wrapper.state().articles).toEqual(articles);
  });
  test("should map state to props correctly", () => {
    expect(
      mapStateToProps({
        article: {
          articles: "hello world"
        }
      })
    ).toEqual({ articles: "hello world" });
  });
});
