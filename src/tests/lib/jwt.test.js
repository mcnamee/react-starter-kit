import axios from 'axios';
import jwt from 'jsonwebtoken';
import { hasActiveAuthToken, hasAuthToken, refreshAuthToken } from '../../lib/jwt';

const cookies = require('../../lib/cookies');

// eslint-disable-next-line
const expiredToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjM2ZmNlYjVlNDE2ZTU0ODIyN2Y5NWM1NjIwMThlMjk4ZTdhMjllNzYzNWRhNTUxOTE1MTNjODkwZjJkYWFmZTBlMTQ5NTYyZjgyNjRhNjY1In0.eyJhdWQiOiIxIiwianRpIjoiMzZmY2ViNWU0MTZlNTQ4MjI3Zjk1YzU2MjAxOGUyOThlN2EyOWU3NjM1ZGE1NTE5MTUxM2M4OTBmMmRhYWZlMGUxNDk1NjJmODI2NGE2NjUiLCJpYXQiOjE1Njk1NDMwMjksIm5iZiI6MTU2OTU0MzAyOSwiZXhwIjoxNTY5NTU3NDI4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.fsakIWOkRbwZHImtYLXwqJN3dxOGjZG6hPJ4phPl5Sjom4bA2LqZR8u7ar7JyqZoAc8NEuko6NpTE7YGtgL_EZIhGCimR7OTy14T41XNMxGAJuyU2Jg-8sA_Pnah7ksquXuDdVVAO755DepX1XuCNhMPIcfgICkT2XzQX5vw4ZLdsq3oZeI_fxDiwdLaivNLIAx21QRUH_jP1MhsKVEPyG16fnWgKoCMh-n_FbnhUcHOrDt9ndJseN4SsM6g2MaNb9VmRShTjzMTOZhG8jFsXjdQjgQJJxXZEnqW60nPDSQQm9NkA24JuZ3uZaTNsdKKEzFXkd5gbfdCRygbM9q8-Ybb5bWIOmHA_S9nbV6H9YCi6boyikTRJH5eFCwPA8JAC3O9Brq7fyPUYY2DGGbBp4HNrj-aQpmZGgZfAPRTdmSRBhFBeMAzZCXzvsvfv5be4Ox3Nrk_bqrEoK7gQaUwOCnO15gQJYXPfIlyW4Y299KGNyU8C59DfjKCcZPyNVh84XOnGzxvd3c9t5ceP54KQPTIQzp7yXbRtvvFIrEvVb_g9Kfk6O3I7vVL7IsorBG9CX2b6MBX_d2UGcThCd8DEK-ZRU4lJIk3PgmwVxhFAmV6m6QSOXVHdmNHdTJ7wibi5GJMzHdZTKbX75xxPsAl7C9d-kUHgvXeQiOMqW4iK2I';

const jwtSecret = '123Abc';
const validToken = jwt.sign({}, jwtSecret, { expiresIn: 86400 });

jest.mock('axios');

cookies.getCookie = jest.fn();
cookies.deleteCookie = jest.fn();

it('jwt: hasActiveAuthToken returns correctly', () => {
  cookies.getCookie
    // A valid token should return true
    .mockReturnValueOnce(validToken)
    // An Expired token should return false
    .mockReturnValueOnce(expiredToken)
    // A non-token should return false
    .mockReturnValueOnce('abc')
    // No token at all should return false
    .mockReturnValueOnce(undefined);

  expect(hasActiveAuthToken()).toBeTruthy();
  expect(hasActiveAuthToken()).toBeFalsy();
  expect(hasActiveAuthToken()).toBeFalsy();
  expect(hasActiveAuthToken()).toBeFalsy();
});

it('jwt: hasAuthToken returns correctly', () => {
  cookies.getCookie
    // A valid token should return true
    .mockReturnValueOnce(validToken)
    // An Expired token should return true
    .mockReturnValueOnce(expiredToken)
    // A non-token should return false
    .mockReturnValueOnce('abc')
    // No token at all should return false
    .mockReturnValueOnce(undefined);

  expect(hasAuthToken()).toBeTruthy();
  expect(hasAuthToken()).toBeTruthy();
  expect(hasAuthToken()).toBeFalsy();
  expect(hasAuthToken()).toBeFalsy();
});

it('jwt: refreshAuthToken returns correctly', () => {
  // eslint-disable-next-line
  axios.post.mockResolvedValue({ data: { token: validToken } });

  cookies.getCookie
    // No token should return false
    .mockReturnValueOnce(undefined)
    // An Expired token should return a token
    .mockReturnValueOnce(expiredToken);

  refreshAuthToken().then((res) => {
    expect(res).toBeFalsy();
  });

  refreshAuthToken().then((token) => {
    expect(token).toBeTruthy();

    jwt.verify(token, jwtSecret, (err, decoded) => {
      expect(err).toBeFalsy();
      expect(decoded.exp).toBeTruthy();
    });
  });
});
