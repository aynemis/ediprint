import { Inter } from "next/font/google";
import "../../app/globals.css";
import Sidemenu from '../../components/Sidemenu';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ediprint",
  description: "Imprimeur gros volume pour produits promotionnels de qualité. Partout à La Réunion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel='icon' href='/favicon.ico'/>
      </head>
      <body className={inter.className}>
        <Sidemenu/>
        {children}
      </body>
    </html>
  );
}
