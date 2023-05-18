import { useState, useEffect } from 'react';
import { FaSignInAlt } from 'react-icons/fa';

type FormDataTypes = {
  email: string;
  password: string;
};

function LoginForm() {
  const [formData, setFormData] = useState<FormDataTypes>({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Add code to submit the form
  };

  return (
    <>
      <section className="flex flex-col items-center justify-start w-full h-screen">
        <div className="flex flex-col items-center justify-center w-full max-w-md p-4 bg-white rounded-xl shadow-lg">
          <FaSignInAlt className="w-16 h-16 text-black" />
          <h1 className="mt-4 text-2xl font-bold text-black">Login</h1>
          <form
            className="flex flex-col w-full mt-4 gap-3"
            onSubmit={handleSubmit}
          >
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
              className={`block w-full rounded-md border border-gray-200 bg-white py-2.5 px-6 text-sm shadow-lg font-satoshi font-medium focus:border-black focus:outline-none focus:ring-0 peer`}
            />

            <button
              type="submit"
              className="w-full py-2 mt-4 text-sm font-medium text-white uppercase bg-black rounded-md shadow-lg peer-focus:ring-2 focus:ring-2 focus:ring-black"
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
