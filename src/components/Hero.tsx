import NavBar from './NavBar';

const Summarizer = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <NavBar />
      <h1 className="mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-center">
        The{' '}
        <span className="bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 bg-clip-text text-transparent">
          GPT-4 Powered <br className="max-md:hidden" />
        </span>{' '}
        Article Summarizer.
      </h1>
      <h2 className="mt-5 text-lg text-gray-600 sm:text-xl text-center max-w-2xl">
        Save precious time and elevate your understanding with AI-driven
        insights, transforming your reading experience with just a few clicks.
      </h2>
    </header>
  );
};

export default Summarizer;
