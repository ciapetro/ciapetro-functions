import { validaCPF } from '../src';

describe('Teste valdia cpf', () => {
  it('Deve validar corretamente cpf formatado válido', () => {
    const cpf = '508.480.770-32';
    const valido = validaCPF(cpf);
    expect(valido).toBeTruthy();
  });

  it('Deve validar corretamente cpf so com números válido', () => {
    const cpf = '50848077032';
    const valido = validaCPF(cpf);
    expect(valido).toBeTruthy();
  });

  it('Deve validar corretamente cpf formatado inválido', () => {
    const cpf = '588.490.625-12';
    const valido = validaCPF(cpf);
    expect(valido).toBeFalsy();
  });

  it('Deve validar corretamente cpf so com números inválido', () => {
    const cpf = '58849062512';
    const valido = validaCPF(cpf);
    expect(valido).toBeFalsy();
  });

  it('Deve validar corretamente cpf que não tem numero casas correto', () => {
    let cpf = '58849062';
    let valido = validaCPF(cpf);
    expect(valido).toBeFalsy();
    cpf = '5884906251258849062512';
    valido = validaCPF(cpf);
    expect(valido).toBeFalsy();
  });

  it('Deve validar corretamente cpf que numeros iguais', () => {
    const cpfs = [
      '00000000000',
      '11111111111',
      '22222222222',
      '33333333333',
      '44444444444',
      '55555555555',
      '66666666666',
      '77777777777',
      '88888888888',
      '99999999999',
    ];
    for (let i = 0; i < cpfs.length; i++) {
      const cpf = cpfs[i];
      const valido = validaCPF(cpf);
      expect(valido).toBeFalsy();
    }
  });

  it('Deve validar corretamente cpf string vazia', () => {
    const cpf = '';
    const valido = validaCPF(cpf);
    expect(valido).toBeFalsy();
  });

  it('Deve validar corretamente cpf string nula', () => {
    const valido = validaCPF(null);
    expect(valido).toBeFalsy();
  });
});
