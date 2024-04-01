import { useEffect, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { loadCatalogData } from "@/store/catalog/catalog";
import { addToBasket } from "@/store/basket/basket";
import PageLayout from "@/components/page-layout/page-layout";
import CatalogList from "@/components/catalog-list/catalog-list";
import type { Product } from "@/components/product-item/product-item";

const Main = () => {
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector((state) => state.catalog.isLoading);
  const isError = useAppSelector((state) => state.catalog.isError);
  const catalogData = useAppSelector((state) => state.catalog.data);
  const basketCount = useAppSelector((state) => state.basket.length);

  const onAddToBasket = useCallback(
    (item: Product) => {
      dispatch(addToBasket(item));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(loadCatalogData());
  }, [dispatch]);

  return (
    <PageLayout basketCount={basketCount}>
      <CatalogList
        catalogData={catalogData}
        onAddToBasket={onAddToBasket}
        isLoading={isLoading}
        isError={isError}
      />
    </PageLayout>
  );
};

export default Main;
