export const SUCCESS_CODE = 200;
export const UNAUTHORIZED = 401;
export const FORBIDDEN = 403;
export const SERVER_ERROR = 500;

export const INVALID_TOKEN = 'INVALID_TOKEN';
export const VALID_TOKEN = 'VALID_TOKEN';

export const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const API_URL = process.env.REACT_APP_API_URL;
export const GITHUB_API = 'https://api.github.com';