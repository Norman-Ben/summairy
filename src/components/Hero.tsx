import NavBar from './NavBar';
import { useSelector } from 'react-redux';
import { RootState } from '../services/store';

const Hero = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <header className="flex w-full flex-col items-center justify-center">
      <NavBar />
      {!user && (
        <>
          <h1 className="mt-5 text-center text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl">
            The{' '}
            <span className="bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 bg-clip-text text-transparent">
              GPT-4 Powered <br className="max-md:hidden" />
            </span>{' '}
            Article Summarizer.
          </h1>
          <h2 className="mt-5 max-w-2xl text-center text-lg text-gray-600 sm:text-xl">
            Save precious time and elevate your understanding with AI-driven
            insights, transforming your reading experience with just a few
            clicks.
          </h2>
        </>
      )}
    </header>
  );
};

export default Hero;
