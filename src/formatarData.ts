/**
 * Formata a data
 * @param data data que vai ser formatada
 * @returns retorna a data formatada
 */
export default function formatarData(data: string) {
  let dataFormadata = data.replace(/\D/g, '');
  dataFormadata = dataFormadata.replace(/(\d{2})(\d)/, '$1/$2');
  dataFormadata = dataFormadata.replace(/(\d{2})(\d)/, '$1/$2');
  return dataFormadata;
}
