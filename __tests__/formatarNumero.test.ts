import { formatarNumero } from '../src';

describe('Teste formatar cpf', () => {
  it('Deve formatar o cpf', () => {
    const numeroFormatado = formatarNumero(100.1);
    expect(numeroFormatado).toBe('100.10');
  });
});
