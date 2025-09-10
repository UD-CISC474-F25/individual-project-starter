'use client';

import { Navbar01 } from "./ui/shadcn-io/navbar-01";
import { Navbar05 } from "./ui/shadcn-io/navbar-05";

export default function Header() {
    // Navbar Logic for if a user is logged in or not can go here
    // If logged in, show Navbar05, else show Navbar01
    /*
    if (user.isLoggedIn) {
        return <div className="relative w-full" ><Navbar05 /></div>;
    } else {
        return <div className="relative w-full" ><Navbar01 /></div>;
    }
    */
   return( 
        <div className="relative w-full" >
            <Navbar01 
                signInHref="/login"
                ctaHref="/signup"
                navigationLinks={[
                    { href: '#', label: 'Home', active: true },
                    { href: '#features', label: 'Features' },
                    { href: '#pricing', label: 'Pricing' },
                    { href: '#about', label: 'About' },
                ]}
            />
        </div>
    );
}