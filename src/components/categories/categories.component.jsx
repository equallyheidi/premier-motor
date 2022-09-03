import React from 'react'
import './categories.styles.scss'
import CategoryItem from '../category-item/category-item.component';


const Categories = () => {

    const categories = [
        {
          "id": 1,
          "title": "Vehicles",
          "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
        },
        {
          "id": 2,
          "title": "Parts",
          "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
        },
        {
          "id": 3,
          "title": "Accessories",
          "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
        },
        {
          "id": 4,
          "title": "Clothing",
          "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
        },
        {
          "id": 5,
          "title": "Gear",
          "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
        }
      ];
    
      return (
        <div className='categories-container'>
          {categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))}
        </div>
      );
}



export default Categories;
