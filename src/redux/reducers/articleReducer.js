const initialState = {
  article: {}
};

import {
  NEW_ARTICLE,
  SUBMITTING_ARTICLE,
  FETCHING_ARTICLE,
  ARTICLE_DELETED,
  ARTICLE_FOUND,
  ARTICLES_FOUND,
  ARTICLE_UPDATED,
  ARTICLE_ERROR
} from '../actionTypes';
export const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_ARTICLE:
      return {
        ...state,
        article: action.payload,
        isSubmitting: false
      };
    case SUBMITTING_ARTICLE:
      return {
        ...state,

        isSubmitting: true
      };
    case FETCHING_ARTICLE:
      return {
        ...state,
        isFetching: true
      };
    case ARTICLE_FOUND:
      return {
        ...state,
        article: action.payload,
        isFetching: false
      };
    case ARTICLES_FOUND:
      return {
        ...state,
        articles: action.payload,
        isFetching: false
      };
    case ARTICLE_DELETED:
      return {
        ...state,
        article: action.payload,
        isFetching: false
      };
    case ARTICLE_UPDATED:
      return {
        ...state,
        article: action.payload,
        isFetching: false
      };
    case ARTICLE_ERROR:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    default:
      return {
        ...state
      };
  }
};
