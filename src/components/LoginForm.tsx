import { useState, useEffect } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login, reset } from '../services/auth/authSlice';
import { AppDispatch, RootState } from '../services/store';
import { LoginFormDataTypes } from '../types/SummarizerTypes';

function LoginForm() {
  const [formData, setFormData] = useState<LoginFormDataTypes>({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { isSuccess, isError, message, user } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    if (isSuccess || user) {
      dispatch(reset());
      navigate('/');
    }

    if (isError) {
      dispatch(reset());
      toast.error(message);
    }
  }, [isSuccess, isError, user, message, dispatch, navigate]);

  const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData)).catch((err) => {
      console.log(err);
    });
  };

  return (
    <>
      <section className="flex h-screen w-full flex-col items-center justify-start">
        <div className="flex w-full max-w-md flex-col items-center justify-center rounded-xl bg-white p-4 shadow-lg">
          <FaSignInAlt className="h-16 w-16 text-black" />
          <h1 className="mt-4 text-2xl font-bold text-black">Login</h1>
          <form
            className="mt-4 flex w-full flex-col gap-3"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="Email"
              value={email}
              name="email"
              onChange={handleDataChange}
              required
              className="peer block w-full rounded-md border border-gray-200 bg-white px-6 py-2.5 font-satoshi text-sm font-medium shadow-lg focus:border-black focus:outline-none focus:ring-0"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              name="password"
              onChange={handleDataChange}
              required
              className={`peer block w-full rounded-md border border-gray-200 bg-white px-6 py-2.5 font-satoshi text-sm font-medium shadow-lg focus:border-black focus:outline-none focus:ring-0`}
            />

            <button
              type="submit"
              className="mt-4 w-full rounded-md bg-black py-2 text-sm font-medium uppercase text-white shadow-lg focus:ring-2 focus:ring-black peer-focus:ring-2"
            >
              Login
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default LoginForm;
