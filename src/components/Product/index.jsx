import React, { useState } from 'react'
import styles from './style.module.css';
import Image from 'next/image';

const products = [
    {
        title: "Sacs",
        src: "sacs.png"
    },
    {
        title: "Boîtes",
        src: "boites.jpg"
    },
    {
        title: "PLV",
        src: "plv.jpg"
    },
    {
        title: "Goodies",
        src: "goodies.jpg"
    },
]

export default function Index() {

    const [selectedProduct, setSelectedProduct] = useState(0);
  
    return (
        <div className={styles.products}>
             
            <div style={{ width: '500px', height: '500px' }}>
                <Image 
                    src={`/images/${products[selectedProduct].src}`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '100%', objectFit: 'cover'}}
                    alt="Product image"
                />
            </div>
                
            

            <div className={styles.productList}>
                {
                    products.map( (products, index) => {
                        return <div key={index} onMouseOver={() => {setSelectedProduct(index)}} className={styles.productEl}>
                            <h2>{products.title}</h2>
                        </div>
                    })
                }
            </div>
            
        </div>
    )
}