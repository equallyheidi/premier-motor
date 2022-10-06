import React from 'react'
import '../../categories/categories.styles.scss'
import { Outlet } from 'react-router'
import CategoryItem from '../../categories/categories.component'

const Home = () => {

    const categories = [
        {
          "id": 1,
          "title": "Vehicles",
          "imageUrl": "/vehicles.jpg"
        },
        {
          "id": 2,
          "title": "Parts",
          "imageUrl": "/parts.jpg"
        },
        {
          "id": 3,
          "title": "Accessories",
          "imageUrl": "/accessories.jpg"
        },
        {
          "id": 4,
          "title": "Clothing",
          "imageUrl": "/clothing.jpg"
        },
        {
          "id": 5,
          "title": "Gear",
          "imageUrl": "/gear.jpg"
        }
      ];
    
      return (
         <div>
             <CategoryItem categories={categories} />
         </div> 
        /*<div className='categories-container'>
          {categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))}
        </div>*/
      );
}



export default Home;