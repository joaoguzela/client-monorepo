import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import React, { useState } from 'react';
import { Notification, Title, Close } from '@zendeskgarden/react-notifications';
import { FormContainer, HomeContainer, ButtonForm } from './styles';
import { CustomDropdownColor } from '../../components/Dropdown/index';
import { ClientTable } from '../../components/ClientViwer/index';
import { request } from '../../Request/postUser';
import { Client } from '../../@types/Client';

const newFormValidationSchema = zod.object({
  name: zod.string().min(4, 'Informe um nome valido'),
  email: zod.string().email(),
  color: zod.string(),
  cpf: zod.string(),
});
export function Home() {
  const [client, setClient] = useState<Client | null>(null);
  const [useToasts, setUseToasts] = useState<boolean>(false);
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(newFormValidationSchema),
  });
  async function handleCreateNewClient(data: any) {
    request(data)
      .then(response => response.json())
      .then(result => {
        if (result.type === 'Application error') {
          setUseToasts(true);
        } else {
          setClient(result);
        }
      })
      .catch(error => console.log('error', error));
  }

  return (
    <HomeContainer>
      <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit(handleCreateNewClient)} action="">
          <FormContainer>
            <section>
              <label htmlFor="name">Name</label>
              <input id="name" {...register('name')} />
            </section>
            <section>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" {...register('email')} />
            </section>
            <CustomDropdownColor id="color" register={register} />
            <section>
              <label htmlFor="cpf">CPF</label>
              <input id="cpf" {...register('cpf')} />
            </section>
          </FormContainer>

          <ButtonForm type="submit">Submit</ButtonForm>
        </form>
        <div />
      </div>
      {client ? <ClientTable {...client} /> : null}
    </HomeContainer>
  );
}
