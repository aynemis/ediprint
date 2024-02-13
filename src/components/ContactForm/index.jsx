"use client"
import { useState } from 'react';

export default function Contact() {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('')
    const [rep, setRep] = useState('');

   const sendMail = async (e) => { 
                e.preventDefault();

                const response = await fetch('/api/emails', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    subject,
                    message,
                })
                })
                const data = await response.json();
                setRep(data.message);
                setName("");
                setEmail("");
                setSubject("");
                setMessage("");

            
        }


  return (
    <main className="container my-12 mx-auto md:px-6">
    <div className="relative h-[200px] lg:h-[400px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('/images/contactimage.jpg')]">
    </div>
    <div className='container  px-12 '>
        <div className="block rounded-lg bg-[rgba(204,233,250)] opacity-95 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:py-10 md:px-12 -mt-[80px] backdrop-blur-[30px]">
        <div class="my-auto grid items-center md:grid-cols-3 lg:grid-cols-3">
          <div class="mx-auto mb-12 md:mb-0 mt-12 md:mt-0 text-center lg:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="currentColor" 
                className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <h6 class="font-medium">La Réunion</h6>
          </div>
          
          <div class="mx-auto mb-12 md:mb-0 text-center lg:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor" 
            className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
            <h6 class="font-medium">06 92 49 34 19</h6>
          </div>

          <div class="mx-auto mb-12 md:mb-0 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" 
            fill="none" viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor" 
            className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
            </svg>

            <h6 class="font-medium">mansoor@ediprint.re</h6>
          </div>
        </div>
        </div>
        
    </div>

    <div className="flex flex-col items-center justify-center lg:pl-18 lg:pr-18">
      <form onSubmit={sendMail} className="h-full w-2/3 lg:w-1/3 space-y-6">
        <div className="flex flex-col items-start w-full justify-start">
          <h1 className="text-xl font-semibold">Contactez-nous</h1>
        </div>
        <div className="relative flex flex-col space-y-1">
          <label htmlFor="title" className="text-xl text-white">
            Nom
          </label>
          <input
            name="title"
            type="text"
            id="title"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
            placeholder="Votre nom"
            className="rounded-xl border-2 border-gray-400 p-2"
          />
        </div>
        <div className="relative flex flex-col space-y-1">
          <label htmlFor="title" className="text-xl text-white">
            Email
          </label>
          <input
            name="title"
            type="text"
            id="title"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            placeholder="Votre email"
            className="rounded-xl border-2 border-gray-400 p-2"
          />
        </div>
        <div className="relative flex flex-col space-y-1">
          <label htmlFor="title" className="text-xl text-white">
            Sujet
          </label>
          <textarea
            name="title"
            type="text"
            id="title"
            required
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value)
            }}
            placeholder="Pourquoi nous contactez-vous ?"
            className="rounded-xl border-2 border-gray-400 p-2"
          />
        </div>
        <div className="relative flex flex-col space-y-1">
          <label htmlFor="title" className="text-xl text-white">
            Message
          </label>
          <textarea
            name="description"
            id="description"
            required
            cols={10}
            rows={5}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value)
            }}
            placeholder="Votre message."
            className="rounded-xl border-2 border-gray-400 p-2"
          />
        </div>
        <button style= {{backgroundColor:"rgb(34,112,184)"}} type='submit' className="ml-auto flex w-1/3 items-center justify-center space-x-3 rounded-lg bg-blue-600 p-2 text-white shadow-blue-500 hover:bg-blue-700 hover:shadow-md">
          <span>Envoyer</span>
        </button>
        <p className="mt-4 text-white text-xl">{rep}</p>
      </form>
    </div>
    </main>
  )
}