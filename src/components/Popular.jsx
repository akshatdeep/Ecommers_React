import React from 'react'
import data_product from '../components/assets/data'
import Item from './Item'

function Popular() {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className='popular_item'>
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old-price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default Popular