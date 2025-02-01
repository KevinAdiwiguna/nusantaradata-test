"use client"


import React, { createContext, useState, ReactNode } from "react";

interface SidebarContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const SidebarContext = createContext<SidebarContextType>({
  isOpen: false,
  setIsOpen: () => { },
});

interface SidebarContextProviderProps {
  children: ReactNode;
}

export const SidebarContextProvider = ({ children }: SidebarContextProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};