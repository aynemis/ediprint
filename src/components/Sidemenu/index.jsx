"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function ProductsIntro() {

    const [showSidebar, setShowSidebar] = useState(false);


    return (
        <>
        {showSidebar ? (
          
            <svg onClick={() => setShowSidebar(!showSidebar)}
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            className="w-10 h-10 flex items-center cursor-pointer fixed right-10 top-10  z-50 stroke-white stroke-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>

        ) : (
            <svg onClick={() => setShowSidebar(!showSidebar)} 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"  
            className="fixed w-10 h-10 z-30 flex items-center cursor-pointer right-10 top-6 stroke-white stroke-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        )}
  
        <div
            style={{ backgroundColor:"rgba(204,233,250,0.9)"}}
          className={`top-0 right-0 w-[90vw] md:w-[50vw] lg:w-[25vw]  p-10 pl-20 text-white fixed h-full z-40  ease-in-out duration-300 
          ${
            showSidebar ? "translate-x-0 " : "translate-x-full"
          }`}
        >
          <Link href="/contact">
          <h3 style={{ color:"#050219"}} className="mt-20 text-4xl cursor-pointer font-semibold text-white">
            Demande de devis
          </h3>
          </Link>

          <Link href="/contact">
          <h3 style={{ color:"#050219"}} className="mt-20 text-4xl cursor-pointer font-semibold text-white">
            Produits & Services
          </h3>
          </Link>
        </div>
      </>
        )
    }