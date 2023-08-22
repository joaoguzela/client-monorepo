import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { FormContainer, HomeContainer, ButtonForm, InputForm } from './styles';
import { CustomDropdownColor } from '../../components/Dropdown/index';
import { ClientForm } from '../../@types/ClientForm';
import { ClientTable } from '../../components/ClientViwer/index';
import { requestClient } from '../../Request/postUser';
import { Client } from '../../@types/Client';
import PersonalToast from '../../components/Toast';
import alert from '../../assets/alert.svg';
import { newFormValidationSchema } from '../../utils/zodValidation';

export function Home() {
  const [client, setClient] = useState<Client | undefined>(undefined);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(newFormValidationSchema),
  });

  async function handleCreateNewClient(data: FieldValues) {
    const clientCreated = await requestClient(data as ClientForm);
    setClient(clientCreated);
    reset();
  }
  return (
    <HomeContainer>
      <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit(handleCreateNewClient)} action="">
          <FormContainer>
            <section>
              <label htmlFor="name">Name</label>
              <InputForm
                id="name"
                {...register('name')}
                valuecolor={errors.name?.message ? 'red' : 'black'}
              />
              {errors.name?.message ? (
                <p>
                  <img src={alert} alt="" /> {errors.name.message.toString()}
                </p>
              ) : (
                <p />
              )}
            </section>
            <section>
              <label htmlFor="email">Email</label>
              <InputForm
                type="email"
                id="email"
                {...register('email')}
                valuecolor={errors.email?.message ? 'red' : 'black'}
              />
              {errors.email?.message ? (
                <p>
                  <img src={alert} alt="" /> {errors.email.message.toString()}
                </p>
              ) : (
                <p />
              )}
            </section>
            <CustomDropdownColor id="color" register={register} />
            <section>
              <label htmlFor="cpf">CPF</label>
              <InputForm
                id="cpf"
                {...register('cpf')}
                valuecolor={errors.cpf?.message ? 'red' : 'black'}
              />
              {errors.cpf?.message ? (
                <p>
                  {' '}
                  <img src={alert} alt="" /> {errors.cpf.message.toString()}
                </p>
              ) : (
                <p />
              )}
            </section>
          </FormContainer>

          <ButtonForm type="submit">Submit</ButtonForm>
        </form>
        <div />
        <PersonalToast />
      </div>
      {client ? <ClientTable {...client} /> : null}
    </HomeContainer>
  );
}
