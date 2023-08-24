import { z } from 'zod';
import { mCPF } from './cpfMask';

import { cpfRegex } from '../config';

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
    .transform(cpf => cpf.trim().replace(/[^0-9]+/g, ''))
    .refine(
      cpf => {
        if (cpfRegex.test(cpf) && mCPF(cpf).length === 11) {
          return true;
        }

        return false;
      },
      {
        message: 'Cpf is not valid.',
      },
    ),
});
