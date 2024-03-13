import React from 'react'
import data_product from './assets/data'
import Item from './Item'

function ReletedProduct() {
  return (
    <div className='flex flex-col items-center gap-[10px] h-[90vh]'>
        <h1 className='text-stone-900 text-[50px] font-medium'>Releted Products</h1>
        <hr className='w-[200px] h-[6px] rounded-[6px] bg-stone-900 ' />
        <div className='releted-product-item mt-[50px] flex gap-[10px]'>
            {data_product.map((item, i)=>{
                return <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old-price={item.old_price}
                />
            })}
        </div>
    </div>
  )
}

export default ReletedProduct