import React from "react";
import { shallow } from "enzyme";
import { ArticleCard } from "../../components/common/ArticleCard";

const props = {
  history: {
    push: jest.fn()
  },
  id: "helloWorld",
  title: "hello world",
  content: "hello world"
};
describe("article card", () => {
  test("should render article card correctly", () => {
    const wrapper = shallow(<ArticleCard {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  test("should redirect to the article route on click", () => {
    const wrapper = shallow(<ArticleCard {...props} />);
    wrapper.find(".main-article").simulate("click");
    expect(props.history.push).toHaveBeenCalledWith("/articles/helloWorld");
  });
});
