import Header from "../header/header";
import Footer from "../footer/footer";
import style from "./page-layout.module.scss";

type Props = {
  children: React.ReactNode;
  basketCount: number;
};

const PageLayout = ({ children, basketCount }: Props) => {
  return (
    <div className={style["page-layout"]}>
      <Header basketCount={basketCount} />
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
