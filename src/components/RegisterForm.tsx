import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register, reset } from '../services/auth/authSlice';
import { AppDispatch, RootState } from '../services/store';
import { FaUser } from 'react-icons/fa';
import { RegisterFormDataTypes } from '../types/SummarizerTypes';

function RegisterForm() {
  const [formData, setFormData] = useState<RegisterFormDataTypes>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    password: '',
    confirmPassword: '',
  });

  const { name, email, password, confirmPassword } = formData;

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

  // Validate username (3-20 characters)
  const validateUsername = (name: string) => {
    if (name.length < 3) {
      setFormErrors((errors) => ({
        ...errors,
        name: 'Name must be at least 3 characters long. Please try again.',
      }));
      toast.error('Name must be at least 3 characters long. Please try again.');

      return false;
    } else if (name.length > 20) {
      setFormErrors((errors) => ({
        ...errors,
        name: 'Name must be less than 20 characters long. Please try again.',
      }));
      toast.error(
        'Name must be less than 20 characters long. Please try again.'
      );
      return false;
    } else {
      setFormErrors((errors) => ({ ...errors, name: '' }));
      return true;
    }
  };

  // Validate password (6 characters, 1 letter, 1 number)
  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (!passwordRegex.test(password)) {
      setFormErrors((errors) => ({
        ...errors,
        password:
          'Password must be at least 6 characters long and contain at least one letter and one number. Please try again.',
      }));
      toast.error(
        'Password must be at least 6 characters long and contain at least one letter and one number. Please try again.'
      );
      return false;
    } else {
      setFormErrors((errors) => ({
        ...errors,
        password: '',
      }));
      return true;
    }
  };

  const validateConfirmPassword = (
    password: string,
    confirmPassword: string
  ) => {
    if (password !== confirmPassword) {
      setFormErrors((errors) => ({
        ...errors,
        confirmPassword: 'Passwords do not match',
      }));
      toast.error('Passwords do not match');
      return false;
    } else {
      setFormErrors((errors) => ({
        ...errors,
        confirmPassword: '',
      }));
      return true;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isUsernameValid = validateUsername(name);
    const isPasswordValid = validatePassword(password);
    const doPasswordsMatch = validateConfirmPassword(password, confirmPassword);

    if (isUsernameValid && isPasswordValid && doPasswordsMatch) {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  return (
    <>
      <section className="flex h-screen w-full flex-col items-center justify-start">
        <div className="flex w-full max-w-md flex-col items-center justify-center rounded-xl bg-white p-4 shadow-lg">
          <FaUser className="h-16 w-16 text-black" />
          <h1 className="mt-4 text-2xl font-bold text-black">Sign Up</h1>
          <form
            className="mt-4 flex w-full flex-col gap-3"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Username"
              value={name}
              name="name"
              onChange={handleDataChange}
              required
              className={`peer block w-full rounded-md border border-gray-200 bg-white px-6 py-2.5 font-satoshi text-sm font-medium shadow-lg focus:border-black focus:outline-none focus:ring-0 ${
                formErrors.name && 'border-red-500'
              }`}
            />
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
              className={`peer block w-full rounded-md border border-gray-200 bg-white px-6 py-2.5 font-satoshi text-sm font-medium shadow-lg focus:border-black focus:outline-none focus:ring-0 ${
                formErrors.password ? 'border-red-500' : 'border-gray-200'
              }}`}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              name="confirmPassword"
              onChange={handleDataChange}
              required
              className={`peer block w-full rounded-md border bg-white px-6 py-2.5 font-satoshi text-sm font-medium shadow-lg focus:border-black focus:outline-none focus:ring-0 ${
                formErrors.confirmPassword
                  ? 'border-red-500'
                  : 'border-gray-200'
              }}`}
            />
            {formErrors.name && (
              <p className="text-sm text-red-500">{formErrors.name}</p>
            )}
            {formErrors.password && (
              <p className="text-sm text-red-500">{formErrors.password}</p>
            )}
            {formErrors.confirmPassword && (
              <p className="text-sm text-red-500">
                {formErrors.confirmPassword}
              </p>
            )}

            <button
              type="submit"
              className="mt-4 w-full rounded-md bg-black py-2 text-sm font-medium uppercase text-white shadow-lg focus:ring-2 focus:ring-black peer-focus:ring-2"
            >
              Register
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default RegisterForm;
