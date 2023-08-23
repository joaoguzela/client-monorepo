export function mCPF(cpf: string) {
  console.log(cpf);
  const mask = cpf
    .replace('.', '')
    .replace('-', '')
    .replace('-', '');

  return mask;
}
