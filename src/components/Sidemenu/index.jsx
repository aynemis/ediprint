"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function ProductsIntro() {

    const [showSidebar, setShowSidebar] = useState(false);
    const [showDropdown1, setShowDropdown1] = useState(false);



    return (
        <>
        {showSidebar ? (
          
            <svg onClick={() => setShowSidebar(!showSidebar)}
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            className="w-10 h-10 flex items-center cursor-pointer fixed right-10 top-6  z-50 stroke-[#050219] stroke-4">
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
            style={{ backgroundColor:"rgb(204,233,250)"}}
          className={`top-0 right-0 w-[90vw] md:w-[50vw] lg:w-[25vw]  p-10  text-white fixed h-full z-40  ease-in-out duration-300 
          ${
            showSidebar ? "translate-x-0 " : "translate-x-full"
          }`}
        >
          

          <div className="flex flex-col justify-start items-center mb-4 mt-20 px-4 border-b border-gray-600 w-full  ">
            <Link href="/contact" 
              className=" text-left  flex justify-between items-center w-full py-5 space-x-14  ">
                <p className="text-xl leading-5 text-[#050219] uppercase">Demande de devis</p>
            </Link>
          </div> 

          {showDropdown1 ? (
            <div className="flex flex-col justify-start items-center mb-4 px-4 border-b border-gray-600 w-full  ">
              <button onClick={() => setShowDropdown1(!showDropdown1)} 
              className="text-left  flex justify-between items-center w-full py-5 space-x-14  ">
                <p className="text-xl leading-5 text-[#050219] uppercase ">Produits & Services</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#050219]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                </svg>

              </button>
              <div className="flex justify-start  flex-col w-full md:w-auto items-start pb-1 ">
                <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-[#050219] focus:text-white hover:bg-[#050219] text-gray-800 rounded px-3 py-2  w-full md:w-52">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                </svg>
                  <p className="text-base leading-4  ">Papeterie</p>
                </button>

                <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-[#050219] focus:text-white hover:bg-[#050219] text-gray-800 rounded px-3 py-2  w-full md:w-52">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                </svg>
                  <p className="text-base leading-4  ">PLV</p>
                </button>

                <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-[#050219] focus:text-white hover:bg-[#050219] text-gray-800 rounded px-3 py-2 w-full md:w-52">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                </svg>
                  <p className="text-base leading-4  ">Packaging </p>
                </button>

                <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-[#050219] focus:text-white hover:bg-[#050219] text-gray-800 rounded px-3 py-2  w-full md:w-52">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                  <p className="text-base leading-4  ">Goodies</p>
                </button>
                
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-start items-center   px-4 border-b border-gray-600 w-full  ">
              <button onClick={() => setShowDropdown1(!showDropdown1)} 
              className="text-left  flex justify-between items-center w-full py-5 space-x-14  ">
                <p className="text-xl leading-5 text-black uppercase">Produits & Services</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#050219]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>

              </button>
            </div>  
          )}

    

        </div>
      </>
        )
    }