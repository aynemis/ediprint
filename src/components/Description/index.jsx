
import styles from './style.module.css';
import Link from 'next/link';

export default function Index() {

  return (
    <div className={styles.description} >
       <h1>Votre partenaire privilégié en impression personnalisée.</h1>
       <hr style={{ borderTop: '0.5vw dotted rgb(34,112,184)' }}></hr>
       
       <p>Chez Ediprint, nous comprenons l'importance de laisser une impression durable. 
       C'est pourquoi nous mettons notre expertise et notre passion au service de la création de produits qui reflètent l'essence même de votre marque.
       Des sacs promotionnels, des boîtes élégantes pour vos cadeaux d'entreprise ou des goodies originaux pour vos campagnes marketing, nous travaillons avec vous à chaque étape du processus, 
       de la conception initiale à la livraison finale, pour garantir que chaque produit soit parfaitement adapté à vos besoins.
       </p>
       
        <p>
          <Link href="/contact" className='underline hover:text-[rgb(204,233,250)] underline'>Contactez-nous</Link> dès aujourd'hui pour discuter de vos projets. 
          Laissez-nous transformer vos idées en réalité !
        </p>
        
        <p className='flex items-center'>
          Découvrez nos produits dès maintenant ! 
          <span>
          <Link href="/produits" className='underline hover:text-[rgb(204,233,250)] underline'>
            <button
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              className="inline-block ml-4 rounded-full bg-[#2270b8] p-1 md:p-2 uppercase leading-normal text-white shadow-[_9px_9px_-9px_#CCE9FA] transition duration-150 ease-in-out 
              hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
              ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 md:w-6 md:h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </Link> 
          </span>
        </p>
    </div>
  )
}

