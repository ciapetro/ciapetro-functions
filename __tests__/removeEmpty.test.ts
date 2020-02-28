import { removeEmpty } from '../src';

describe('Teste remove empty', () => {
  it('Deve remover propriedades vazias do objecto', () => {
    const objeto = {
      a: 'Valor',
      b: '',
      c: 15,
      d: null,
      e: undefined,
    };
    const objetoLimpo = removeEmpty(objeto);
    expect(objetoLimpo).toStrictEqual({
      a: 'Valor',
      c: 15,
    });
  });
  it('Não Deve remover propriedades vazias do objecto null', () => {
    const objeto = null;
    const objetoLimpo = removeEmpty(objeto);
    expect(objetoLimpo).toStrictEqual(null);
  });
});
