/**
 * Formata CPF
 * @param cpf cpf que sera formatado
 * @returns retorna cpf formatado para o usuário
 */
export default function formatarCpf(cpf: string) {
  let cpfFormatado = cpf.replace(/\D/g, '');
  cpfFormatado = cpfFormatado.replace(/(\d{3})(\d)/, '$1.$2');
  cpfFormatado = cpfFormatado.replace(/(\d{3})(\d)/, '$1.$2');
  cpfFormatado = cpfFormatado.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  return cpfFormatado;
}
