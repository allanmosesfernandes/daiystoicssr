'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from 'react-oidc-context';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {

    const auth = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (auth.isLoading) return;
        if (!auth.isAuthenticated) {
            router.replace('/?unauthorized');
        }
    }, [auth.isLoading, auth.isAuthenticated]);

    if (!auth.isAuthenticated) return null;

    return <>{children}</>;
};

export default ProtectedRoute;
