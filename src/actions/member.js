/* global localStorage */
import API from '../lib/api';
import ErrorMessages from '../constants/errors';

/**
 * Sign Up
 * @param {object} newUser - {email, password, passwordRepeat, firstName, lastName}
 */
export const signUp = member => (async (dispatch) => {
  // Validation
  const { email, password, password2, firstName, lastName } = member;
  if (!firstName) throw new Error(ErrorMessages.missingFirstName);
  if (!lastName) throw new Error(ErrorMessages.missingLastName);
  if (!email) throw new Error(ErrorMessages.missingEmail);
  if (!password) throw new Error(ErrorMessages.missingPassword);
  if (!password2) throw new Error(ErrorMessages.missingPassword);
  if (password !== password2) throw new Error(ErrorMessages.passwordsDontMatch);

  try {
    const res = await API.post('/v2/5c0a29c13500004d00a85f8f?mocky-delay=1000ms', member);
    dispatch({ ...res, type: 'MEMBER_REPLACE' });
    return res.message || 'Success';
  } catch (error) { throw error; }
});

/**
 * Login
 * @param {object} newUser - {email, password}
 */
export const login = member => (async (dispatch) => {
  // Validation
  const { email, password } = member;
  if (!email) throw new Error(ErrorMessages.missingEmail);
  if (!password) throw new Error(ErrorMessages.missingPassword);

  try {
    const res = await API.post('/v2/5c0a29c13500004d00a85f8f?mocky-delay=1000ms', member);
    dispatch({ ...res, type: 'MEMBER_REPLACE' });
    return res.message || 'Success';
  } catch (error) {
    throw new Error(error);
  }
});

/**
 * Get this member's details
 */
export const getMemberData = () => (async (dispatch) => {
  try {
    const res = await API.get('/v2/5c0a29c13500004d00a85f8f?mocky-delay=1000ms');
    dispatch({ ...res, type: 'MEMBER_REPLACE' });
    return res.message || 'Success';
  } catch (error) {
    throw new Error(error);
  }
});

/**
 * Logout
 */
export const logout = () => (async (dispatch) => {
  try {
    // Clear all member data - including data saved in Redux (Persist)
    return localStorage.clear();
  } catch (error) {
    throw new Error(error);
  }
});
