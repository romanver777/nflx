// / <reference types="vite-plugin-svgr/client" />
import { numberFormat } from "@/utils/numberFormat/numberFormat";
import cn from "classnames";
import RateStar from "@/assets/rate-star.svg?react";
import style from "./product-item.module.scss";

export type Product = {
  id: number;
  title: string;
  price: number;
  pricePrevious: number | null;
  category: string;
  rate: number;
  img: string;
};

type Props = {
  item: Product;
  onAddToBasket: (item: Product) => void;
};

const ProductItem = (props: Props) => {
  const { title, price, pricePrevious, rate, img } = props.item;

  const handleClick = (item: Product) => props.onAddToBasket(item);

  return (
    <div className={style["product-item"]}>
      <div className={style["product-item__img-wrap"]}>
        <img src={img} alt={title} />
      </div>
      <div
        className={cn(
          style["product-item__body"],
          pricePrevious ? style["product-item__bod_pp"] : ""
        )}
      >
        <div className={style["product-item__desc"]}>
          <div className={style["product-item__title"]}>{title}</div>
          <div className={style["product-item__price-wr"]}>
            <div className={style["product-item__price"]}>
              {numberFormat(price)} &#8381;
            </div>
            {pricePrevious && (
              <div className={style["product-item__price-prev"]}>
                {numberFormat(pricePrevious)} &#8381;
              </div>
            )}
          </div>
        </div>
        <div className={style["product-item__act"]}>
          <div className={style["product-item__rate"]}>
            <RateStar />
            <div className={style["product-item__rate-num"]}>{rate}</div>
          </div>
          <button
            className={style["product-item__btn"]}
            onClick={() => handleClick(props.item)}
          >
            Купить
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
