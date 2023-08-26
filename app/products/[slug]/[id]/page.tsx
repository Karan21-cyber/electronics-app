import React from 'react'

function ProductDetail({params}:{params:{id:number}}) {
  return (
    <div>Product Id {params?.id}</div>
  )
}

export default ProductDetail