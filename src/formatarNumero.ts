/**
 * Formata um numero, para um string com duas casas decimais, se o valor for undefined ou null vai retornar 0,00
 * @param valor valor que vai ser formatado
 * @returns uma string com o valor formatado
 */
export default function formatarNumero(valor: number): string {
  if (valor) {
    return valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
  } else {
    return '0,00';
  }
}
