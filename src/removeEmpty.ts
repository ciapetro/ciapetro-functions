/**
 * Remove as propriedades vazias de um objeto
 * @param obj objeto que vai ser removido as propriedades vazias
 */
export default function removeEmpty(obj: any) {
  if (!obj) return obj;
  Object.entries(obj).forEach(
    ([key, val]) =>
      (val && typeof val === 'object' && removeEmpty(val)) ||
      ((val === null || val === '' || val === undefined) && delete obj[key]),
  );
  return obj;
}
