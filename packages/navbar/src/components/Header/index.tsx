import { NavLink } from 'react-router-dom';
import { HeaderContainer } from './styles';
import logoForm from '../../assets/logoForm.svg';

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoForm} alt="" />
      </NavLink>
    </HeaderContainer>
  );
}
