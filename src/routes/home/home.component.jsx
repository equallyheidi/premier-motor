import React from 'react'

import { Outlet } from 'react-router'
import CategoryItem from '../../components/categories/categories.component'

const Home = () => {

      return (
         <div>
             <CategoryItem />
             <Outlet />
         </div> 
      );
}

export default Home;