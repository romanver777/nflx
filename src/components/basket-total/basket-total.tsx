import { numberFormat } from "@/utils/numberFormat/numberFormat";
import style from "./basket-total.module.scss";

type Props = {
  total: number;
};

const BasketTotal = ({ total }: Props) => {
  return (
    <div className={style["basket-total"]}>
      <div className={style["basket-total__text"]}>
        <div className={style["basket-total__title"]}>Итого</div>
        <div className={style["basket-total__result"]}>
          &#8381; {numberFormat(total)}
        </div>
      </div>
      <button className={style["basket-total__btn"]}>
        Перейти к оформлению
      </button>
    </div>
  );
};

export default BasketTotal;
