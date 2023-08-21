import styled, { css } from 'styled-components';

export const CustomSelectList = styled.select`
  option {
    border-radius: 0.5rem;
    height: 2.5rem;
  }
  border-radius: 0.5rem;
  height: 2.5rem;
  &:focus-visible {
    outline: dotted 1px rgba(255, 255, 255, 0.2);
  }
`;
export type OptionColor =
  | 'orange'
  | 'red'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'anil'
  | 'purple';

interface PropsOptionProps {
  valuecolor: OptionColor;
  key: string;
}
export const CustomOptionInput = styled.option<PropsOptionProps>`
  ${props => {
    return css`
      background-color: ${props.valuecolor};
    `;
  }}
`;
