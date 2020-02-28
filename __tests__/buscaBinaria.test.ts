import { buscaBinaria } from '../src';
import { getArrayExemplo } from './utils/getArrayExemplo';

describe('Busca binaria testes', () => {
  it('Deve fazer busca binaria corretamente', async () => {
    const arrayExemplo = await getArrayExemplo();
    const romona = buscaBinaria(arrayExemplo, 'Romona', 'first_name', 0, arrayExemplo.length);

    expect(romona.value.first_name).toBe('Romona');
  });

  it('deve ser nulo quando não achar valor', async () => {
    const arrayExemplo = await getArrayExemplo();
    const romona = buscaBinaria(arrayExemplo, 'Tarcisio', 'first_name', 0, arrayExemplo.length);
    expect(romona).toBeNull();
  });
});
