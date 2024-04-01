/// <reference types="vite-plugin-svgr/client" />
import { Link } from "react-router-dom";
import cn from "classnames";
import LocaleSelect from "../locale-select/locale-select";
import VkIcon from "@/assets/VK.svg?react";
import TgIcon from "@/assets/Telegram.svg?react";
import WaIcon from "@/assets/Whatsapp.svg?react";
import style from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <Link to="/" className={style["footer__title"]}>
        QPICK
      </Link>
      <div className={style["footer__nav"]}>
        <ul className={style["footer__nav-list"]}>
          <li className={style["footer__nav-item"]}>
            <Link to="/favorites" className={style["footer__nav-link"]}>
              Избранное
            </Link>
          </li>
          <li className={style["footer__nav-item"]}>
            <Link to="/basket" className={style["footer__nav-link"]}>
              Корзина
            </Link>
          </li>
          <li className={style["footer__nav-item"]}>
            <Link to="/contacts" className={style["footer__nav-link"]}>
              Контакты
            </Link>
          </li>
        </ul>
        <div className={style["footer__nav-cond"]}>
          <Link
            to="/condition"
            className={cn(
              style["footer__nav-link"],
              style["footer__nav-cond-link"]
            )}
          >
            Условия сервиса
          </Link>
          <LocaleSelect active="ru" onSelect={()=>{}} />
        </div>
      </div>
      <div className={style["footer__social"]}>
        <Link to="https://vk.com" className={style["footer__social-link"]}>
          <VkIcon />
        </Link>
        <Link
          to="https://webk.telegram.org"
          className={style["footer__social-link"]}
        >
          <TgIcon />
        </Link>
        <Link
          to="https://whatsapp.com"
          className={style["footer__social-link"]}
        >
          <WaIcon />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
