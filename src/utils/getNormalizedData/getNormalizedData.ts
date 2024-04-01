import type { Product } from "@/components/product-item/product-item";

export type NormalData = {
  [key: string]: Product[];
};

export const getNormalizedData = (data: Product[]) => {
  const normalData: NormalData = {};

  data.forEach((item) => {
    if (!Object.prototype.hasOwnProperty.call(normalData, item.category)) {
      normalData[item.category] = [];
    }
    normalData[item.category].push(item);
  });

  return normalData;
};
