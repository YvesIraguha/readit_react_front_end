import http from "../../utils/axios";
import * as types from "../../redux/actionTypes";
import * as article from "../../redux/actions/createArticleAction";
import moxios from "moxios";
import dotenv from "dotenv";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
dotenv.config();
const BASE_URL = process.env.BASE_URL;
console.log("there it is in tests", BASE_URL);
const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);

describe("Sign in actions", () => {
  beforeEach(() => {
    moxios.install(http);
  });
  afterEach(() => {
    moxios.uninstall(http);
  });

  test("should article created", async () => {
    const store = mockStore({});
    await moxios.stubRequest(`${BASE_URL}/posts`, {
      status: 201,
      response: {
        message: "article created"
      }
    });
    store.dispatch(article.createArticle({ title: "hello world" })).then(() => {
      expect(store.getActions()).toEqual([
        {
          type: types.SUBMITTING_ARTICLE
        },
        {
          type: types.NEW_ARTICLE,
          payload: {
            message: "article created"
          }
        }
      ]);
    });
  });
  test("should return create article failure", async () => {
    const store = mockStore({});
    await moxios.stubRequest(`${BASE_URL}/posts`, {
      status: 400,
      response: {
        message: "bad request"
      }
    });
    store.dispatch(article.createArticle({ title: "hello world" })).then(() => {
      expect(store.getActions()).toEqual([
        {
          type: types.SUBMITTING_ARTICLE
        },
        {
          type: types.ARTICLE_ERROR,
          payload: "bad request"
        }
      ]);
    });
  });
  test("should articles found", async () => {
    const store = mockStore({});
    await moxios.stubRequest(`${BASE_URL}/posts`, {
      status: 200,
      response: {
        posts: "articles found"
      }
    });
    store.dispatch(article.fetchAllArticles()).then(() => {
      expect(store.getActions()).toEqual([
        {
          type: types.FETCHING_ARTICLE
        },
        {
          type: types.ARTICLES_FOUND,
          payload: "articles found"
        }
      ]);
    });
  });
  test("should return articles error", async () => {
    const store = mockStore({});
    await moxios.stubRequest(`${BASE_URL}/posts`, {
      status: 400,
      response: {
        message: "not articles found"
      }
    });
    store.dispatch(article.fetchAllArticles()).then(() => {
      expect(store.getActions()).toEqual([
        {
          type: types.FETCHING_ARTICLE
        },
        {
          type: types.ARTICLE_ERROR,
          payload: "not articles found"
        }
      ]);
    });
  });
  test("should return one article", async () => {
    const store = mockStore({});
    await moxios.stubRequest(`${BASE_URL}/posts/helloWorld`, {
      status: 200,
      response: {
        message: "article found"
      }
    });
    store.dispatch(article.fetchingArticle("helloWorld")).then(() => {
      expect(store.getActions()).toEqual([
        {
          type: types.FETCHING_ARTICLE
        },
        {
          type: types.ARTICLE_FOUND,
          payload: {
            message: "article found"
          }
        }
      ]);
    });
  });
  test("should return no article error", async () => {
    const store = mockStore({});
    await moxios.stubRequest(`${BASE_URL}/posts/helloWorld`, {
      status: 400,
      response: "article not found"
    });
    store.dispatch(article.fetchingArticle("helloWorld")).then(() => {
      expect(store.getActions()).toEqual([
        {
          type: types.FETCHING_ARTICLE
        },
        {
          type: types.ARTICLE_ERROR,
          payload: "article not found"
        }
      ]);
    });
  });
  test("should return article deleted", async () => {
    const store = mockStore({});
    await moxios.stubRequest(`${BASE_URL}/posts/helloWorld`, {
      status: 200,
      response: {
        message: "article deleted"
      }
    });
    store.dispatch(article.deleteArticle("helloWorld")).then(() => {
      expect(store.getActions()).toEqual([
        {
          type: types.SUBMITTING_ARTICLE
        },
        {
          type: types.ARTICLE_DELETED,
          payload: {
            message: "article deleted"
          }
        }
      ]);
    });
  });
  test("should return error on deleting article", async () => {
    const store = mockStore({});
    await moxios.stubRequest(`${BASE_URL}/posts/hello`, {
      status: 400,
      response: {
        message: "article not found"
      }
    });
    store.dispatch(article.deleteArticle("hello")).then(() => {
      expect(store.getActions()).toEqual([
        {
          type: types.SUBMITTING_ARTICLE
        },
        {
          type: types.ARTICLE_ERROR,
          payload: "article not found"
        }
      ]);
    });
  });
  test("should return updated article", async () => {
    const store = mockStore({});
    await moxios.stubRequest(`${BASE_URL}/posts/hello`, {
      status: 200,
      response: {
        message: "article updated successfully"
      }
    });
    store
      .dispatch(
        article.updatedArticle(
          {
            title: "hello world"
          },
          "hello"
        )
      )
      .then(() => {
        expect(store.getActions()).toEqual([
          {
            type: types.SUBMITTING_ARTICLE
          },
          {
            type: types.ARTICLE_UPDATED,
            payload: {
              message: "article updated successfully"
            }
          }
        ]);
      });
  });
  test("should return updated article", async () => {
    const store = mockStore({});
    await moxios.stubRequest(`${BASE_URL}/posts/hello`, {
      status: 400,
      response: {
        message: "article not found"
      }
    });
    store
      .dispatch(
        article.updatedArticle(
          {
            title: "hello world"
          },
          "hello"
        )
      )
      .then(() => {
        expect(store.getActions()).toEqual([
          {
            type: types.SUBMITTING_ARTICLE
          },
          {
            type: types.ARTICLE_ERROR,
            payload: "article not found"
          }
        ]);
      });
  });
});
