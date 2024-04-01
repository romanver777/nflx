import { Link } from "react-router-dom";
import ServiceList from "../service-list/service-list";
import style from "./header.module.scss";

type Props = {
  basketCount: number;
};

const Header = ({ basketCount }: Props) => {
  return (
    <header className={style.header}>
      <Link to="/" className={style.header__title}>
        QPICK
      </Link>
      <ServiceList favoritesCount={2} basketCount={basketCount} />
    </header>
  );
};

export default Header;
