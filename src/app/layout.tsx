import { Roboto } from 'next/font/google';
import "./globals.scss";

const inter = Roboto({ subsets: ["latin"], weight: ["400","500","700"] });

export default function RootLayout({
  	children,
}: Readonly<{
  	children: React.ReactNode;
}>) {
  return (
	<html lang="en">	
		<body className={inter.className}>
		  	<header>header</header>
				{children}
			<footer>footer</footer>
		</body>
    </html>
  );
}
