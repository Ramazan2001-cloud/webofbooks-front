import React from 'react';
import { Roboto } from 'next/font/google';
import './styles/globals.scss';
import './styles/reset.scss';
import HeaderSection from '@/components/systems/header/HeaderSection';

const inter = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <HeaderSection />
                {children}
                <footer>footer</footer>
            </body>
        </html>
    );
}
