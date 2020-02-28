/**
 * Agrupa o array pelo campo
 * @param array array que vai ser agrupado
 * @param campo campo que vai ser agrupado
 * @param groupFieldTransform Funcao que vai ser executada no campo agrupado antes de agrupar
 */
export default function groupBy(array: any[], campo: string, groupFieldTransform?: (value: string) => string): any {
  return array.reduce((storage, item) => {
    if (item.hasOwnProperty(campo)) {
      let group = item[campo];
      if (groupFieldTransform) {
        group = groupFieldTransform(group);
      }
      storage[group] = storage[group] || [];
      storage[group].push(item);
    }
    return storage;
  }, {});
}
