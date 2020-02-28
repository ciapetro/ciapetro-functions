import { formatarData } from '../src';

describe('Teste formatar Data string', () => {
  it('Deve formatar a data', () => {
    const dataFormatada = formatarData('02-02-2018');
    console.log(dataFormatada);
    expect(dataFormatada).toBe('02/02/2018');
  });
});
