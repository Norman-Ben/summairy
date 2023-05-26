import logo from '../assets/logo.svg';
import NavButton from './NavButton';
import { FaSignOutAlt, FaSignInAlt, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../services/auth/authSlice';
import { RootState, AppDispatch } from '../services/store';

function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  return (
    <>
      <nav className="mb-10 flex w-full items-center justify-between pt-3">
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
