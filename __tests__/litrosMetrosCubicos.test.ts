import { litrosMetrosCubicos } from '../src';

describe('Teste litros para metros cubicos', () => {
  it('Deve converter corretamente litros para metros cubicos', () => {
    const metrosCubicos = litrosMetrosCubicos(1000);
    expect(metrosCubicos).toBe(1);
  });
});
