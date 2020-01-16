const {
    cellDimension,
    deleteCookie,
    formatarData,
    formatarCpf,
    formatarNumero,
    formatarTelefone,
    formatarTextoCamelCase,
    getCookie,
    litrosMetrosCubicos,
    setCookie,
    somenteNumeros,
    temScrollVertical,
    transformarEmFiltro
} = require("./funcoes");

const { getPastaRaiz } = require("./caminho");

const validaCPF = require("./validaCPF");
const buscaBinaria = require("./buscaBinaria");
const { groupBy, groupByMultipleKeys, paginar } = require("./arrayFunctions");

module.exports = {
    cellDimension,
    deleteCookie,
    formatarData,
    formatarCpf,
    formatarNumero,
    formatarTelefone,
    formatarTextoCamelCase,
    getCookie,
    litrosMetrosCubicos,
    setCookie,
    somenteNumeros,
    temScrollVertical,
    transformarEmFiltro,
    validaCPF,
    buscaBinaria,
    groupBy,
    groupByMultipleKeys,
    paginar,
    getPastaRaiz
}