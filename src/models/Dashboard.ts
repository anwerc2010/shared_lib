export interface PromoCard {
  id: string;
  title: string;
  image: string;
}

export interface Product {
  id: string;
  title: string;
  price: string;
  image: string;
}

export interface ContentCard {
  id: string;
  title: string;
  image: string;
}

export interface OfficeData {
  id: string;
  name: string;
  spend: string;
}

export interface OrderBillingData {
  id: string;
  type: 'order' | 'billing';
  title: string;
  awaitingCount?: number;
  nextDeliveryDate?: string;
  totalAmount?: string;
  overdueAmount?: string;
  viewLinkText: string;
}

export interface Dashboard {
  promoCards: PromoCard[];
  buyAgainProducts: Product[];
  recommendedProducts: Product[];
  contentCards: ContentCard[];
  officeData: OfficeData[];
  orderBillingData: OrderBillingData[];
}

