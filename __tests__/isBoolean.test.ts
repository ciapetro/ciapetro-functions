import { isBoolean } from '../src';

describe('Teste formatar is boolean', () => {
  it("Deve verificar que 'true' não é boolean", () => {
    const result = isBoolean('true');
    console.log(result);
    expect(result).toBe(false);
  });

  it('Deve verificar que true é boolean', () => {
    const result = isBoolean(true);
    console.log(result);
    expect(result).toBe(true);
  });

  it("Deve verificar que 'false' não é boolean", () => {
    const result = isBoolean('false');
    console.log(result);
    expect(result).toBe(false);
  });

  it('Deve verificar que false é boolean', () => {
    const result = isBoolean(false);
    console.log(result);
    expect(result).toBe(true);
  });
});
