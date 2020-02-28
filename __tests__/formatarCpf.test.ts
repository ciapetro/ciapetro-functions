import { formatarCpf } from '../src';

describe('Teste formatar cpf', () => {
  it('Deve formatar o cpf', () => {
    const cpfFormatado = formatarCpf('11111111122');
    expect(cpfFormatado).toBe('111.111.111-22');
  });
});
