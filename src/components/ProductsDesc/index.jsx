'use client';
import Link from 'next/link';

export default function Index() {
    return (
        <div className='py-6 sm:py-8 lg:py-12 lg:px-12'>
    <div  className="bg-gray-800 mb-12 rounded-lg px-12 py-6 lg:py-12">
        <div id="papeterie">
            <h2 className='text-xl font-bold lg:text-2xl mb-4'>Papeterie</h2>
            <li className='text-lg'>Agenda</li>
            <li className='text-lg'>Carnets</li>
            <li className='text-lg'>Bloc notes</li>
        </div>
    </div>
    <div  className="bg-gray-800 mb-12 rounded-lg px-12 py-6 lg:py-12">   
        <div id="pub">
            <h2 className='text-xl font-bold lg:text-2xl mb-4'>Publicité PLV</h2>
            <li className='text-lg'>Présentoirs</li>
            <li className='text-lg'>Kakemonos</li>
        </div>
    </div> 
    <div  className="bg-gray-800 mb-12 rounded-lg px-12 py-6 lg:py-12"> 
        <div id="packaging">
            <h2 className='text-xl font-bold lg:text-2xl mb-4'>Packaging</h2>
            <li className='text-lg'>Sacs</li>
            <li className='text-lg'>Boites</li>
        </div>
    </div>
    <div  className="bg-gray-800 mb-12 rounded-lg px-12 py-6 lg:py-12">    
        <div id="goodies">
            <h2 className='text-xl font-bold lg:text-2xl mb-4'>Goodies</h2>
            <li className='text-lg'>Gourdes</li>
            <li className='text-lg'>Parapluies</li>
        </div>
    </div>
    </div>
    )
}