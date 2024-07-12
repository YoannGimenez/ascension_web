// useAuth.ts
import { useEffect, useState } from 'react';

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsAuthenticated(!!token); // !!token converts to boolean
    }, []);

    const logout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        window.location.href = "/"
    };

    const login = (token: string) => {
        localStorage.setItem('token', token);
        setIsAuthenticated(true);
        window.location.href = "/"
    };

    return { isAuthenticated, logout, login };
};
