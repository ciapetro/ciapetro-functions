/**
 * criar um cookie
 */
export default function setCookie(name: string, value: string, minutes: number) {
  let expires = '';
  if (minutes) {
    let date = new Date();
    date.setTime(date.getTime() + minutes * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }
  const cookie = name + '=' + escape(value) + expires + '; path=/';
  document.cookie = cookie;
}
