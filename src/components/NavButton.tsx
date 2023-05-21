import { NavButtonType } from '../types/SummarizerTypes';

function NavButton({ btnText, link, Icon, onClick }: NavButtonType) {
  return (
    <button
      type="button"
      onClick={onClick ? onClick : () => window.open(link, '_self')}
      className="min-w-[5rem] rounded-xl border border-black bg-black px-4 py-1.5 text-sm text-white transition-all hover:bg-white hover:text-black"
    >
      {Icon && <Icon className="mr-2 inline-block" />}
      {btnText}
    </button>
  );
}

export default NavButton;
