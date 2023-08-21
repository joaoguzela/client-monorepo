import { FormContainer, HomeContainer, ButtonForm } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <h1>Register</h1>
      <FormContainer action="">
        <section>
          <label htmlFor="name">Name</label>
          <input id="name" />
        </section>
        <section>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </section>
        <section>
          <label htmlFor="cpf">CPF</label>
          <input id="cpf" />
        </section>
        <section>
          <label htmlFor="color">Color</label>
          <input id="color" />
        </section>
        <ButtonForm type="submit">Submit</ButtonForm>
      </FormContainer>
    </HomeContainer>
  );
}
