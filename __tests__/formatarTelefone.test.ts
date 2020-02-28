import { formatarTelefone } from '../src';

describe('Teste formatar telefone', () => {
  it('Deve formatar o telefone', () => {
    const telefoneFormatado = formatarTelefone('4434456789');
    expect(telefoneFormatado).toBe('(44) 3445 - 6789');
  });
});
