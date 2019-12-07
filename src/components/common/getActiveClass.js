export function getActive(select, className, ...rest) {
  return select === className ? rest + " active" : rest;
}
