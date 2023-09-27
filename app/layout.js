import './globals.css';
import { Urbanist } from 'next/font/google';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar/navbar';

const font = Urbanist({ subsets: ['latin'] });

export const metadata = {
    title: 'Ecommerce Store',
    description: 'Ecommerce Store',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={font.className}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
