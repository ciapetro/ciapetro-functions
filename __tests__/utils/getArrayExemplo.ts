import fs from 'fs';
import path from 'path';

export async function getArrayExemplo() {
  const caminhoJson = path.resolve(__dirname, '..', 'json', 'arrayExemplo.json');
  const arquivoBuffer = await fs.promises.readFile(caminhoJson);
  const array = JSON.parse(arquivoBuffer.toString());
  return array.sort((a: any, b: any) => a.first_name.localeCompare(b.first_name));
}
