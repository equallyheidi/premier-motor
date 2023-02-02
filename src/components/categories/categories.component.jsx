import React from 'react'
import { DirectoryContainer } from './categories.styles'
import DirectoryItem from '../directory-item/directory-item.component';

const categories = [
  {
    id: 1,
    title: "Vehicles",
    imageUrl: "/vehicles.jpg",
    route: "shop/vehicles",
  },
  {
    id: 2,
    title: "Parts",
    imageUrl: "/parts.jpg",
    route: "shop/parts",
  },
  {
    id: 3,
    title: "Accessories",
    imageUrl: "/accessories.jpg",
    route: "shop/accessories",
  },
  {
    id: 4,
    title: "Clothing",
    imageUrl: "/clothing.jpg",
    route: "shop/clothing",
  },
  {
    id: 5,
    title: "Gear",
    imageUrl: "/gear.jpg",
    route: "shop/gear",
  }
];


const Categories = () => {
      return (
        <DirectoryContainer>
          {categories.map((category) => (
            <DirectoryItem key={category.id} category={category} />
          ))}
        </DirectoryContainer>
      );
}



export default Categories;
