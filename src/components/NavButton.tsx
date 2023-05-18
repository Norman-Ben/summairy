import { IconType } from 'react-icons';

type NavButtonType = {
  btnText: string;
  link: string;
  Icon: IconType;
  onClick?: () => void;
};

function NavButton({ btnText, link, Icon, onClick }: NavButtonType) {
  return (
    <button
      type="button"
      onClick={onClick ? onClick : () => window.open(link, '_self')}
      className="rounded-xl border border-black bg-black py-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black min-w-[5rem]"
    >
      {Icon && <Icon className="inline-block mr-2" />}
      {btnText}
    </button>
  );
}

export default NavButton;
