import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar />
        </header>
        <main className="flex-grow">{children}</main>
        <div className="relative">
          <Footer />
        </div>
      </body>
    </html>
  );
}
