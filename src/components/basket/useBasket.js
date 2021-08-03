import { useSelector } from 'react-redux'

export const useBasket = () => {
  const items = useSelector(({ basket }) => basket.items);
  const totalItems = useSelector(({ basket }) => basket.items);

  const addedProducts = Object.keys(items).map((key) => {
    return items[key].items[0];
  });
  return {
    items,
    totalItems,
    addedProducts,
  };
};
