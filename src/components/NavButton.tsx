type NavButtonType = {
  btnText: string;
  link: string;
};

function NavButton({ btnText, link }: NavButtonType) {
  return (
    <button
      type="button"
      onClick={() => window.open(link, '_self')}
      className="rounded-xl border border-black bg-black py-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black min-w-[5rem]"
    >
      {btnText}
    </button>
  );
}

export default NavButton;
