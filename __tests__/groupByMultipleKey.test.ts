import { groupByMultipleKeys } from '../src';
import { getArrayExemplo } from './utils/getArrayExemplo';
import {
  getArrayExemploAgrupadoMultipleKeyUpper,
  getArrayExemploAgrupadoMultipleKey,
} from './utils/getArrayExemploAgrupado';

describe('Teste groupBy mutiplipas keys', () => {
  it('Deve fazer o group by do array sem a funcacao para transformar o campo do grupo', async () => {
    const arrayExemplo = await getArrayExemplo();
    const groups = groupByMultipleKeys(arrayExemplo, ['first_name', 'id']);
    const arrayExemploAgrupado = getArrayExemploAgrupadoMultipleKey();

    expect(JSON.stringify(arrayExemploAgrupado)).toBe(JSON.stringify(groups));
  });

  it('Deve fazer o group by multiple key do array com a funcacao para transformar o campo do grupo', async () => {
    const arrayExemplo = await getArrayExemplo();
    const groupsMulti = groupByMultipleKeys(
      arrayExemplo,
      ['first_name', 'id'],
      [
        (value: any) => {
          return value.toUpperCase();
        },
      ],
    );

    const arrayExemploAgrupado = getArrayExemploAgrupadoMultipleKeyUpper();
    expect(JSON.stringify(groupsMulti)).toBe(JSON.stringify(arrayExemploAgrupado));
  });
});
