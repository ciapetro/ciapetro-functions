/**
 * Agrupa o array pelo campo
 * @param {Array} array array que vai ser agrupado
 * @param {string} campo campo que vai ser agrupado
 * @param {func} groupFieldTransform Funcao que vai ser executada no campo agrupado antes de agrupar
 */
const groupBy = function (array, campo, groupFieldTransform) { 
    return array.reduce(function (storage, item) {
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
};
/**
 * Agrupa o array pelos campos
 * @param {array} array array que vai ser Agrupado
 * @param {Array} keys array de campos que vao ser a chave do agrupamento
 * @param {Array} groupFieldTransforms Array com as funções que vai ser executada para transformar os campos que vai ser usado na chave do grupo
 */
const groupByMultipleKeys = function (array, keys, groupFieldTransforms) {
    return array.reduce(function (storage, item) {
        let groupKeyValues = {};
        const group = keys.map((key, index) => {
            groupKeyValues[key] = item[key];
            if (groupFieldTransforms && groupFieldTransforms[index]) {
                return String(groupFieldTransforms[index](item[key]));
            } else {
                return String(item[key]);
            }
        }).join("|");
        storage[group] = storage[group] || [];
        storage[group].push(item);
        storage[group].keyValues = groupKeyValues;

        return storage;
    }, {});
};

/**
 * Pagina o array e retorna a pagina que voce quer
 * @param {Array} array array que vai ser paginado
 * @param {number} tamanhoPagina tamanho da pagina
 * @param {number} pagina Qual pagina que é pra retornar
 */
function paginar(array, tamanhoPagina, pagina) {
    --pagina;
    return array.slice(pagina * tamanhoPagina, (pagina + 1) * tamanhoPagina);
}

module.exports = {
    groupBy,
    groupByMultipleKeys,
    paginar
}