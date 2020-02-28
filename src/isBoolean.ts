/**
 * Verifica se o objeto é um booleano
 * @param obj objeto que vai ser verificado
 * @returns retorna true se for booleano ou falsa se não
 */
export default function isBoolean(obj: any): boolean {
  return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
}
