import axios from 'axios';
import jwt from 'jsonwebtoken';
import moment from 'moment';
import { getCookie, setCookie, deleteCookie } from './cookies';
import { errorMessages } from '../constants/messages';

/**
 * Does the current user have a valid and active JWT Auth Token?
 * - We'll test by getting the auth token from the cookie
 * - and decoding to see if it's still active
 * @return {bool}
 */
export const hasActiveAuthToken = () => {
  // Does a token exist?
  const token = getCookie('Auth:Token') || null;
  if (!token) {
    return false;
  }

  // Is the token a valid JWT token?
  try {
    const decoded = jwt.decode(token);

    if (decoded.exp) {
      const expires = moment.unix(decoded.exp);
      const today = moment();

      // Expires in the future, so by all accounts, we're authenticated
      if (expires.diff(today) > 0) {
        return true;
      }
    }
  } catch (error) { return false; }

  return false;
};

/**
 * Does the current user have an Auth Token set?
 * - We use this primarily for routes.
 * - We don't use hasActiveAuthToken for routes, because we don't want the app to
 * - kick them out before the API request refreshes the token
 * - (token refreshes are handled by an API interceptor)
 * @return {bool}
 */
export const hasAuthToken = () => {
  // Does a token exist?
  const token = getCookie('Auth:Token') || null;
  if (!token) {
    return false;
  }

  // Is the token a valid JWT token? (does it decode and have an expiry?)
  try {
    const decoded = jwt.decode(token);

    if (decoded.exp) {
      return true;
    }
  } catch (error) { return false; }

  return false;
};

/**
 * Refresh a token (be-it expired or not)
 * @return {str} the token
 */
export const refreshAuthToken = async () => {
  // Does a token exist?
  const token = getCookie('Auth:Token') || null;
  if (!token) {
    return false;
  }

  // Delete the cookie so that future requests don't attempt to use it
  // - which may cause an infinite loop
  // - (i.e. refresh token request checking for token and trying to refresh and on and on...)
  deleteCookie('Auth:Token');

  // Is the token a valid JWT token? (does it decode and have an expiry?)
  try {
    const response = await axios.post('/v2/refresh-auth', { token });

    const { data } = response;
    if (!response || !data || !data.token) {
      throw new Error(errorMessages.memberNotAuthd);
    }

    // Save the token to a cookie
    setCookie('Auth:Token', data.token, 30);

    return data.token;
  } catch (error) { return false; }
};
