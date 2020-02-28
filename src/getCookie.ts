/**
 * ler um cookie
 */
export default function getCookie(name: string) {
  const cookies = document.cookie;
  const prefix = name + '=';
  let begin = cookies.indexOf('; ' + prefix);

  if (begin === -1) {
    begin = cookies.indexOf(prefix);

    if (begin !== 0) {
      return null;
    }
  } else {
    begin += 2;
  }

  let end = cookies.indexOf(';', begin);

  if (end === -1) {
    end = cookies.length;
  }

  return unescape(cookies.substring(begin + prefix.length, end));
}
