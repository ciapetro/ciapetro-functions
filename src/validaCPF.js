const cpfToArray = (cpf) => {
    return (cpf.map) ? cpf.slice(0, 9) : cpf.substr(0, 9).split('');
}

const somaMultiplicacao = total => (result, num, i) => {
    return result + (num * total--);
}

const getSomaMultiplicacao = (list, total) => {
    return list.reduce( somaMultiplicacao( total ), 0 );
}

const mod11 = (num) => {
    return num % 11;
}

const testDigit = (num) => {
    return (num < 2) ? 0 : 11 - num;
}

const getUltimos2Digitos = (cpf) => {
    return `${cpf.charAt(9)}${cpf.charAt(10)}`;
}

const mergeDigits = (num1, num2) => {
    return `${num1}${num2}`;
}

const digitosIguais = (a,b) => {
    return a === b;
}

const validaCPF = (cpf) => {

    if (cpf.length !== 11) {
        return false;
    }

    if( cpf === "00000000000" || cpf === "11111111111" || 
        cpf === "22222222222" || cpf === "33333333333" || 
        cpf === "44444444444" || cpf === "55555555555" || 
        cpf === "66666666666" || cpf === "77777777777" || 
        cpf === "88888888888" || cpf === "99999999999" ) {
            return false;
    }
    else {

        let cpfArray = cpfToArray(cpf);
        let primDigito = testDigit(mod11(getSomaMultiplicacao(cpfArray, 10)));
        let segDigito = testDigit(mod11(getSomaMultiplicacao(cpfArray.concat(primDigito), 11)));
    
        return digitosIguais(mergeDigits(primDigito, segDigito), getUltimos2Digitos(cpf));
    }
}

module.exports = validaCPF;