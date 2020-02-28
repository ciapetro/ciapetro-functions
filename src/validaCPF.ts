import { somenteNumeros } from '.';

const cpfToArray = (cpf: any): number[] => {
  const cpfArray = cpf.map ? cpf.slice(0, 9) : cpf.substr(0, 9).split('');
  return cpfArray.map((a: any) => parseInt(a, undefined));
};

const somaMultiplicacao = (total: number) => (result: number, num: number, i: number) => {
  return result + num * total--;
};

const getSomaMultiplicacao = (list: number[], total: number) => {
  return list.reduce(somaMultiplicacao(total), 0);
};

const mod11 = (num: number) => {
  return num % 11;
};

const testDigit = (num: number) => {
  return num < 2 ? 0 : 11 - num;
};

const getUltimos2Digitos = (cpf: string): string => {
  return `${cpf.charAt(9)}${cpf.charAt(10)}`;
};

const mergeDigits = (num1: number, num2: number): string => {
  return `${num1}${num2}`;
};

const digitosIguais = (a: string, b: string): boolean => {
  return a === b;
};

export default function validaCPF(cpf: string | null): boolean {
  if (!cpf) return false;

  const cpfSoNumeros = somenteNumeros(cpf);

  if (!cpfSoNumeros || cpfSoNumeros?.length !== 11) {
    return false;
  }

  if (
    cpfSoNumeros === '00000000000' ||
    cpfSoNumeros === '11111111111' ||
    cpfSoNumeros === '22222222222' ||
    cpfSoNumeros === '33333333333' ||
    cpfSoNumeros === '44444444444' ||
    cpfSoNumeros === '55555555555' ||
    cpfSoNumeros === '66666666666' ||
    cpfSoNumeros === '77777777777' ||
    cpfSoNumeros === '88888888888' ||
    cpfSoNumeros === '99999999999'
  ) {
    return false;
  } else {
    const cpfArray = cpfToArray(cpfSoNumeros);
    const primDigito = testDigit(mod11(getSomaMultiplicacao(cpfArray, 10)));
    const segDigito = testDigit(mod11(getSomaMultiplicacao(cpfArray.concat(primDigito), 11)));

    return digitosIguais(mergeDigits(primDigito, segDigito), getUltimos2Digitos(cpfSoNumeros));
  }
}
