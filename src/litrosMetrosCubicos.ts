/**
 * converte litros para metros cubicos
 * @param litros litros para o metros cubicos
 */
export default function litrosMetrosCubicos(litros: number) {
  const metrosCubicos = Math.trunc(litros / 1000);
  return metrosCubicos;
}
