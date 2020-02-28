/**
 * Agrupa o array pelos campos
 * @param array array que vai ser Agrupado
 * @param keys array de campos que vao ser a chave do agrupamento
 * @param groupFieldTransforms Array com as funções que vai ser executada para transformar os campos que vai ser usado na chave do grupo
 */
export default function groupByMultipleKeys(array: any[], keys: string[], groupFieldTransforms?: Function[]): any {
  return array.reduce(function(storage, item) {
    let groupKeyValues: any = {};
    const group = keys
      .map((key, index) => {
        groupKeyValues[key] = item[key];
        if (groupFieldTransforms && groupFieldTransforms[index]) {
          return String(groupFieldTransforms[index](item[key]));
        } else {
          return String(item[key]);
        }
      })
      .join('|');
    storage[group] = storage[group] || [];
    storage[group].push(item);
    storage[group].keyValues = groupKeyValues;

    return storage;
  }, {});
}
