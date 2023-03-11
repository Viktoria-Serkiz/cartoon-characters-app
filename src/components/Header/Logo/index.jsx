import LogoSmall from "../../../assets/img/logo-lg.png";

const Logo = () => {
  return (
    <div className="logo">
      <img
        className="logo__img"
        src={LogoSmall}
        alt="RickMorty"
        width={312}
        height={104}
      />
    </div>
  );
};

export { Logo };
