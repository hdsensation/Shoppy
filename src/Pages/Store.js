import React, {  useEffect, useState } from 'react'
import { Product } from '../Components/Product'




function Store() {

    const [product, setproduct] = useState([])
    const [det, setdet] = useState(product)

    useEffect(() => {
            
            const get=async ()=>{
                let res= await fetch('https://fakestoreapi.com/products')
                setproduct(await res.clone().json())
                setdet( await res.json())
            }
            get();
    }, [])

    // const product=Object.values(data)
    return (
        <>
        <Product product={product}  det={det} set={setdet}/>
        </>
    )
}

export default Store
