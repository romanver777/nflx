/// <reference types="vite-plugin-svgr/client" />
import ServiceItem from "../service-item/service-item";
import FavoritesIcon from "@/assets/favorites.svg?react";
import BasketIcon from "@/assets/basket.svg?react";
import style from "./service-list.module.scss";

type Props = {
  favoritesCount: number;
  basketCount: number;
};

const ServiceList = ({ favoritesCount, basketCount }: Props) => {
  return (
    <div className={style["service-list"]}>
      <ServiceItem
        name="favorites"
        icon={<FavoritesIcon />}
        count={favoritesCount}
      />
      <ServiceItem name="basket" icon={<BasketIcon />} count={basketCount} />
    </div>
  );
};

export default ServiceList;
