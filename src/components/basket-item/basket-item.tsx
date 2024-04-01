// / <reference types="vite-plugin-svgr/client" />
import { useCallback } from "react";
import { numberFormat } from "@/utils/numberFormat/numberFormat";
import type { BasketItem } from "@/store/basket/basket";
import DeleteIcon from "@/assets/delete.svg?react";
import MinusIcon from "@/assets/minus.svg?react";
import PlusIcon from "@/assets/plus.svg?react";
import cn from "classnames";
import style from "./basket-item.module.scss";

type Props = {
  item: BasketItem;
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
  onDelete: (id: number) => void;
};

const BasketItem = (props: Props) => {
  const { id, title, price, img, count, total } = props.item;

  const callbacks = {
    onIncrement: useCallback(() => props.onIncrement(id), [props, id]),
    onDecrement: useCallback(() => props.onDecrement(id), [props, id]),
    onDelete: useCallback(() => props.onDelete(id), [props, id]),
  };

  return (
    <div className={style["basket-item"]}>
      <div className={style["basket-item__top"]}>
        <div className={style["basket-item__img-wr"]}>
          <img className={style["basket-item__img"]} src={img} alt={title} />
        </div>
        <div className={style["basket-item__text"]}>
          <div className={style["basket-item__title"]}>{title}</div>
          <div className={style["basket-item__price"]}>
            {numberFormat(price)} &#8381;
          </div>
        </div>
        <button
          className={style["basket-item__btn"]}
          onClick={callbacks.onDelete}
        >
          <DeleteIcon />
        </button>
      </div>
      <div className={style["basket-item__bottom"]}>
        <div className={style["basket-item__controls"]}>
          <button
            className={cn(
              style["basket-item__decr"],
              count === 1 ? style["basket-item__decr_disable"] : ""
            )}
            onClick={callbacks.onDecrement}
          >
            <MinusIcon />
          </button>
          <div className={style["basket-item__count"]}>{count}</div>
          <button
            className={style["basket-item__incr"]}
            onClick={callbacks.onIncrement}
          >
            <PlusIcon />
          </button>
        </div>
        <div className={style["basket-item__card-total"]}>
          {numberFormat(total)} &#8381;
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
