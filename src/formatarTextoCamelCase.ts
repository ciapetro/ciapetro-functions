/**
 * Transforma a string para camelcase
 * @param texto string que vai ser transformada
 * @returns string transformada
 */
export default function formatarTextoCamelCase(texto: string) {
  let textoLowerCase = texto.toLowerCase();
  const palavras = textoLowerCase.split(' ');
  textoLowerCase = '';

  palavras.forEach((palavra, i) => {
    palavra = palavra.charAt(0).toUpperCase() + palavra.slice(1);
    i === palavras.length - 1 ? (textoLowerCase += palavra) : (textoLowerCase += palavra + ' ');
  });
  return textoLowerCase;
}
