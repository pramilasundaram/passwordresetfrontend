import React, { createContext, useState } from 'react';

export const userData = createContext();
export const addData = createContext();
export const updateData = createContext();
export const linkData = createContext();

export default function Provider({ children }) {
  const [user, setUser] = useState({})
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [useradd, setUseradd] = useState("");
  const [updateadd, setUpdateadd] = useState("");
  const [linkadd, setLinkadd] = useState("");
  return (
    <userData.Provider value={{ user, isAuthenticated, setIsAuthenticated, setUser }}>
    <linkData.Provider value={{ linkadd, setLinkadd}}>
     <addData.Provider value={{ useradd, setUseradd }}>
      <updateData.Provider value={{ updateadd, setUpdateadd }}>
       
          {children}
      
      </updateData.Provider>
    </addData.Provider>
    </linkData.Provider>
    </userData.Provider>
  )
}
