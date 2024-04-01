import { useCallback, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { increment, decrement, remove } from "@/store/basket/basket";
import PageLayout from "@/components/page-layout/page-layout";
import BasketList from "@/components/basket-list/basket-list";

const Basket = () => {
  const dispatch = useAppDispatch();
  const basketData = useAppSelector((state) => state.basket.data);
  const basketCount = useAppSelector((state) => state.basket.length);
  const basketTotal = useAppSelector((state) => state.basket.totalPrice);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const callbacks = {
    onIncrement: useCallback((id: number) => dispatch(increment(id)), [dispatch]),
    onDecrement: useCallback((id: number) => dispatch(decrement(id)), [dispatch]),
    onDelete: useCallback((id: number) => dispatch(remove(id)), [dispatch]),
  };

  return (
    <PageLayout basketCount={basketCount}>
      <BasketList
        data={basketData}
        basketTotal={basketTotal}
        onIncrement={callbacks.onIncrement}
        onDecrement={callbacks.onDecrement}
        onDelete={callbacks.onDelete}
      />
    </PageLayout>
  );
};

export default Basket;
