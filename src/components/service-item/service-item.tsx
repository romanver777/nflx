import { useNavigate } from "react-router-dom";
import cn from "classnames";
import style from "./service-item.module.scss";

type Props = {
  name: string;
  icon: React.ReactNode;
  count: number;
};

const ServiceItem = ({ name, icon, count }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => navigate(`/${name}`);

  return (
    <div className={cn(style["service-item"], style[`service-item_${name}`])}>
      <button className={style["service-item__btn"]} onClick={handleClick}>
        {icon}
      </button>
      {!!count && <div className={style["service-item__count"]}>{count}</div>}
    </div>
  );
};

export default ServiceItem;
