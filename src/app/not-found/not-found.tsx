import { useAppSelector } from "@/store/hooks";
import PageLayout from "@/components/page-layout/page-layout";

const NotFound = () => {
  const basketCount = useAppSelector((state) => state.basket.length);

  return (
    <PageLayout basketCount={basketCount}>
      <div style={{ textAlign: "center", padding: "20px" }}>
        Страница не найдена
      </div>
    </PageLayout>
  );
};

export default NotFound;
