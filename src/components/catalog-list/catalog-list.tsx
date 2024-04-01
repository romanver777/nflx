import ProductItem from "@/components/product-item/product-item";
import type { Product } from "../product-item/product-item";
import type { NormalData } from "@/utils/getNormalizedData/getNormalizedData";
import style from "./catalog-list.module.scss";

type Props = {
  catalogData: NormalData;
  onAddToBasket: (item: Product) => void;
  isLoading: boolean;
  isError: string | null;
};

const CatalogList = ({
  catalogData,
  onAddToBasket,
  isLoading,
  isError,
}: Props) => {
  const onAdd = (item: Product) => onAddToBasket(item);

  if (isLoading) return <div style={{ textAlign: "center" }}>Loading..</div>;
  if (isError) return <div style={{ textAlign: "center" }}>Error</div>;

  return (
    <div className={style["catalog-list"]}>
      {Object.keys(catalogData).map((category) => (
        <div key={category} className={style["catalog-list__item"]}>
          <h3 className={style["catalog-list__title"]}>{category}</h3>
          <ul className={style["catalog-list__ul"]}>
            {catalogData[category].map((item: Product) => (
              <li className={style["catalog-list__li"]} key={item.id}>
                <ProductItem
                  item={item}
                  onAddToBasket={(item) => onAdd(item)}
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CatalogList;
