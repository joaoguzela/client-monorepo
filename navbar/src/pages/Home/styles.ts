import styled from 'styled-components';

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  align-items: left;
  flex-direction: column;
  justify-content: center;
  gap: 3.5rem;
  form {
    display: flex;
    flex-direction: column;
    align-items: left;
    max-width: 20rem;
    gap: 2rem;
  }
  section {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }
`;
export const FormContainer = styled.form`
  input {
    border-radius: 0.5rem;
    height: 2.5rem;
  }
`;
export const ButtonForm = styled.button`
  border-radius: 0.5rem;
  width: 10rem;
  height: 2rem;
  background-color: #1e90ff;
`;
