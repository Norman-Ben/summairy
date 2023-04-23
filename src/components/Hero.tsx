import { Logo } from '../assets/Logo.png';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center flex-col">
        <img src={Logo} alt="Summairy Logo" />
      </nav>
    </header>
  );
};

export default Hero;
