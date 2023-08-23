export function mCPF(cpf: string) {
  const mask = cpf
    .replace('.', '')
    .replace('-', '')
    .replace('-', '');

  return mask;
}
