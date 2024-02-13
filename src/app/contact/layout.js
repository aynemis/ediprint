import { Inter } from "next/font/google";
import "../../app/globals.css";
import Sidemenu from '../../components/Sidemenu';
import Header from '../../components/Header'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ediprint",
  description: "Contactez nous pour tous vos besoins d'impression.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <Sidemenu/>
        {children}
      </body>
    </html>
  );
}
