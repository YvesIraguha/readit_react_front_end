import React from "react";
import { shallow } from "enzyme";
import { ReadArticle, mapStateToProps } from "../../pages/ReadArticle";

const props = {
  fetchingArticle: jest.fn(),
  article: {
    title: "hello world",
    content: "hello world"
  },
  match: {
    params: { slug: "helloWorld" }
  }
};

describe("Read article", () => {
  test("should render read article component", () => {
    const wrapper = shallow(<ReadArticle {...props} />);
    expect(wrapper.find(".article")).toHaveLength(1);
  });
  test("should call fetching article when the component has mounted", () => {
    const wrapper = shallow(<ReadArticle {...props} />);
    wrapper.instance().componentDidMount();
    expect(props.fetchingArticle).toHaveBeenCalledWith("helloWorld");
  });
  test("should update the state with component will receive props", () => {
    const wrapper = shallow(<ReadArticle {...props} />);
    const post = {
      title: "hello world",
      content: "Hello world"
    };

    wrapper
      .instance()
      .componentWillReceiveProps({ article: { article: { post } } });
    expect(wrapper.state().article).toEqual(post);
  });
  test("should map state to props", () => {
    expect(mapStateToProps({ article: "hello world" })).toEqual({
      article: "hello world"
    });
  });
});
