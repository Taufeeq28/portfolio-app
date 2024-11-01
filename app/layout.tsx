import type { Metadata } from "next";
import { ToastContainer } from 'react-toastify';
import Footer from './components/footer';
import './css/globals.scss';
import Navbar from './components/navbar';
import './css/card.scss';

// Import Inter font if needed
import { Inter } from 'next/font/google';

// Define the Geist Sans and Geist Mono fonts


// Define the Inter font as an example
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Taufeeq Portfolio",
  description: "Taufeeq Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${inter.className}`}>
      <ToastContainer />
        <main className="min-h-screen mx-5 md:mx-8 lg:mx-12 xl:mx-16 2xl:mx-24">
          
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
