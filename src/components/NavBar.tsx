import logo from '../assets/logo.svg';
import NavButton from './NavButton';

type btnTextType = {
  btnText: string;
};

function NavBar() {
  return (
    <>
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="Summairy Logo" className="w-24 object-contain" />
        <div className="flex gap-3">
          <NavButton btnText={'Login'} link={'/login'} />
          <NavButton btnText={'Register'} link={'/register'} />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
