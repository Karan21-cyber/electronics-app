import { getProducts } from '@/app/api/route'
import React from 'react'

async function Products({params}:{params:{slug:string}}) {
  
  return (
    <div>Products Page {params?.slug}</div>
  )
}

export default Products