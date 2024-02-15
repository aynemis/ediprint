'use client';
import ProductsIntro from '../../components/ProductsIntro';
import ProductDesc from '../../components/ProductsDesc';


export default function Home() {


  return (
      <main className='flex flex-col items-center'>
        <ProductsIntro />
        <ProductDesc />
      </main>
  )
}