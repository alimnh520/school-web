'use client'
import React, { createContext, useState } from 'react'
import Header from './layout/Header';
export const UserContext = createContext();

const Provider = ({ children }) => {
    const [lang, setLang] = useState(true);
    return (
        <div className="bg-[url('/bg/gray-squared-fur-texture.jpg')] bg-cover bg-center bg-fixed">
            <UserContext.Provider value={{lang, setLang}}>
                <Header />
                {children}
            </UserContext.Provider>
        </div>
    )
}

export default Provider