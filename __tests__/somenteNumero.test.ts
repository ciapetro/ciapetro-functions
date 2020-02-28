import { somenteNumeros } from '../src';

describe('Teste somente numeros', () => {
  it('Deve remover todos os caracteres que não são números', () => {
    const frase = 'auhhae.d83494-akd,,c4586du883><>!@@##$%¨¨&99';
    const numeros = somenteNumeros(frase);
    expect(numeros).toBe('83494458688399');
  });

  it('Não Deve remover números string vazia', () => {
    const frase = '';
    const numeros = somenteNumeros(frase);
    expect(numeros).toBe('');
  });

  it('Não Deve retornar string vazia quando a string for nula', () => {
    const frase = null;
    const numeros = somenteNumeros(frase);
    expect(numeros).toBe('');
  });

  it('Deve retornar a string vazia quando a string não tem números', () => {
    const frase = 'auhhae.d-akd,,cdu><>!@@##$%¨¨&';
    const numeros = somenteNumeros(frase);
    expect(numeros).toBe('');
  });
});
