/**
 * Transforma o array em um array de filtro
 * @param data Array que vai ser transformado em filtro (precisa ter os campos value e label)
 */
export default function transformarEmFiltro(data: any[]) {
  const filtros = data.map(r => {
    const filtro = {
      value: r.value,
      label: `${r.value} - ${r.label ? r.label : r.value}`,
    };
    return filtro;
  });
  return filtros;
}
