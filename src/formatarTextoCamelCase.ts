/**
 * Transforma a string para camelcase
 * @param texto string que vai ser transformada
 * @returns string transformada
 */
export default function formatarTextoCamelCase(texto: string) {
  texto = texto.toLowerCase();
  let palavras = texto.split(' ');
  texto = '';

  palavras.forEach((palavra, i) => {
    palavra = palavra.charAt(0).toUpperCase() + palavra.slice(1);
    i === palavras.length - 1 ? (texto += palavra) : (texto += palavra + ' ');
  });
  return texto;
}
