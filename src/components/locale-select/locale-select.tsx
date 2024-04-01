/// <reference types="vite-plugin-svgr/client" />
import cn from "classnames";
import WorldIcon from "@/assets/world.svg?react";
import style from "./locale-select.module.scss";

type Props = {
  active: string;
  onSelect: (name: string) => void;
};

const LocaleSelect = ({ active, onSelect }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) =>
    onSelect((e.target as HTMLElement).innerText);

  return (
    <div className={style["locale-select"]}>
      <WorldIcon />
      <button
        className={cn(
          style["locale-select__btn"],
          active.toLowerCase() === "ru"
            ? style["locale-select__btn_active"]
            : ""
        )}
        onClick={handleClick}
      >
        Рус
      </button>
      <button
        className={cn(
          style["locale-select__btn"],
          active.toLowerCase() === "eng"
            ? style["locale-select__btn_active"]
            : ""
        )}
        onClick={handleClick}
      >
        Eng
      </button>
    </div>
  );
};

export default LocaleSelect;
