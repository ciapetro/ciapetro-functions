import path from 'path';

export default function getPastaRaiz() {
  if (process.mainModule) return path.dirname(process.mainModule.filename);
  else return null;
}
