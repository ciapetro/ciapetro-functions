/**
 * Busca de forma binaria em um array de objetos
 * @param arrayDaBusca O array que vai ser feita a busca
 * @param valorBuscado O valor que vai ser comparado
 * @param campo O campo do objeto que vai ser comparado
 * @param inicio O index de incio do array que vai ser buscado
 * @param fim O index de final do array que vai ser buscado
 * @returns  retorno um object com o index e objeto encontrado se nao encontrado retorno null
 */
export default function buscaBinaria(
  arrayDaBusca: any[],
  valorBuscado: any,
  campo: string,
  inicio: number,
  fim: number,
): any | null {
  // Condicao base
  if (inicio > fim) return null;

  // encontra o index do meio
  let mid = Math.floor((inicio + fim) / 2);

  //compra o valor do campo do objeto do meio com o valor buscado
  if (arrayDaBusca[mid][campo] === valorBuscado) return { index: mid, value: arrayDaBusca[mid] };

  // se o valor for maior que valor buscado,
  // busca somente a metade maior
  if (arrayDaBusca[mid][campo] > valorBuscado) return buscaBinaria(arrayDaBusca, valorBuscado, campo, inicio, mid - 1);
  // se o valor for menor que valor buscado
  // busca somente da metdade menor
  else return buscaBinaria(arrayDaBusca, valorBuscado, campo, mid + 1, fim);
}
