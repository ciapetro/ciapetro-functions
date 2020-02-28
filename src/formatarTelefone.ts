import somenteNumeros from './somenteNumeros';

/**
 * Forma o numero de telefone
 * @param numero numero de telefone que vai ser formatado
 * @returns numero do telefone formatado
 */
export default function formatarTelefone(numero: string) {
  if (!numero) return numero;
  let numeroformatado = somenteNumeros(numero);
  if (numeroformatado.length > 10) {
    numeroformatado = numeroformatado.replace(/\D/g, '');
    numeroformatado = numeroformatado.replace(/(\d{2})(\d)/, '($1)$2');
    numeroformatado = numeroformatado.replace(/(\d{5})(\d)/, ' $1 - $2');
    numeroformatado = numeroformatado.replace(/(\d{4})(\d)/, '$1$2');
  } else {
    numeroformatado = numeroformatado.replace(/\D/g, '');
    numeroformatado = numeroformatado.replace(/(\d{2})(\d)/, '($1)$2');
    numeroformatado = numeroformatado.replace(/(\d{4})(\d)/, ' $1 - $2');
    numeroformatado = numeroformatado.replace(/(\d{4})(\d)/, '$1$2');
  }
  return numeroformatado;
}
