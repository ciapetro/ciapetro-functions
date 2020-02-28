import { groupBy } from '../src';
import { getArrayExemplo } from './utils/getArrayExemplo';
import { getArrayExemploAgrupado, getArrayExemploAgrupadoKeyUpper } from './utils/getArrayExemploAgrupado';

describe('Teste groupBy', () => {
  it('Deve fazer o group by do array sem a funcacao para transformar o campo do grupo', async () => {
    const arrayExemplo = await getArrayExemplo();
    const groups = groupBy(arrayExemplo, 'first_name');
    const arrayExemploAgrupado = getArrayExemploAgrupado();
    expect(groups).toStrictEqual(arrayExemploAgrupado);
  });

  it('Deve fazer o group by do array com a funcacao para transformar o campo do grupo', async () => {
    const arrayExemplo = await getArrayExemplo();
    const groups = groupBy(arrayExemplo, 'first_name', (value: any) => {
      return value.toUpperCase();
    });

    const arrayExemploAgrupado = getArrayExemploAgrupadoKeyUpper();
    expect(groups).toStrictEqual(arrayExemploAgrupado);
  });
});
