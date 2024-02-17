'use client';
import ProductCard from '../../../components/ProductCard';
import Link from 'next/link'
import productsData from '../../produits/productsData'

export default function Home({params}) {
  const type = params.type.toUpperCase()
  const papeterie = productsData.filter((product)=> product.type.toUpperCase() == type)
  
  const products = papeterie.map((data, i) => {
    return <ProductCard key={i} type={data.type} name={data.name}/>;
  });
console.log(params)
  return (
      <main >
        <div className="text-center text-white p-10">
          <h1 className="font-bold text-4xl mb-6">{type}</h1>
          <h2 className="text-xl">Un projet bien particulier ? <Link className='underline text-[#cce9fa]' href='/contact'> Contactez-nous</Link> pour en parler.</h2>
        </div>
        <div className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-10'>
          {products}
        </div>
       
      </main>
  )
}