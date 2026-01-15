"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
    isOpen: boolean;
    openAuth: () => void;
    closeAuth: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const openAuth = () => setIsOpen(true);
    const closeAuth = () => setIsOpen(false);

    return (
        <AuthContext.Provider value={{ isOpen, openAuth, closeAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
