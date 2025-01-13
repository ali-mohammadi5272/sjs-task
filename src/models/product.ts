interface DimensionsType {
  width: number;
  height: number;
  depth: number;
}

interface ReviewType {
  rating: number;
  comment: string;
  date: Date;
  reviewerName: string;
  reviewerEmail: string;
}

interface MetaType {
  createdAt: Date;
  updatedAt: Date;
  barcode: string;
  qrCode: string;
}
interface ProductType {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: DimensionsType;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: ReviewType[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: MetaType;
  thumbnail: string;
  images: string[];
}

export type { ProductType };
