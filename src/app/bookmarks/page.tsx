import React from 'react'
import ProtectedRoute from '../components/ProtectedRoute';

export const Bookmarks = () => {
    return (
        <>
            <ProtectedRoute>
                <main className="flex mt-4 justify-center p-4">
                    <div className="max-w-5xl mx-auto text-center color-base">
                        <h1 className="text-4xl md:text-6xl font-mf-consent pb-2 border-b text-base-content">Bookmarks</h1>
                    </div>
                </main>
            </ProtectedRoute>
        </>
    );
}

export default Bookmarks