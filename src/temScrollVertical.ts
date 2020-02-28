/**
 * Retorno true quando tela tem o scroll bar Vertical
 */
export default function temScrollVertical() {
  const root = document.compatMode === 'BackCompat' ? document.body : document.documentElement;
  return root.scrollHeight > root.clientHeight;
}
