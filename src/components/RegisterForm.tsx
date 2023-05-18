import { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';

type FormDataTypes = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

function RegisterForm() {
  const [formData, setFormData] = useState<FormDataTypes>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [formErrors, setFormErrors] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const { username, email, password, confirmPassword } = formData;

  const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate username (3-20 characters)
  const validateUsername = (username: string) => {
    if (username.length < 3) {
      setFormErrors((errors) => ({
        ...errors,
        username: 'Name must be at least 3 characters long. Please try again.',
      }));
      return false;
    } else if (username.length > 20) {
      setFormErrors((errors) => ({
        ...errors,
        username:
          'Name must be less than 20 characters long. Please try again.',
      }));
      return false;
    } else {
      setFormErrors((errors) => ({ ...errors, username: '' }));
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

    const isUsernameValid = validateUsername(username);
    const isPasswordValid = validatePassword(password);
    const doPasswordsMatch = validateConfirmPassword(password, confirmPassword);

    if (isUsernameValid && isPasswordValid && doPasswordsMatch) {
      // Add code to submit the form
    }
  };

  return (
    <>
      <section className="flex flex-col items-center justify-start w-full h-screen">
        <div className="flex flex-col items-center justify-center w-full max-w-md p-4 bg-white rounded-xl shadow-lg">
          <FaUser className="w-16 h-16 text-black" />
          <h1 className="mt-4 text-2xl font-bold text-black">Sign Up</h1>
          <form
            className="flex flex-col w-full mt-4 gap-3"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Username"
              value={username}
              name="username"
              onChange={handleDataChange}
              required
              className={`block w-full rounded-md border border-gray-200 bg-white py-2.5 px-6 text-sm shadow-lg font-satoshi font-medium focus:border-black focus:outline-none focus:ring-0 peer ${
                formErrors.username && 'border-red-500'
              }`}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              name="email"
              onChange={handleDataChange}
              required
              className="block w-full rounded-md border border-gray-200 bg-white py-2.5 px-6 text-sm shadow-lg font-satoshi font-medium focus:border-black focus:outline-none focus:ring-0 peer"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              name="password"
              onChange={handleDataChange}
              required
              className={`block w-full rounded-md border border-gray-200 bg-white py-2.5 px-6 text-sm shadow-lg font-satoshi font-medium focus:border-black focus:outline-none focus:ring-0 peer ${
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
              className={`block w-full rounded-md border bg-white py-2.5 px-6 text-sm shadow-lg font-satoshi font-medium focus:border-black focus:outline-none focus:ring-0 peer ${
                formErrors.confirmPassword
                  ? 'border-red-500'
                  : 'border-gray-200'
              }}`}
            />
            {formErrors.username && (
              <p className="text-sm text-red-500">{formErrors.username}</p>
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
              className="w-full py-2 mt-4 text-sm font-medium text-white uppercase bg-black rounded-md shadow-lg peer-focus:ring-2 focus:ring-2 focus:ring-black"
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
