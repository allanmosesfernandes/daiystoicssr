'use client';
import { AuthProvider } from 'react-oidc-context';
import { getAuthConfig } from '@/lib/authConfig';

export function Providers({ children }: { children: React.ReactNode }) {
    const authConfig = getAuthConfig();

    return <AuthProvider {...authConfig}>{children}</AuthProvider>;
}
