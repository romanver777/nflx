import BasketItem from "../basket-item/basket-item";
import BasketTotal from "../basket-total/basket-total";
import type { BasketData } from "@/store/basket/basket";
import style from "./basket-list.module.scss";

type Props = {
  data: BasketData;
  basketTotal: number;
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
  onDelete: (id: number) => void;
};

const BasketList = ({
  data,
  basketTotal,
  onIncrement,
  onDecrement,
  onDelete,
}: Props) => {
  return (
    <div className={style["basket-list"]}>
      <h3 className={style["basket-list__title"]}>Корзина</h3>
      {!Object.keys(data).length ? (
        <div style={{ textAlign: "center" }}>Пока пусто</div>
      ) : (
        <div className={style["basket-list__data"]}>
          <ul className={style["basket-list__ul"]}>
            {Object.keys(data).map((key: string) => (
              <li className={style["basket-list__li"]} key={key}>
                <BasketItem
                  item={data[`${+key}`]}
                  onIncrement={onIncrement}
                  onDecrement={onDecrement}
                  onDelete={onDelete}
                />
              </li>
            ))}
          </ul>
          <BasketTotal total={basketTotal} />
        </div>
      )}
    </div>
  );
};

export default BasketList;
