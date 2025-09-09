import Link from "next/link";
import Header from "./_components/header";
//import Footer from "./_components/footer";



export default function Home() {
    return (
        <div>
            <Header />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-4">Welcome to Our Web Application</h1>
                <p className="text-lg mb-6">This is the home page of our awesome web application built with Next.js and Tailwind CSS.</p>
                <a href="/about" className="text-blue-500 hover:underline">Learn more about us</a>
                <Link href="/calendar" className="text-blue-500 hover:underline ml-4">View the Calendar</Link>
            </div>
            {/* <Footer /> */}
        </div>
    );
}
