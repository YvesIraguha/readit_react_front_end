import http from 'http';
import {
  NEW_ARTICLE,
  SUBMITTING_ARTICLE,
  FETCHING_ARTICLE,
  ARTICLE_DELETED,
  ARTICLE_FOUND,
  ARTICLE_UPDATED,
  ARTICLE_ERROR
} from '../actionTypes';

export const submittingArticle = () => ({
  type: SUBMITTING_ARTICLE
});

export const createArticle = article => async dispatch => {
  try {
    dispatch(submittingArticle);
    const response = http.post('/articles', {
      article
    });
    dispatch({ type: NEW_ARTICLE, payload: response.data });
  } catch (error) {
    const { message } = error.response.data;
    dispatch({
      type: ARTICLE_ERROR,
      payload: message
    });
  }
};
export const updatedArticle = (article, slug) => async dispatch => {
  try {
    dispatch(submittingArticle());
    const response = http.put(`/articles/${slug}`, {
      article
    });
    dispatch({ type: ARTICLE_UPDATED, payload: response.data });
  } catch (error) {
    const { message } = error.response.data;
    dispatch({
      type: ARTICLE_ERROR,
      payload: message
    });
  }
};
export const deleteArticle = slug => async dispatch => {
  try {
    dispatch(submittingArticle());
    const response = http.delete(`/articles/${slug}`);
    dispatch({ type: ARTICLE_DELETED, payload: response.data });
  } catch (error) {
    const { message } = error.response.data;
    dispatch({
      type: ARTICLE_ERROR,
      payload: message
    });
  }
};

export const fetchingArticle = slug => async dispatch => {
  try {
    dispatch({ type: FETCHING_ARTICLE });
    const response = http.get(`/articles/${slug}`);
    dispatch({ type: ARTICLE_FOUND, payload: response.data });
  } catch (error) {
    const { message } = error.response.data;
    dispatch({
      type: ARTICLE_ERROR,
      payload: message
    });
  }
};
