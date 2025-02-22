import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

@Injectable()
export class ProductsService {
  private products: Product[] = [{  id: 1,
    name: 'hp',
    description: 'HP Envy Laptop 17t-da000, 17.3',
    price: 799.99,
    imageUrl: 'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08944380.png?impolicy=Png_Res'
 }];
 
  private idCounter = 1;

  findAll(): Product[] {
    return this.products;
  }

  create(createProductDto: CreateProductDto): Product {
    const newProduct = { id: this.idCounter++, ...createProductDto };
    this.products.push(newProduct);
    return newProduct;
  }

  findOne(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}
