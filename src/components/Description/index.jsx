
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
    </div>
  )
}

