export const numberFormat = (value: number) => {
  return new Intl.NumberFormat("ru").format(value);
};
