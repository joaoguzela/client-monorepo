import { HeaderContainer } from './styles';
import logoForm from '../../assets/logoForm.svg'
import { NavLink } from 'react-router-dom';
export function Header(){
 
  return <HeaderContainer>
    <NavLink to='/'>
        <img src={logoForm}/>
    </NavLink>
    
    </HeaderContainer>
}