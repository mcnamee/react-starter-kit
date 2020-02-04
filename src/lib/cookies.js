/* global document */

/**
 * Create a new Cookie
 * @param {str} cookieName
 * @param {str} cookieValue
 * @param {int} expireInDays
 */
export const setCookie = (cookieName, cookieValue, expireInDays) => {
  const d = new Date();
  d.setTime(d.getTime() + (expireInDays * 24 * 60 * 60 * 1000));
  const expires = `expires=${d.toUTCString()}`;

  document.cookie = `${cookieName}=${cookieValue};${expires};path=/`;
};

/**
 * Get the value of a Cookie
 * @param {str} cookieName
 */
export const getCookie = (cookieName) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${cookieName}=`);

  if (parts.length === 2) return parts.pop().split(';').shift();

  return false;
};

/**
 * Deletes a Cookie by cookie name (expires it)
 * @param {str} cookieName
 */
export const deleteCookie = (cookieName) => {
  document.cookie = `${cookieName}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
};
