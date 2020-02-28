import getCookie from './getCookie';

/**
 * deletar um cookie
 */
export default function deleteCookie(name: string) {
  if (getCookie(name)) {
    document.cookie = name + '=' + '; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/';
  }
}
