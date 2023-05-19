import logo from '../assets/logo.svg';
import NavButton from './NavButton';
import { FaSignOutAlt, FaSignInAlt, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../services/auth/authSlice';

function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  return (
    <>
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <button type="button" onClick={() => navigate('/')}>
          <img src={logo} alt="Summairy Logo" className="w-24 object-contain" />
        </button>
        <div className="flex gap-3">
          {user ? (
            <button onClick={onLogout}>
              <NavButton
                btnText={'Logout'}
                link={'/'}
                Icon={FaSignOutAlt}
                onClick={onLogout}
              />
            </button>
          ) : (
            <>
              <NavButton btnText={'Login'} link={'/login'} Icon={FaSignInAlt} />
              <NavButton
                btnText={'Register'}
                link={'/register'}
                Icon={FaUser}
              />
            </>
          )}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
