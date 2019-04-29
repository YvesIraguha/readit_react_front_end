import {
  NEW_ARTICLE,
  SUBMITTING_ARTICLE,
  FETCHING_ARTICLE,
  ARTICLE_DELETED,
  ARTICLE_FOUND,
  ARTICLES_FOUND,
  ARTICLE_UPDATED,
  ARTICLE_ERROR
} from '../../redux/actionTypes';

import { articleReducer } from '../../redux/reducers/articleReducer';

describe('Article reducers', () => {
  test('should return the initial with no action provided', () => {
    expect(articleReducer(undefined, {})).toEqual({
      article: {}
    });
  });
  test('should return new article ', () => {
    expect(
      articleReducer(undefined, {
        type: NEW_ARTICLE,
        payload: {
          article: 'hello world'
        }
      })
    ).toEqual({
      article: {
        article: 'hello world'
      },
      isSubmitting: false
    });
  });
  test('should return submitting article', () => {
    expect(articleReducer({}, { type: SUBMITTING_ARTICLE })).toEqual({
      isSubmitting: true
    });
  });
  test('should return fetching article ', () => {
    expect(articleReducer({}, { type: FETCHING_ARTICLE })).toEqual({
      isFetching: true
    });
  });
  test('should return article deleted successfully', () => {
    expect(
      articleReducer(
        {},
        {
          type: ARTICLE_DELETED,
          payload: {
            message: 'Article successfully deleted'
          }
        }
      )
    ).toEqual({
      article: {
        message: 'Article successfully deleted'
      },
      isFetching: false
    });
  });
  test('should return articles found', () => {
    expect(
      articleReducer(
        {},
        {
          type: ARTICLES_FOUND,
          payload: {
            articles: [{ title: 'hello world' }]
          }
        }
      )
    ).toEqual({
      articles: {
        articles: [{ title: 'hello world' }]
      },
      isFetching: false
    });
  });
  test('should return article found', () => {
    expect(
      articleReducer(
        {},
        {
          type: ARTICLE_FOUND,
          payload: {
            article: {
              title: 'hello world'
            }
          }
        }
      )
    ).toEqual({
      article: {
        article: {
          title: 'hello world'
        }
      },
      isFetching: false
    });
  });
  test('should return article error', () => {
    expect(
      articleReducer(
        {},
        {
          type: ARTICLE_ERROR,
          payload: {
            message: 'Error happened'
          }
        }
      )
    ).toEqual({ error: { message: 'Error happened' }, isFetching: false });
  });
  test('should return article updated', () => {
    expect(
      articleReducer(
        {},
        {
          type: ARTICLE_UPDATED,
          payload: {
            message: 'article updated successfully'
          }
        }
      )
    ).toEqual({
      article: { message: 'article updated successfully' },
      isFetching: false
    });
  });
});
