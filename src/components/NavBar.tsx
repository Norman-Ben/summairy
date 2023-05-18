import logo from '../assets/logo.svg';
import NavButton from './NavButton';
import { FaSignOutAlt, FaSignInAlt, FaUser } from 'react-icons/fa';

function NavBar() {
  return (
    <>
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="Summairy Logo" className="w-24 object-contain" />
        <div className="flex gap-3">
          <NavButton btnText={'Login'} link={'/login'} Icon={FaSignInAlt} />
          <NavButton btnText={'Register'} link={'/register'} Icon={FaUser} />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
