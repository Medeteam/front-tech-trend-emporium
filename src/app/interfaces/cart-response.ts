export interface CartResponse {
  userId: string;
  cartId: string;
  products: Array<{
    id: string;
    title: string;
    price: number;
    image: string;
    quantity: number;
  }> | null;
  coupon: {
    couponCode: string;
    discount: number;
  };
  totalBeforeDiscount: number;
  totalAfterDiscount: number;
  shippingCost: number;
  finalTotal: number;
}
