import { z } from 'zod';

const cpfRegex = /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}-?[0-9]{2})$/;

export const newFormValidationSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z
    .string()
    .min(1, 'Email is required')
    .email({ message: 'Invalid email' }),
  color: z.string(),
  cpf: z
    .string()
    .min(1, 'CPF is required')
    .refine(
      cpf => {
        if (cpfRegex.test(cpf) && cpf.length === 11) {
          return true;
        }

        return false;
      },
      {
        message: 'Cpf is not valid.',
      },
    ),
});
