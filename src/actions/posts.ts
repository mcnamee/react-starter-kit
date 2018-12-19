import { AxiosResponse } from 'axios';
import API from '../lib/api';

interface IResponse {
  data: object;
  message: string;
}

/**
 * Get all posts
 */
export const getPosts = () => (async (dispatch: any): Promise<string> => {
  try {
    const res: AxiosResponse<IResponse> = await API.get('/v2/5c0a32b13500006c00a85fb3?mocky-delay=1000ms'); // Fetch
    dispatch({ ...res.data, type: 'POSTS_REPLACE_ALL' }); // Store
    return res.data.message || 'Success'; // Return success message to UI
  } catch (error) { throw error; }
});
