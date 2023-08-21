import styled from 'styled-components';

export const HomeContainer = styled.main`
  display: flex;
  gap: 3rem;
  margin-top: 3rem;
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 20rem;
  flex: 1;
  margin-top: 2rem;

  input {
    border-radius: 0.5rem;
    height: 2.5rem;
  }
  section {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }
  div {
    flex: 1;
    margin-left: 200px;
  }
`;
export const ButtonForm = styled.button`
  margin-top: 1.5rem;
  border-radius: 0.5rem;
  width: 10rem;
  height: 2rem;
  background-color: #1e90ff;
`;
