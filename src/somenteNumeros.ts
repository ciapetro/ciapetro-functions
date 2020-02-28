/**
 * Retorna os números de uma string
 * @param texto string que vai ser extraidos os números
 */
export default function somenteNumeros(texto: string | null): string {
  if (!texto) return '';
  return texto.replace(/\D/g, '');
}
