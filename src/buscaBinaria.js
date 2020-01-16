/**
 * Busca de forma binaria em um array de objetos
 * @param {Array} arr O array que vai ser feita a busca
 * @param {*} valorBuscado O valor que vai ser comparado
 * @param {string} campo O campo do objeto que vai ser comparado
 * @param {number} inicio O index de incio do array que vai ser buscado
 * @param {number} fim O index de final do array que vai ser buscado
 * @returns {object} retorno um object com o index e objeto encontrado se nao encontrado retorno null
 */
const buscaBinaria = function(
  arr,
  valorBuscado,
  campo,
  inicio,
  fim
) {
  // Condicao base
  if (inicio > fim) return null;

  // encontra o index do meio
  let mid = Math.floor((inicio + fim) / 2);

  //compra o valor do campo do objeto do meio com o valor buscado
  if (arr[mid][campo] === valorBuscado) return { index: mid, value: arr[mid] };

  // se o valor for maior que valor buscado,
  // busca somente a metade maior
  if (arr[mid][campo] > valorBuscado)
    return buscaBinaria(
      arr,
      valorBuscado,
      campo,
      inicio,
      mid - 1
    );
  // se o valor for menor que valor buscado
  // busca somente da metdade menor
  else
    return buscaBinaria(
      arr,
      valorBuscado,
      campo,
      mid + 1,
      fim
    );
};

module.exports = buscaBinaria;
