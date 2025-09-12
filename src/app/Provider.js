'use client'
import React, { createContext, useState } from 'react'
import Header from './layout/Header';
export const UserContext = createContext();

const Provider = ({ children }) => {
    const [lang, setLang] = useState(true);
    const info = "";
    return (
        <div className="sm:bg-[url('/bg/gray-squared-fur-texture.jpg')] bg-white bg-cover bg-center bg-fixed">
            <UserContext.Provider value={{lang, info , setLang}}>
                <Header />
                {children}
            </UserContext.Provider>
        </div>
    )
}

export default Provider