import { formatarTextoCamelCase } from '../src';

describe('Teste formatar texto camel case', () => {
  it('Deve formatar o texto para camel case', () => {
    const textoFormatado = formatarTextoCamelCase('goku e melhor que o superman');
    expect(textoFormatado).toBe('Goku E Melhor Que O Superman');
  });
});
