'use client'
import React, { createContext, useEffect, useState } from 'react'
import Header from './layout/Header';
export const UserContext = createContext();

const Provider = ({ children }) => {
    const [lang, setLang] = useState(true);
    const [info, setInfo] = useState('');

    useEffect(() => {
        const adminData = async () => {
            try {
                const res = await fetch('/api/admin/data', { method: 'GET' });
                const data = await res.json();
                if (data.success) setInfo(data.message);
            } catch (error) {
                console.log(error);
            }
        }
        adminData();
}, []);

return (
    <div className="sm:bg-[url('/bg/gray-squared-fur-texture.jpg')] bg-white bg-cover bg-center bg-fixed">
        <UserContext.Provider value={{ lang, info, setLang }}>
            <Header />
            {children}
        </UserContext.Provider>
    </div>
)
}

export default Provider