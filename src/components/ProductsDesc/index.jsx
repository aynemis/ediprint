'use client';
import Link from 'next/link';

export default function Index() {
    return (
        <div className='py-6 sm:py-8 lg:py-12 lg:px-12'>
    <div  className="bg-gray-800 py-6 lg:py-12">
        <div id="papeterie">
            <h2 className='text-xl font-bold lg:text-2xl text-white'>Papeterie</h2>
            <li>Agenda</li>
            <li>Carnets</li>
            <li>Bloc notes</li>
        </div>
    </div>
    <div  className="bg-gray-800 py-6 lg:py-12">   
        <div id="pub">
            <h2 className='text-xl font-bold lg:text-2xl text-white'>Publicité PLV</h2>
            <li>Présentoirs</li>
            <li>Kakemonos</li>
        </div>
    </div> 
    <div  className="bg-gray-800 py-6 lg:py-12"> 
        <div id="packaging">
            <h2 className='text-xl font-bold lg:text-2xl text-white'>Packaging</h2>
            <li>Sacs</li>
            <li>Boites</li>
        </div>
    </div>
    <div  className="bg-gray-800 py-6 lg:py-12">    
        <div id="goodies">
            <h2 className='text-xl font-bold lg:text-2xl text-white'>Goodies</h2>
            <li>Gourdes</li>
            <li>Parapluies</li>
        </div>
    </div>
    </div>
    )
}