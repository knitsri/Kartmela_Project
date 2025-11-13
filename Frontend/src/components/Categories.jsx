import React from 'react'
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Categories(props) {
  const {category} = props
  return (
    <div className='p-2'>
      <Link to = {`/product/category/${category.name}`}>
        <div>
             <img src={category.image} className="h-[35vh] w-full p-3"/>
             <p className="text-center font-bold text-[18px] pt-3 pb-5">{category.displayName}</p>
          </div> 
      </Link>
    </div>
  )
}

export default Categories
