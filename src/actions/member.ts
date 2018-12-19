import { AxiosResponse } from 'axios';
import ErrorMessages from '../constants/errors';
import API from '../lib/api';

interface IMember {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  password2?: string;
}

interface IResponse {
  data: object;
  message: string;
}

/**
 * Sign Up
 */
export const signUp = (member: IMember) => (async (dispatch: any): Promise<string> => {
  // Validation
  const { email, password, password2, firstName, lastName } = member;
  if (!firstName) { throw new Error(ErrorMessages.missingFirstName); }
  if (!lastName) { throw new Error(ErrorMessages.missingLastName); }
  if (!email) { throw new Error(ErrorMessages.missingEmail); }
  if (!password) { throw new Error(ErrorMessages.missingPassword); }
  if (!password2) { throw new Error(ErrorMessages.missingPassword); }
  if (password !== password2) { throw new Error(ErrorMessages.passwordsDontMatch); }

  try {
    const res: AxiosResponse<IResponse> = await API.post(
      '/v2/5c0a29c13500004d00a85f8f?mocky-delay=1000ms',
      member,
    ); // Fetch
    dispatch({ ...res.data, type: 'MEMBER_REPLACE' }); // Store
    return res.data.message || 'Success'; // Return success message to UI
  } catch (error) { throw error; }
});

/**
 * Login
 */
export const login = (member: IMember) => (async (dispatch: any): Promise<string> => {
  // Validation
  const { email, password } = member;
  if (!email) { throw new Error(ErrorMessages.missingEmail); }
  if (!password) { throw new Error(ErrorMessages.missingPassword); }

  try {
    const res: AxiosResponse<IResponse> = await API.post(
      '/v2/5c0a29c13500004d00a85f8f?mocky-delay=1000ms',
      member,
    ); // Fetch
    dispatch({ ...res.data, type: 'MEMBER_REPLACE' }); // Store
    return res.data.message || 'Success'; // Return success message to UI
  } catch (error) { throw error; }
});

/**
 * Get this member's details
 */
export const getMemberData = () => (async (dispatch: any): Promise<string> => {
  try {
    const res: AxiosResponse<IResponse> = await API.get('/v2/5c0a29c13500004d00a85f8f?mocky-delay=1000ms'); // Fetch
    dispatch({ ...res.data, type: 'MEMBER_REPLACE' }); // Store
    return res.data.message || 'Success'; // Return success message to UI
  } catch (error) { throw error; }
});

/**
 * Logout
 * - Clear all member data - including all data saved in Redux (Persist)
 */
export const logout = () => (async (): Promise<any> => {
  try { return localStorage.clear(); } catch (error) { throw error; }
});
