export interface ProductListItem {
  id: number;
  name: string;
  price: string;
  rating: number;
  reviewCount: number;
  deliveryInfo: string;
  image: string;
  isFavorite: boolean;
  actionButton: 'notify' | 'addToCart';
  isCompared: boolean;
}

export interface ProductList {
  products: ProductListItem[];
}

export interface Specification {
  label: string;
  value: string;
}

export interface RecommendedProduct {
  id: string;
  name: string;
  price: string;
  image: string;
}

export interface ProductDetails {
  id: string;
  name: string;
  rating: number;
  reviewCount: number;
  price: string;
  estimatedShipTime: string;
  deliveryLocation: string;
  isBackordered: boolean;
  backorderMessage: string;
  image: string;
  description: string[];
  specifications: Specification[];
  recommendedProducts: RecommendedProduct[];
}

