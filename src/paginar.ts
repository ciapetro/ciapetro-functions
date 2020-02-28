/**
 * Pagina o array e retorna a pagina que voce quer
 * @param array array que vai ser paginado
 * @param tamanhoPagina tamanho da pagina
 * @param pagina Qual pagina que é pra retornar
 */
export default function paginar(array: any[], tamanhoPagina: number, pagina: number): any[] {
  --pagina;
  const arrayPagina = array.slice(pagina * tamanhoPagina, (pagina + 1) * tamanhoPagina);
  if (arrayPagina) return arrayPagina;
  else return [];
}
