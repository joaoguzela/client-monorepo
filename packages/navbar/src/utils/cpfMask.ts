export function mCPF(cpf: string) {
  const mask = cpf.replace(/[^0-9]+/g, '');

  return mask;
}
