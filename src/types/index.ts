export interface Product {
    id: string;
    title: string;
    image: string;
    duration: string;
    students: string;
    rating: string;
    price: string;
    priceValue: number;
  }
  
  export interface CartItem extends Product {
    quantity: number;
  }