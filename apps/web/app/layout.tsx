import Footer from '../components/Footer';
import Navbar from '../components/navbar/Navbar';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <header>
          <Navbar />
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="w-full p-2 bg-black">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
