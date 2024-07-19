import { useEffect, useState } from 'react';

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("local storage", localStorage)
        const token = localStorage.getItem('token');
        setIsAuthenticated(!!token);
        setLoading(false);
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

    const getUserId = () => {
        if (isAuthenticated){
            const token = localStorage.getItem('token');
            const parsedToken = parseJwt(token);
            return parsedToken.userId;
        } else {
            // window.location.href = "/"
        }
    }

    const getJWTToken = () => {
        if (isAuthenticated){
            return localStorage.getItem('token');
        }
    }

    function parseJwt(token: string|null) {
        if (!token){
            // window.location.href = "/"
        } else {
            const base64Url = token.split('.')[1];
            const base64 = base64Url.replace('-', '+').replace('_', '/');
            return JSON.parse(window.atob(base64));
        }
    }

    return { isAuthenticated, loading, logout, login, getUserId, getJWTToken };
};
