export const totalPriceItem = (order) => {
  const Price = order.price;
  const Count = order.count

  return Price * Count;
}