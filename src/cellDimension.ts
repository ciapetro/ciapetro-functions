// Calcula o tamanho da coluna em relação a tela
export default function cellDimension(porcentagem: any, pixel: any) {
  if (window.innerWidth < 800) {
    return pixel;
  } else {
    return porcentagem;
  }
}
