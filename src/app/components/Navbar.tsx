'use client';
import Link from 'next/link';
import { useAuth } from 'react-oidc-context';
import logo from '../../../public/assets/daily.svg';
import Image from 'next/image';

const Navbar = () => {
    const auth = useAuth();
    const handleClick = (): void => {
        if (auth.isAuthenticated) {
            const clientId = '7h0ufkns3tfp38l9msclcd9ddo';
            const logoutUri = 'http://localhost:3000';
            const cognitoDomain = 'https://daily-stoic-reminders.auth.eu-west-2.amazoncognito.com';

            auth.removeUser(); // Clear local session
            window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
        } else {
            auth.signinRedirect();
        }
    };

    return (
        <div className="navbar bg-base-100 shadow-sm border-b border-[#3d47514d]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {' '}
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />{' '}
                        </svg>
                    </div>
                </div>
                <Link href="/">
                    <Image src={logo} alt="Daily Stoic Logo" className="w-[100px]" />
                </Link>
            </div>
            <div className="navbar-end">
                <button className="btn" onClick={handleClick}>
                    {auth.isAuthenticated ? 'Logout' : 'Login'}
                </button>{' '}
            </div>
        </div>
    );
};

export default Navbar;
