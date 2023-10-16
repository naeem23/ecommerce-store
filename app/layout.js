import { Urbanist } from 'next/font/google';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar/navbar';
import ModelProvider from '@/providers/model-provider';
import ToastProvider from '@/providers/toast-provider';

import './globals.css';

const font = Urbanist({ subsets: ['latin'] });

export const metadata = {
    title: 'Ecommerce Store',
    description: 'Ecommerce Store',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={font.className}>
                <ModelProvider />
                <ToastProvider />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
