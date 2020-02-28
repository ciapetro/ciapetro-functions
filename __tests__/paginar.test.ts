import { paginar } from '../src';
import { getArrayExemplo } from './utils/getArrayExemplo';

describe('Teste paginar array', () => {
  it('Deve paginar corretamente', async () => {
    const array = await getArrayExemplo();
    const pagina = paginar(array, 100, 2);
    const primeiro = pagina[0];
    const ultimo = pagina[pagina.length - 1];
    expect(pagina.length).toBe(100);
    expect(primeiro).toStrictEqual({ id: 261, first_name: 'Baron' });
    expect(ultimo).toStrictEqual({ id: 56, first_name: 'Chelsey' });
  });

  it('Deve paginar ultima pagina corretamente', async () => {
    const array = await getArrayExemplo();
    const regitrosPorPagina = 150;
    const quantidadePaginas = Math.ceil(array.length / regitrosPorPagina);
    const pagina = paginar(array, regitrosPorPagina, quantidadePaginas);
    const primeiro = pagina[0];
    const ultimo = pagina[pagina.length - 1];
    expect(pagina.length).toBeLessThan(regitrosPorPagina);
    expect(primeiro).toStrictEqual({ id: 644, first_name: 'Tanhya' });
    expect(ultimo).toStrictEqual({ id: 544, first_name: 'Zonda' });
  });

  it('Deve retornar array vazio quando paginar pagina que não existe', async () => {
    const array = await getArrayExemplo();
    const regitrosPorPagina = 150;
    const quantidadePaginas = Math.ceil(array.length / regitrosPorPagina) + 1;
    const pagina = paginar(array, regitrosPorPagina, quantidadePaginas);
    expect(pagina).toStrictEqual([]);
  });
});
