/**
 * Retorna os números de uma string
 * @param {string} texto string que vai ser extraidos os números
 */
const somenteNumeros = texto => {
    return texto.replace(/\D/g, '');
};

/**
 * Transforma o array em um array de filtro
 * @param {Array} data Array que vai ser transformado em filtro (precisa ter os campos value e label)
 */
const transformarEmFiltro = data => {
    const filtros = data.map(r => {
        const filtro = {
            value: r.value,
            label: `${r.value} - ${r.label ? r.label : r.value}`
        };
        return filtro;
    });
    return filtros;
};
/**
 * converte litros para metros cubicos
 * @param {number} litros litros para o metros cubicos
 */
const litrosMetrosCubicos = (litros) => {
    const metrosCubicos = Math.trunc((litros / 1000));
    return parseFloat(metrosCubicos);
}

// Calcula o tamanho da coluna em relação a tela
function cellDimension(porcentagem, pixel) {
    if (window.innerWidth < 800) {
        return pixel;
    } else {
        return porcentagem;
    }
}

/**
 * Retorno true quando tela tem o scroll bar Vertical
 */
function temScrollVertical() {
    const root = document.compatMode === 'BackCompat' ? document.body : document.documentElement;
    return root.scrollHeight > root.clientHeight;
}

/**
 * criar um cookie
 */
function setCookie(name, value, minutes) {
    var expires = "";
    if (minutes) {
        let date = new Date();
        date.setTime(date.getTime() + (minutes * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    var cookie = name + "=" + escape(value) + expires + "; path=/";
    document.cookie = cookie;
}

/**
 * ler um cookie
 */
function getCookie(name) {
    var cookies = document.cookie;
    var prefix = name + "=";
    var begin = cookies.indexOf("; " + prefix);

    if (begin === -1) {

        begin = cookies.indexOf(prefix);

        if (begin !== 0) {
            return null;
        }

    } else {
        begin += 2;
    }

    var end = cookies.indexOf(";", begin);

    if (end === -1) {
        end = cookies.length;
    }

    return unescape(cookies.substring(begin + prefix.length, end));
}

/**
 * deletar um cookie
 */
function deleteCookie(name) {
    if (getCookie(name)) {
        document.cookie = name + "=" + "; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/";
    }
}

/**
 * Formata um numero, para um string com duas casas decimais, se o valor for undefined ou null vai retornar 0,00
 * @param {number} valor valor que vai ser formatado
 * @returns {string} uma string com o valor formatado
 */
function formatarNumero(valor) {
    if (valor) {
        return valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
    } else {
        return '0,00';
    }
}

/**
 * Remove as propriedades vazias de um objeto
 * @param {Object} obj objeto que vai ser removido as propriedades vazias
 */
const removeEmpty = (obj) => {
    Object.entries(obj).forEach(([key, val]) =>
        (val && typeof val === 'object') && removeEmpty(val) ||
        (val === null || val === "") && delete obj[key]
    );
    return obj;
};

/**
 * Verifica se o objeto é um booleano
 * @param {*} obj objeto que vai ser verificado
 * @returns {boolean} retorna true se for booleano ou falsa se não
 */
const isBoolean = function (obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
};
/**
 * Transforma a string para camelcase   
 * @param {string} texto string que vai ser transformada
 * @returns {string} string transformada
 */
const formatarTextoCamelCase = texto => {
    texto = texto.toLowerCase();
    let palavras = texto.split(' ');
    texto = '';

    palavras.forEach((palavra, i) => {
        palavra = palavra.charAt(0).toUpperCase() + palavra.slice(1);
        i === palavras.length - 1 ? (texto += palavra) : (texto += palavra + ' ');
    });
    return texto;
};
/**
 * Forma o numero de telefone
 * @param {string} numero numero de telefone que vai ser formatado
 * @returns {string} numero do telefone formatado
 */
const formatarTelefone = numero => {
    if (somenteNumeros(numero).length > 10) {
        numero = numero.replace(/\D/g, '');
        numero = numero.replace(/(\d{2})(\d)/, '($1)$2');
        numero = numero.replace(/(\d{5})(\d)/, ' $1 - $2');
        numero = numero.replace(/(\d{4})(\d)/, '$1$2');
    } else {
        numero = numero.replace(/\D/g, '');
        numero = numero.replace(/(\d{2})(\d)/, '($1)$2');
        numero = numero.replace(/(\d{4})(\d)/, ' $1 - $2');
        numero = numero.replace(/(\d{4})(\d)/, '$1$2');
    }
    return numero;
};
/**
 * Formata a data
 * @param {*} data data que vai ser formatada
 * @returns retorna a data formatada
 */
const formatarData = data => {
    data = data.replace(/\D/g, '');
    data = data.replace(/(\d{2})(\d)/, '$1/$2');
    data = data.replace(/(\d{2})(\d)/, '$1/$2');
    return data;
};

/**
 * Formata CPF
 * @param {*} cpf cpf que sera formatado
 * @returns retorna cpf formatado para o usuário
 */
const formatarCpf = cpf => {
    cpf = cpf.replace(/\D/g, '');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    return cpf;
};



module.exports = {
    somenteNumeros,
    formatarNumero,
    deleteCookie,
    getCookie,
    setCookie,
    temScrollVertical,
    cellDimension,
    litrosMetrosCubicos,
    transformarEmFiltro,
    formatarTextoCamelCase,
    formatarTelefone,
    formatarData,
    formatarCpf,
    isBoolean
}