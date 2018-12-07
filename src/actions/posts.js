import API from '../lib/api';

/**
 * Get all posts
 */
export const getPosts = () => (async (dispatch) => {
  try {
    const res = await API.get('/v2/5c0a32b13500006c00a85fb3?mocky-delay=1000ms');
    dispatch({ ...res, type: 'POSTS_REPLACE_ALL' });
    return res.message || 'Success';
  } catch (error) {
    throw new Error({ message: error });
  }
});
