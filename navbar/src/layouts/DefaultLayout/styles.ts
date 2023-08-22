import styled from 'styled-components';

export const LayoutContainer = styled.div`
  max-width: 74rem;

  margin: 5rem auto;
  padding: 2.5rem;
  min-width: 30rem;
  max-height: 50rem;
  background: ${props => props.theme.white};

  border-radius: 8px;

  display: flex;
  flex-direction: column;
`;
